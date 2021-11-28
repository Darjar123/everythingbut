<?php
namespace Drupal\add_simple_products\Form;

use Drupal\Core\Form\FormBase;
use Drupal\Core\Form\FormStateInterface;
use Drupal\Core\Url;
use Drupal\commerce_product\Entity\ProductVariation;
use Drupal\commerce_product\Entity\Product;
use Drupal\commerce_price\Price;
use Drupal\file\Entity\File;
use Drupal\taxonomy\Entity\Term;

/* Implements InputDemo form controller.
 *
 * This example demonstrates the different input elements that are used to
 * collect data in a form.
*/
class AddProductForm extends FormBase
{

    /**
     * {@inheritdoc}
     */
    public function buildForm(array $form, FormStateInterface $form_state)
    {
        $form['name'] = ['#type' => 'textfield', '#title' => t('Name') , '#size' => 60, '#maxlength' => 128, '#description' => $this->t('Textfield, #type = textfield') , ];
        
        $form['price'] = ['#type' => 'textfield', '#title' => t('Price') , '#size' => 60, '#maxlength' => 128, '#description' => $this->t('Textfield, #type = textfield') , ];

        $form['sku'] = ['#type' => 'textfield', '#title' => t('Sku') , '#size' => 60, '#maxlength' => 128, '#description' => $this->t('Textfield, #type = textfield') , ];
        
        $form['upc'] = ['#type' => 'textfield', '#title' => t('UPC') , '#size' => 60, '#maxlength' => 128, '#description' => $this->t('Textfield, #type = textfield') , ];

        $options = array('Select Condition','Excellent','Mint in Box', 'Like New','Still Sealed/Brand New');
        $form['condition'] = ['#type' => 'select', '#title' => t('Condition') , '#options' => $options , ];     
        
        $options = array(
            '' =>  'Select Condition',
            '6' => 'DVD',
            '7' => 'Bluray', 
            '8' => 'Laser Disc', 
            '9' => 'VHS', 
            '10' =>'HD', 
            '11' =>'3D',
            '12' =>'DVD/Blu-Ray',
            '13' =>'4K/Blu-Ray',
            '14' =>'4K/Blu-Ray/DVD',
            '14' =>'3D Blu-Ray/Blu-ray'
            );
        $form['media_type'] = ['#type' => 'select', '#title' => t('Media Type') , '#options' => $options , ];
        
        $form['thumbnail'] = ['#type' => 'textfield', '#title' => t('Thumbnail') , '#size' => 60, '#maxlength' => 255, '#description' => $this->t('Textfield, #type = textfield') , ];
        
        $form['imdb_title'] = ['#type' => 'textfield', '#title' => t('IMDB Title') ,'#description' => '<div id="getinfo"><strong>Click here to get IMDB Info</strong></div>' , ];
     // Textarea.
        $form['description'] = ['#type' => 'textarea', '#title' => 'Description', '#description' => $this->t('Textarea, #type = textarea') , ];
    
        $form['category'] = ['#type' => 'textfield', '#title' => t('Category') , ];
        
        $form['actors'] = ['#type' => 'textarea', '#title' => t('Actors') , ];

        $form['ratings'] = ['#type' => 'textfield', '#title' => t('Ratings') , ]; 
 
        $form['actions'] = ['#type' => 'actions', ];

        $form['actions']['submit'] = ['#type' => 'submit', '#value' => $this->t('Submit') , '#description' => $this->t('Submit, #type = submit') , ];

        return $form;
    }

    /**
     * {@inheritdoc}
     */
    public function getFormId()
    {
        return 'add_simple_products';
    }

