/**
 * Created by rahul j jadav on 3/1/2017.
 */
(function () {
  'use strict';
  angular.module('app.main.auth')
    .controller("PreLoginController", PreLoginController);

  PreLoginController.$inject = ['$mdDialog', 'purpose','UserService'];

  function PreLoginController($mdDialog, purpose, UserService) {
    console.log(UserService.getUsername());
    var pre = this;

    pre.cancel = cancel;
    pre.next = next;
    pre.back = back;
    pre.generateOtp = generateOtp;
    pre.register = register;
    pre.verify = verify;

    pre.showMobileScreen = true;
    pre.showPasswordScreen = false;
    pre.showOtpScreen = false;
    pre.purpose = purpose;
    pre.passwordOTPGenerated = false;

    function cancel() {
      $mdDialog.cancel();
    }

    function next(){
      if(pre.purpose == 'login'){
        pre.showMobileScreen = false;
        pre.showPasswordScreen = true;
        pre.showOtpScreen = false;
      }else{
        pre.showMobileScreen = false;
        pre.showPasswordScreen = false;
        pre.showOtpScreen = true;
      }
    }

    function back(){
      pre.showMobileScreen = true;
      pre.showPasswordScreen = false;
      pre.showOtpScreen = false;
    }

    function generateOtp(){
      pre.passwordOTPGenerated = true;
    }

    function register() {
      $mdDialog.hide({next:'signup'})
    }

    function verify(){
      UserService.setLoginStatus(true);
      $mdDialog.hide({status: true, next: 'score'});
    }
  }
})();
