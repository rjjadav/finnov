/**
 * Created by rahul j jadav on 3/30/2017.
 */
(function () {
  'use strict';

  angular.module('app.main.team',[])
    .config(config);

  config.$inject = ['$stateProvider'];

  function config($stateProvider){
    $stateProvider
      .state('app.main_team',{
        url: '/team',
        views: {
          'content@app': {
            templateUrl: 'app/main/our-team/our-team.html',
            controller: 'TeamController',
            controllerAs: 'team'
          }
        }
      })
  }
})();
