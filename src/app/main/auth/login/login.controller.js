/**
 * Created by rahul j jadav on 2/25/2017.
 */
(function () {
  'use strict';

  angular.module('app.main.auth')
    .controller('LoginController',LoginController);

  LoginController.$inject = ['$mdDialog'];

  function LoginController($mdDialog) {
    var login = this;
    login.cancel = cancel;
    login.signup = signup;
    login.forgetPassword = forgetPassword;
    login.fnLogin = fnLogin;

    function cancel(){
      $mdDialog.cancel();
    }

    function signup() {
      $mdDialog.hide({next:"signup"})
    }

    function forgetPassword() {
      $mdDialog.hide({next: 'forget_password'});
    }

    function fnLogin(){
      $mdDialog.hide({login : true});
    }
  }
})();
