/**
 * Created by rahul j jadav on 2/11/2017.
 */
(function () {
  'use strict';

  angular.module('app.main.home',[])
    .config(config);

  config.$inject = ['$stateProvider'];
  function config($stateProvider) {
    $stateProvider
      .state('app.main_home',{
        url: '/',
        views:{
          'content@app': {
            templateUrl: 'app/main/home/home.html',
            controller: 'HomeController',
            controllerAs: 'home'
          }
        }
      });
  }
})();