    /**
     * {@inheritdoc}
     */
    public function submitForm(array & $form, FormStateInterface $form_state)
    {
        // Find out what was submitted.
        $values = $form_state->getValues();
        //get variations
        $sku_holder = explode('_',$values['sku']);
        $database = \Drupal::database();
        $query = $database->select('commerce_product_variation_field_data', 'cpv');
        $query->condition('cpv.sku', '%' . db_like($sku_holder[0]) . '%' , 'LIKE');
        $query->fields('cpv', ['variation_id']);
        $query->fields('cpv', ['product_id']);
        $query->fields('cpv', ['sku']);
        $results = $query->execute();
        $var_id = "";

        $new_sku = $values['sku']."_".$values['condition'];
 
        foreach ($results as $result) {
          // Do something with each $record.
          if(!empty($result->product_id)){
            $var_id = $result->variation_id;
            $product_id = $result->product_id;
            $sku = $result->sku;
          }
          if($result->sku == $new_sku){
              $matching_sku = $new_sku;
          }
        }



        /*********** check to see if product exists ************/        
       
        if (!empty($product_id))
        {
          if( $sku == $matching_sku ){
            $targetEntity = ProductVariation::load($var_id);
            $targetEntity->field_stock = $targetEntity->field_stock + 1; 
            $targetEntity->attribute_conditions = $values['condition'];
            $targetEntity->sku = $values['sku']."_".$values['condition'];
            $targetEntity->attribute_media_type = $values['media_type'];
            $targetEntity->save();
            
            $product = \Drupal\commerce_product\Entity\Product::load($product_id);
            $product->variations = $targetEntity;
            $product->save;
            
         
            $link = "/admin/commerce/pos/labels/". $targetEntity->id() . "?width=800&amp;height=600&iframe=true";
            drupal_set_message(t('Update Variavtion : Print  <a href="@link/" class="use-ajax colorbox colorbox-inline” data-dialog-options="{&quot;width&quot;:800}" data-dialog-type="modal">Label</a>', array('@link' => $link)));
          }else{
            $variation = \Drupal\commerce_product\Entity\ProductVariation::create(
                [
                 'uid' => 1,
                 'type' => 'movies', 
                 'sku' => $values['sku']."_".$values['condition'] ,
                 'status' => 1,
                 'price' => new Price($values['price'], 'CAD') , 
                 'title' => $values['name'], 
                 'field_upc' => $values['upc'], 
                 'field_stock' => $values['field_stock'] + 1, 
                 'attribute_media_type' => $values['media_type'],
                 'attribute_conditions' => $values['condition'] ]);
            $variation->save();
            //var_dump($variation->id());
           
            $product = \Drupal\commerce_product\Entity\Product::load($product_id);
            $product->addVariation($variation);
            $product->save();
            
             $link = "/admin/commerce/pos/labels/". $variation->id() . "?width=800&amp;height=600&iframe=true";
            // dsm($variation);
            drupal_set_message(t('Add New Product variation' . $values['media_type'] . ' Print  <a href="@link" class="use-ajax colorbox colorbox-inline” data-dialog-options="{&quot;width&quot;:800}" data-dialog-type="modal">Label</a>', array('@link' => $link)));
          }
        }
        else
        {
            $variation = \Drupal\commerce_product\Entity\ProductVariation::create(['type' => 'movies', 'sku' => $values['sku']."_".$values['condition'] , 'price' => new Price($values['price'], 'CAD') , 'title' => $values['name'], 'field_upc' => $values['upc'], 'attribute_conditions' => $values['condition'] ]);

            $variation->save();

            /**
             * uid [Integer]
             *   Foreign key of the user that created the product.
             *
             * type [String] - [DEFAULT = default]
             *   Foreign key of the product type being used.
             *
             * title [String]
             *   The product title.
             *
             * stores [Array(\Drupal\commerce_store\Entity\StoreInterface)]
             *   Array of stores this product belongs to.
             *
             * variations [Array(\Drupal\commerce_product\Entity\ProductVariationInterface)]
             *   Array of variations that belong to this product.
             */

            $store = array(
                "1",
                "2"
            );

            //before we add a product check to see if it exists
            //Import images from URL
            $image_url = $values['thumbnail'];
            $file_info = system_retrieve_file($image_url, 'public://', true, $replace = FILE_EXISTS_REPLACE);

            $product = \Drupal\commerce_product\Entity\Product::create(['uid' => 1, 'type' => 'movies', 'title' => $values['name'], 'stores' => $store, 'body' => $values['description'], 'variations' => $variation,  ]);
            $product->field_product_images[] = ['target_id' => $file_info->id() , 'alt' => $values['name'], 'title' => 'Title' ];
            $product->save();


            $categories = explode(",", $values['category']);
            $terms_prod = array();

            foreach ($categories as $category)
            {

                // Set name properties.
                $properties['name'] = $category;
 
                // Set vocabulary
                $vid = "category";
                $properties['vid'] = $vid;
                // Load taxonomy term by properties.
                
                $terms = taxonomy_term_load_multiple_by_name($category, $vid);

                if (empty($terms)) {
                  //  print "add new term" . $category ."<br />";
                  $new_term = Term::create([
                    'name' => $category,
                    'vid' => $vid,
                    ])->save();
                  $terms = taxonomy_term_load_multiple_by_name($category, $vid);
                  $terms = reset($terms);
                  $terms_prod = $terms->id();
                  $product->field_category[] = $terms->id() ;
                }else{
                  $terms = taxonomy_term_load_multiple_by_name($category, $vid);
                  $terms = reset($terms);
                  $terms_prod = $terms->id();
                  $product->field_category[] = $terms->id() ;
                }
                
            }

            
            $product->save();
            
            
            $str_actors = substr($values['actors'],0,-1);
            $actors = explode(",", $str_actors);
            $terms_prod = array();
            foreach ($actors as $actor)
            {
            
                // Set name properties.
                $properties['name'] = $actor;
                //print_r($category);  
                // Set vocabulary - not important.
                $vid = "actors";
                // Load taxonomy term by properties.
                
                $terms = taxonomy_term_load_multiple_by_name($actor, $vid);

                if (empty($terms)) {
                  //  print "add new term" . $category ."<br />";
                  $new_term = Term::create([
                    'name' => $actor,
                    'vid' => $vid,
                  ])->save();

                  $terms = taxonomy_term_load_multiple_by_name($actor, $vid);
                  $terms = reset($terms);
                  $terms_prod = $terms->id();
                  $product->field_actors[] = $terms->id() ;

                }else{
                  $terms = taxonomy_term_load_multiple_by_name($actor, $vid);
                  $terms = reset($terms);
                  $terms_prod = $terms->id();
                  $product->field_actors[] = $terms->id() ;
                }
             
            }
            $product->save();
            
            //dsm($values['field_stock']);
             $link = "/admin/commerce/pos/labels/". $variation->id() . "?width=800&amp;height=600&iframe=true";
            drupal_set_message(t('Add product : Print product label  <a href="@link" class="use-ajax colorbox colorbox-inline” data-dialog-options="{&quot;width&quot;:800}" data-dialog-type="modal">Label</a>', array('@link' => $link)));
        }
    }

}

