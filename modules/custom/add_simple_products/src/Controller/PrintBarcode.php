<?php

namespace Drupal\add_simple_products\Controller;

use Drupal\Core\Controller\ControllerBase;
use Picqer\Barcode\BarcodeGenerator as ExternalGenerator;
use Picqer\Barcode\BarcodeGeneratorPNG;
use Picqer\Barcode\Exceptions\BarcodeException;
use Drupal\commerce_pos_label;
use Drupal\commerce_product\Entity\ProductVariationInterface;

class PrintBarcode extends ControllerBase{
      /**
   * Storage for commerce_product_variation entities.
   *
   * @var \Drupal\Core\Entity\EntityStorageInterface
   */
  protected $productVariationStorage;
  
  
  
    public function print(ProductVariationInterface $commerce_product_variation = NULL) {
        
        $form[]  = \Drupal::formBuilder()->getForm('Drupal\commerce_pos_label\Form\PrintLabelsForm',$commerce_product_variation);
        $form[]  = \Drupal::formBuilder()->getForm('Drupal\add_simple_products\Form\AddProductForm');
        
        return  $form;
    }
}