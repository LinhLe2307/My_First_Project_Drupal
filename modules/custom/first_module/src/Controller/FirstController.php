<?php

namespace Drupal\first_module\Controller;

use Drupal\Core\Controller\ControllerBase;
use \Drupal\Core\StringTranslation\StringTranslationTrait;

// First way
class FirstController {
    use StringTranslationTrait;
    public function first() {
        // return array('#markup' => 'Welcome to drupal website');
        return ['#markup' =>$this->t('Welcome to drupal 2')];
    }

}

// Way 2: extends ControllerBase will have a lot of more class
// class FirstController extends ControllerBase {
//     public function first() {
//         // return array('#markup' => 'Welcome to drupal website');
//         return ['#markup' =>$this->t('Welcome to drupal 2')];
//     }

// }

