/**
 * Created by rahul j jadav on 2/11/2017.
 */
(function () {
  'use strict';

  angular.module('app.main',[
    'app.main.auth',
    'app.main.home',
    'app.main.finnov-score'
  ])
    .config(config);

  config.$inject = [];
  function config() {

  }
})();
