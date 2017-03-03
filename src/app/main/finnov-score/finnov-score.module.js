/**
 * Created by rahul j jadav on 3/3/2017.
 */
(function(){
  'use strict';

  angular.module('app.main.finnov-score',[])
    .config(config);

  config.$inject = ['$stateProvider'];

  function config($stateProvider){
    $stateProvider
      .state('app.main_finnov-score',{
        url: '/finnov-score',
        // redirectTo: 'app.main_finnov-score_reports',
        // abstract: true,
        views:{
          'content@app':{
            templateUrl: 'app/main/finnov-score/finnov-score.html',
            controller: function ($state) {
              // $state.go('app.main_finnov-score_reports');
            },
            controllerAs: 'finnovMain'
          }
        }
      })
      .state('app.main_finnov-score.reports',{
        url: '/reports',
        views: {
          'finnovScoreContent@app.main_finnov-score':{
            templateUrl: 'app/main/finnov-score/reports/reports.html',
            controller: 'ScoreReportsController',
            controllerAs: 'reports'
          }
        }
      })
  }
})();
