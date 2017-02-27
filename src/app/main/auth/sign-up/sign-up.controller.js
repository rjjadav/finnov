/**
 * Created by rahul j jadav on 2/26/2017.
 */
(function () {
  'use strict';

  angular.module('app.main.auth')
    .controller('SignUpController',SignUpController);

  SignUpController.$inject = ['$mdDialog'];

  function SignUpController($mdDialog){
    var signup = this;
    signup.cancel = cancel;
    signup.login = login;

    signup.dateArray = createDateArray();
    signup.yearArray = createYearArray();

    function cancel(){
      $mdDialog.cancel();
    }

    function login(){
      $mdDialog.hide({next:'login'})
    }
    function createDateArray() {
      var arr = [];
      for(var i=1; i<=31; i++){
        arr.push(i);
      }
      return arr;
    }

    function createYearArray(){
      var yearNow = new Date().getFullYear();
      var arr = [];
      for(var i= yearNow; i>=(yearNow-100); i--){
        arr.push(i);
      }
      return arr;
    }
  }
})();
