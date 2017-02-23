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
    'toastr'
  ])
    .config(config);

  config.$inject = [];
  function config() {

  }
})();
