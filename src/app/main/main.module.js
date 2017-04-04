/**
 * Created by rahul j jadav on 2/11/2017.
 */
(function () {
  'use strict';

  angular.module('app.main',[
    'app.main.auth',
    'app.main.home',
    'app.main.team',
    'app.main.about',
    'app.main.finnov-score',
    'app.main.profile',
    'app.main.underwriters',
    'app.main.apply-loan',
  ])
    .config(config);

  config.$inject = [];
  function config() {

  }
})();
