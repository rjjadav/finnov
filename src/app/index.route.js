(function() {
  'use strict';

  angular
    .module('finnov')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('app',{
        abstract: true,
        views: {
          'main@': {
            templateUrl: 'app/core/layout/layout.html',
            controller: 'MainController',
            controllerAs: 'main'
          },
          'header@app': {
            templateUrl: 'app/header/header.html',
            controller: 'HeaderController',
            controllerAs: 'header',
          }
        }
      });
      // .state('home', {
      //   url: '/',
      //   templateUrl: 'app/main/main.html',
      //   controller: 'MainController',
      //   controllerAs: 'main'
      // });

    $urlRouterProvider.otherwise('/');
  }

})();
