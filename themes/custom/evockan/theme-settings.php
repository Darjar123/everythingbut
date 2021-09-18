<?php

use Drupal\Component\Utility\Html;
use Drupal\Core\Form\FormStateInterface;
use Drupal\system\Form\ThemeSettingsForm;
use Drupal\file\Entity\File;
use Drupal\Core\Url;

function evockan_form_system_theme_settings_alter(&$form, \Drupal\Core\Form\FormStateInterface $form_state) {
    $theme_file = drupal_get_path('theme', 'evockan') . '/theme-settings.php';
    $build_info = $form_state->getBuildInfo();
    if (!in_array($theme_file, $build_info['files'])) {
        $build_info['files'][] = $theme_file;
    }
    $form_state->setBuildInfo($build_info);

    $form['#submit'][] = 'evockan_theme_settings_form_submit';


        $form['settings'] = array(
        '#type' => 'details',
        '#title' => t('Theme settings'),
        '#open' => TRUE,
        '#attached' => array(
          'library' =>  array(
            'evockan/admin-lib'
          ),
        ),
    );



// Skin 
    $form['settings']['skin'] = array(
        '#type' => 'details',
        '#title' => t('Switcher Style'),
        '#open' => FALSE,

    );
    
    $form['settings']['skin']['switcher_enable'] = array(
        '#type' => 'select',
        '#title' => t('Switcher enable'),
        '#options' => array(
            'on' => t('ON'),
            'off' => t('OFF'),
        ),
        '#default_value' => theme_get_setting('switcher_enable','evockan'),
    );



    $form['settings']['skin']['color_primary'] = array(
        '#type' => 'radios',
        '#title' => t('Predefined skins'),
        '#options' => array(
            ''      => t('Color 1'),
            '-2'        => t('Color 2'),
            '-3'         => t('Color 3'),
            '-4'          => t('Color 4'),
            '-5'        => t('Color 5'),
            '-6'          => t('Color 6'),
            '-7'         => t('Color 7'),
            '-8'           => t('Color 8'),

        ),
        '#attributes' => array(
            'class' => array('evockan-color'),
        ),
        '#default_value' => theme_get_setting('color_primary','evockan') ,
    );


    $form['settings']['general_setting'] = array(
        '#type' => 'details',
        '#title' => t('General Settings'),
        '#open' => FALSE,
    );

    $form['settings']['general_setting']['general_setting_tracking_code'] = array(
        '#type' => 'textarea',
        '#title' => t('Tracking Code'),
        '#default_value' => theme_get_setting('general_setting_tracking_code', 'evockan'),
    );


// Page title settings
    $form['settings']['page_title'] = array(
        '#type' => 'details',
        '#title' => t('Page title settings'),
        '#open' => FALSE,
    );
    

    $form['settings']['page_title']['page_title_layout'] = array(
        '#type' => 'select',
        '#title' => t('Header default'),
        '#options' => array(
            'left' => t('Page Title Left'),
            'center' => t('Page Title Center'),
            'right' => t('Page Title Left'),
            'dark' => t('Page Title Dark Tone'),
            'primary ' => t('Page Title Primary Tone'),
            'parallax' => t('Page Title Parallax'),
            'video' => t('Page Title Video'),
            'small' => t('Page Title Small'),
        ),
        '#required' => true,
        '#default_value' => theme_get_setting('page_title_layout', 'evockan'),
    );

    $form['settings']['page_title']['breadcrumb_image'] = array(
        '#type'     => 'managed_file',
        '#title'    => t('Breadcrumb image upload'),
        '#upload_location' => 'public://background/',
        '#default_value' => theme_get_setting('breadcrumb_image','evockan'),
        '#upload_validators' => array(
            'file_validate_extensions' => array('gif png jpg jpeg'),
            '#progress_message' => 'Uploading ...',
        ),
    );
    $form['settings']['page_title']['video_url'] = array(
        '#type' => 'textfield',
        '#title' => t('Video url'),
        '#default_value' => theme_get_setting('video_url', 'evockan'),
    );

// Header settings
    $form['settings']['header'] = array(
        '#type' => 'details',
        '#title' => t('Header settings'),
        '#open' => FALSE,
    );
    

    $form['settings']['header']['header_layout'] = array(
        '#type' => 'select',
        '#title' => t('Header default'),
        '#options' => array(
            'classic' => t('Classic Header'),
            'top_logo' => t('Top Logo Header'),
            'left_side_navigation' => t('Left Side Navigation'),
            'full_width' => t('Full Width Header')
          
        ),
        '#required' => true,
        '#default_value' => theme_get_setting('header_layout', 'evockan'),
    );

    $form['settings']['header']['second_logo'] = array(
        '#type'     => 'managed_file',
        '#title'    => t('Second image upload'),
        '#upload_location' => 'public://background/',
        '#default_value' => theme_get_setting('second_logo','evockan'),
        '#upload_validators' => array(
            'file_validate_extensions' => array('gif png jpg jpeg'),
            '#progress_message' => 'Uploading ...',
        ),
    );

// Portfolio settings
    $form['settings']['portfolio'] = array(
        '#type' => 'details',
        '#title' => t('Portfolio settings'),
        '#open' => FALSE,
    );
    // Page title settings
    $form['settings']['portfolio']['portfolio_page_title'] = array(
        '#type' => 'details',
        '#title' => t('Page title settings'),
        '#open' => FALSE,
    );
    $form['settings']['portfolio']['portfolio_page_title']['portfolio_breadcrumb_image'] = array(
        '#type'     => 'managed_file',
        '#title'    => t('Breadcrumb image upload'),
        '#upload_location' => 'public://background/',
        '#default_value' => theme_get_setting('portfolio_breadcrumb_image','evockan'),
        '#upload_validators' => array(
            'file_validate_extensions' => array('gif png jpg jpeg'),
            '#progress_message' => 'Uploading ...',
        ),
    );
/*    $form['settings']['page_title']['portfolio_video_url'] = array(
        '#type' => 'textfield',
        '#title' => t('Video url'),
        '#default_value' => theme_get_setting('portfolio_video_url', 'evockan'),
    );*/

    $form['settings']['portfolio']['portfolio_layout'] = array(
        '#type' => 'select',
        '#title' => t('Portfolio Layout'),
        '#options' => array(
            'grid' => t('Grid Layout'),
            'masonry' => t('Masonry Layout')
        ),
        '#required' => true,
        '#default_value' => theme_get_setting('portfolio_layout', 'evockan'),
    );

    $form['settings']['portfolio']['portfolio_columns'] = array(
        '#type' => 'select',
        '#title' => t('Portfolio Columns '),
        '#options' => array(
            'columns_2' => t('2 Columns'),
            'columns_3' => t('3 Columns'),
            'columns_4' => t('4 Columns')
        ),
        '#required' => true,
        '#default_value' => theme_get_setting('portfolio_columns', 'evockan'),
    );

    $form['settings']['portfolio']['portfolio_hover'] = array(
        '#type' => 'select',
        '#title' => t('Portfolio hover styles'),
        '#options' => array(
            'hover_style1' => t('Hover style 1'),
            'hover_style2' => t('Hover style 2'),
            'hover_style3' => t('Hover style 3')
        ),
        '#required' => true,
        '#default_value' => theme_get_setting('portfolio_hover', 'evockan'),
    );


// Gallery settings
    $form['settings']['gallery'] = array(
        '#type' => 'details',
        '#title' => t('Gallery settings'),
        '#open' => FALSE,
    );
    
    // Page title settings
    $form['settings']['gallery']['gallery_page_title'] = array(
        '#type' => 'details',
        '#title' => t('Page title settings'),
        '#open' => FALSE,
    );
    $form['settings']['gallery']['gallery_page_title']['gallery_breadcrumb_image'] = array(
        '#type'     => 'managed_file',
        '#title'    => t('Breadcrumb image upload'),
        '#upload_location' => 'public://background/',
        '#default_value' => theme_get_setting('gallery_breadcrumb_image','evockan'),
        '#upload_validators' => array(
            'file_validate_extensions' => array('gif png jpg jpeg'),
            '#progress_message' => 'Uploading ...',
        ),
    );
    $form['settings']['gallery']['gallery_layout'] = array(
        '#type' => 'select',
        '#title' => t('Gallery Layout'),
        '#options' => array(
            'justified' => t('Gallery Layout Justified'),
            'grid_2_columns' => t('Gallery grid 2 columns'),
            'grid_3_columns' => t('Gallery grid 3 columns'),
            'grid_4_columns' => t('Gallery grid 4 columns'),
            'grid_5_columns' => t('Gallery grid 5 columns'),
            'masonry_2_columns' => t('Gallery masonry 2 columns'),
            'masonry_3_columns' => t('Gallery masonry 3 columns'),
            'masonry_4_columns' => t('Gallery masonry 4 columns'),
            'masonry_5_columns' => t('Gallery masonry 5 columns'),
        ),
        '#required' => true,
        '#default_value' => theme_get_setting('gallery_layout', 'evockan'),
    );


    $form['settings']['gallery']['gallery_hover'] = array(
        '#type' => 'select',
        '#title' => t('Gallery hover styles'),
        '#options' => array(
            'hover_style1' => t('Hover style 1'),
            'hover_style2' => t('Hover style 2'),
            'hover_style3' => t('Hover style 3'),
            'hover_style4' => t('Hover style 4')
        ),
        '#required' => true,
        '#default_value' => theme_get_setting('gallery_hover', 'evockan'),
    );



// Blog settings
    $form['settings']['blog'] = array(
        '#type' => 'details',
        '#title' => t('Blog settings'),
        '#open' => FALSE,
    );
    
    // Page title settings
    $form['settings']['blog']['blog_page_title'] = array(
        '#type' => 'details',
        '#title' => t('Page title settings'),
        '#open' => FALSE,
    );
    $form['settings']['blog']['blog_page_title']['blog_breadcrumb_image'] = array(
        '#type'     => 'managed_file',
        '#title'    => t('Breadcrumb image upload'),
        '#upload_location' => 'public://background/',
        '#default_value' => theme_get_setting('blog_breadcrumb_image','evockan'),
        '#upload_validators' => array(
            'file_validate_extensions' => array('gif png jpg jpeg'),
            '#progress_message' => 'Uploading ...',
        ),
    );

    $form['settings']['blog']['blog_layout'] = array(
        '#type' => 'select',
        '#title' => t('Blog Layout'),
        '#options' => array(
            'classic_2_columns' => t('Blog classic 2 columns'),
            'classic_3_columns' => t('Blog classic 3 columns'),
            'classic_4_columns' => t('Blog classic 4 columns'),
            'simple_2_columns' => t('Blog simple 2 columns'),
            'simple_3_columns' => t('Blog simple 3 columns'),
            'list_left' => t('Blog list sidebar left'),
            'list_right' => t('Blog list sidebar right'),
            'list_center' => t('Blog list center'),
        ),
        '#required' => true,
        '#default_value' => theme_get_setting('blog_layout', 'evockan'),
    );


// Blog single settings
    $form['settings']['blog']['blog_single'] = array(
        '#type' => 'details',
        '#title' => t('Blog single settings'),
        '#open' => FALSE,
    );

    $form['settings']['blog']['blog_single']['blog_single_sidebar'] = array(
        '#type' => 'select',
        '#title' => t('Default sidebar'),
        '#options'  => array(
            'left'  => t('Left'),
            'right' => t('Right'),
            'full_width' => t('Full width'),
           
        ),

        '#default_value' => theme_get_setting('blog_single_sidebar', 'evockan'),
    );


// Shop settings
    $form['settings']['shop'] = array(
        '#type' => 'details',
        '#title' => t('Shop settings'),
        '#open' => FALSE,
    );
    
    $form['settings']['shop']['shop_page_title'] = array(
        '#type' => 'details',
        '#title' => t('Page title settings'),
        '#open' => FALSE,
    );
    $form['settings']['shop']['shop_page_title']['shop_breadcrumb_image'] = array(
        '#type'     => 'managed_file',
        '#title'    => t('Breadcrumb image upload'),
        '#upload_location' => 'public://background/',
        '#default_value' => theme_get_setting('shop_breadcrumb_image','evockan'),
        '#upload_validators' => array(
            'file_validate_extensions' => array('gif png jpg jpeg'),
            '#progress_message' => 'Uploading ...',
        ),
    );

    $form['settings']['shop']['shop_layout'] = array(
        '#type' => 'select',
        '#title' => t('Shop Layout'),
        '#options' => array(
            'classic_2_columns' => t('Shop classic 2 columns'),
            'classic_3_columns' => t('Shop classic 3 columns'),
            'classic_4_columns' => t('Shop classic 4 columns'),
            'simple_2_columns' => t('Shop simple 2 columns'),
            'simple_3_columns' => t('Shop simple 3 columns'),
            'simple_4_columns' => t('Shop simple 4 columns'),
            'styled_2_columns' => t('Shop styled 2 columns'),
            'styled_3_columns' => t('Shop styled 3 columns'),
            'styled_4_columns' => t('Shop styled 4 columns'),
            'list' => t('Shop list'),
            
        ),
        '#required' => true,
        '#default_value' => theme_get_setting('shop_layout', 'evockan'),
    );

// Footer settings
    $form['settings']['footer'] = array(
        '#type' => 'details',
        '#title' => t('Footer settings'),
        '#open' => FALSE,
    );
    


    $form['settings']['footer']['footer_layout'] = array(
        '#type' => 'select',
        '#title' => t('Footer Layout'),
        '#options' => array(
            'classic' => t('Footer classic'),
            'classic_light' => t('Footer classic light'),
            'modern' => t('Footer modern'),
            'minimal' => t('Footer minimal'),
            'simple' => t('Footer simple')
        ),
        '#required' => true,
        '#default_value' => theme_get_setting('footer_layout', 'evockan'),
    );
    $form['settings']['footer']['footer_background_image'] = array(
        '#type'     => 'managed_file',
        '#title'    => t('Footer background image upload - modern layout'),
        '#upload_location' => 'public://background/',
        '#default_value' => theme_get_setting('footer_background_image','evockan'),
        '#upload_validators' => array(
            'file_validate_extensions' => array('gif png jpg jpeg'),
            '#progress_message' => 'Uploading ...',
        ),
    );


}

function evockan_theme_settings_form_submit(&$form, FormStateInterface $form_state) {
    $account = \Drupal::currentUser();
    $values = $form_state->getValues();

    $bg[0] = $values['breadcrumb_image']; 
    $bg[1] = $values['portfolio_breadcrumb_image'];
    $bg[2] = $values['shop_breadcrumb_image'];
    $bg[3] = $values['blog_breadcrumb_image'];
    $bg[4] = $values['gallery_breadcrumb_image'];
    $bg[5] = $values['footer_background_image'];
    $bg[6] = $values['second_logo'];

    $count = count($bg);
    for ($i=0; $i < $count; $i++) {

    if (isset($bg[$i]) && !empty($bg[$i])) {
          // Load the file via file.fid.
          $file1 = file_load($bg[$i][0]);
          // Change status to permanent.
          $file1->setPermanent();
          $file1->save();
          $file_usage = \Drupal::service('file.usage');
          $file_usage->add($file1, 'evockan', 'theme', 1);
        } 
    }
        
}
?>