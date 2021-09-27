<?php

use Drupal\Component\Utility\Html;
use Drupal\Core\Form\FormStateInterface;
use Drupal\system\Form\ThemeSettingsForm;
use Drupal\file\Entity\File;
use Drupal\Core\Url;

function toux_form_system_theme_settings_alter(&$form, \Drupal\Core\Form\FormStateInterface &$form_state) {
    $form['settings'] = array(
      	'#type' => 'details',
      	'#title' => t('Theme settings'),
       	'#open' => TRUE,
    );
    $form['settings']['header'] = array(

        '#type' => 'details',

        '#title' => t('Image settings'),

        '#open' => FALSE,

    );
  	
    $form['settings']['general_setting'] = array(
        '#type' => 'details',
        '#title' => t('General Settings'),
        '#open' => FALSE,
    );

    $form['settings']['general_setting']['general_setting_tracking_code'] = array(
        '#type' => 'textarea',
        '#title' => t('Tracking Code'),
        '#default_value' => theme_get_setting('general_setting_tracking_code', 'toux'),
    );
    // custom css
    $form['settings']['custom_css'] = array(
      '#type' => 'details',
      '#title' => t('Custom CSS'),
      '#open' => FALSE,
    );
    $form['settings']['custom_css']['custom_css'] = array(
      '#type' => 'textarea',
      '#title' => t('Custom CSS'),
      '#default_value' => theme_get_setting('custom_css', 'toux'),
      '#description'  => t('<strong>Example:</strong><br/>h1 { font-family: \'Metrophobic\', Arial, serif; font-weight: 400; }')
    );
    ////////logo home 3
     $form['settings']['header']['logo_image']['logo_site_image_file'] = array(

        '#type' => 'textfield',

        '#title' => t('URL of the Logo Site image'),

        '#default_value' => theme_get_setting('logo_site_file'),

        '#description' => t('Enter a URL image.'),

        '#size' => 40,

        '#maxlength' => 512,

    );

    $form['settings']['header']['logo_image']['logo_site'] = array(

        '#type' => 'file',

        '#title' => t('Upload logo site image'),

        '#size' => 40,

        '#attributes' => array('enctype' => 'multipart/form-data'),

        '#description' => t('If you don\'t jave direct access to the server, use this field to upload your logo image. Uploads limited to .png .gif .jpg .jpeg .apng .svg extensions'),

        '#element_validate' => array('toux_image_validate'),

    );
    
}
function toux_image_validate($element, FormStateInterface $form_state){
  global $base_url;

  $validators = array('file_validate_extensions' => array('png gif jpg jpeg apng svg'));
  $file = file_save_upload('logo_site', $validators, "public://", NULL, FILE_EXISTS_REPLACE);

  if (!empty($file)) {
    // change file's status from temporary to permanent and update file database
    if ((is_object($file[0]) == 1)) {
      $file[0]->status = FILE_STATUS_PERMANENT;
      $file[0]->save();
      $uri = $file[0]->getFileUri();
      $file_url = file_create_url($uri);
      $file_url = str_ireplace($base_url, '', $file_url);
      $form_state->setValue('logo_site_file', $file_url);
    }
  }
 

 
}