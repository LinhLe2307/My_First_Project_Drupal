<?php

namespace Drupal\my_custom_generated_module\Controller;

use Drupal\Core\Controller\ControllerBase;

/**
 * Returns responses for my_custom_generated_module routes.
 */
class MyCustomGeneratedModuleController extends ControllerBase {

  /**
   * Builds the response.
   */
  public function build() {

    $build['content'] = [
      '#type' => 'item',
      '#markup' => $this->t('It works!'),
    ];

    return $build;
  }

}
