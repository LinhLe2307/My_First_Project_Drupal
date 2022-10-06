<?php

namespace Drupal\blog_module\Controller;
use Drupal\Core\Controller\ControllerBase;
use Drupal\Core\Controller\StringTranslationTrait;

class BlogController extends ControllerBase {

    public function blog() {
        // return array('#markup' => 'Welcome to my blog');
        return ['#markup' =>$this->t('Welcome to my blog')];
    }
    
}