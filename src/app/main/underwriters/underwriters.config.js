/**
 * Created by rahul j jadav on 3/16/2017.
 */
(function () {
  'use strict';

  angular.module('app.main.underwriters',[])
    .config(config);

  config.$inject =['$stateProvider'];

  function config($stateProvider){
    $stateProvider
    .state('app.main_underwriters',{
      url: '/underwriters',
      abstract: true
    })
    .state('app.main_underwriters.home',{
      url:'/home',
      views: {
        'content@app': {
          templateUrl: 'app/main/underwriters/home/home.html',
          controller: 'UnderwritersHomeController',
          controllerAs: 'uh'
        }
      }
    })
    .state('app.main_underwriters.applications-list',{
      url: '/applications',
      views: {
        'content@app': {
          templateUrl: 'app/main/underwriters/applications-list/applications-list.html',
          controller: 'ApplicationsListController',
          controllerAs: 'list'
        }
      }
    })
    .state('app.main_underwriters.new-application',{
      url:'/new-application',
      views: {
        'content@app':{
          templateUrl: 'app/main/underwriters/new-application/new-application.html',
          controller: 'NewApplicationController',
          controllerAs: 'app'
        }
      }
    })
    .state('app.main_underwriters.application-analysis',{
      url:'/analysis/:applicationId',
      views: {
        'content@app': {
          templateUrl: 'app/main/underwriters/application-analysis/application-analysis.html',
          controller: 'ApplicationAnalysisController',
          controllerAs: 'analysis'
        }
      }
    })
  }
})();
