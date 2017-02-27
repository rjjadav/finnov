/**
 * Created by rahul j jadav on 2/11/2017.
 */
(function () {
  'use strict';

  angular.module('app.header')
    .controller('HeaderController',HeaderController);

  HeaderController.$inject =['$mdMenu','$mdDialog'];
  function HeaderController($mdMenu, $mdDialog) {
    var header = this;
    header.login = login;
    header.register = register;
    header.forgetPassword = forgetPassword;

    header.openMenu = openMenu;

    function login(ev){
      $mdDialog.show({
        templateUrl: 'app/main/auth/login/login.html',
        controller: 'LoginController',
        controllerAs: 'login',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose:true,
        fullscreen: true
      })
      .then(function(data){
        if(data.next && data.next == 'signup') header.register(ev);
        else if(data.next && data.next == 'forget_password') header.forgetPassword(ev);
      });
    }
    function register(ev){
      $mdDialog.show({
        templateUrl: 'app/main/auth/sign-up/sign-up.html',
        controller: 'SignUpController',
        controllerAs: 'signup',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose:true,
        fullscreen: true
      })
      .then(function(data){
        console.log(data);
        if(data.next && data.next == 'login') header.login(ev);
      });
    }

    function forgetPassword(ev) {
      $mdDialog.show({
        templateUrl: 'app/main/auth/forget-password/forget-password.html',
        controller: 'ForgetPasswordController',
        controllerAs: 'fp',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose:true,
        fullscreen: true
      })
        .then(function (data) {
          console.log(data);
        })
    }

    function openMenu(ev){
      $mdMenu.open(ev);
    }
  }
})();
