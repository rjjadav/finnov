/**
 * Created by rahul j jadav on 3/19/2017.
 */
(function () {
  'use strict';

  angular.module('app.main.apply-loan',[])
    .config(config);

  config.$inject = ['$stateProvider'];

  function config($stateProvider){
    $stateProvider
      .state('app.main_apply-loan',{
        url: '/loan/apply',
        views: {
          'content@app' : {
            templateUrl: 'app/main/apply-loan/apply-loan.html',
            controller: 'ApplyLoanController',
            controllerAs: 'apply'
          }
        }
      })
  }
})();
