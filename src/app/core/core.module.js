/**
 * Created by rahul j jadav on 2/11/2017.
 */
(function () {
  'use strict';

  angular.module('app.core',[
    'ngAnimate',
    'ngCookies',
    'ngTouch',
    'ngSanitize',
    'ngMessages',
    'ngAria',
    'ui.router',
    'ngMaterial',
    'ngFileUpload',
    'toastr',
    'vAccordion',
    'angular-owl-carousel',
    'ngMap'
  ])
    .config(config);

  config.$inject = [];
  function config() {

  }
})();
