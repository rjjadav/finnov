/**
 * Created by rahul j jadav on 3/4/2017.
 */
(function () {
  'use strict';
  angular.module('app.main.profile',[])
    .config(config);

  config.$inject = ['$stateProvider'];

  function config($stateProvider) {
    $stateProvider
      .state('app.main_profile',{
        url: '/profile',
        views:{
          'content@app':{
            templateUrl: 'app/main/profile/profile.html',
            controller: 'ProfileController',
            controllerAs: 'profile'
          }
        }
      })
  }
})();
