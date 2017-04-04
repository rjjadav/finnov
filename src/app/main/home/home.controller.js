/**
 * Created by rahul j jadav on 2/11/2017.
 */
(function(){
  'use strict';

  angular.module('app.main.home')
    .controller('HomeController',HomeController);

  HomeController.$inject= []
  function HomeController() {
    var home = this;

    home.items2 = [1,2,3,4,5,6,7,8,9,10];
  }
})();
