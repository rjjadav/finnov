/**
 * Created by rahul j jadav on 2/11/2017.
 */
(function () {
  'use strict';

  angular.module('app.header')
    .controller('HeaderController',HeaderController);

  HeaderController.$inject =['$anchorScroll','$location','$state','$mdMenu','$mdDialog','UserService'];
  function HeaderController($anchorScroll, $location, $state, $mdMenu, $mdDialog, UserService) {

    var header = this;
    header.preLogin = preLogin;
    header.login = login;
    header.register = register;
    header.forgetPassword = forgetPassword;
    header.openMenu = openMenu;
    header.goto = goto;
    header.goToContact = goToContact;

    header.loginStatus = UserService.getLoginStatus();
    header.username = UserService.getUsername();

    function preLogin(ev, purpose){
      $mdDialog.show({
        templateUrl: 'app/main/auth/pre-login/pre-login.html',
        controller: 'PreLoginController',
        controllerAs: 'pre',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose:false,
        fullscreen: true,
        locals:{
          purpose : purpose
        }
      })
        .then(function(data){
          if(data.next && data.next == 'dashboard') header.goto('app.main_dashbaord');
          else if(data.next && data.next == 'signup') header.register(ev);
          else if(data.next && data.next == 'score' ){
            header.loginStatus = UserService.getLoginStatus();
            header.username = UserService.getUsername();
            header.goto('app.main_finnov-score.reports');
          }
          else if(data.status) {
            header.loginStatus = UserService.getLoginStatus();
            header.username = UserService.getUsername();
          }
          // else if(data.next && data.next == 'forget_password') header.forgetPassword(ev);
        });
    }

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

    function goto(state){
      $state.go(state)
    }

    function goToContact(){
      $location.path("/");
      // $(window).on("load", function(){
        // $location.hash('contact-us');
        // $anchorScroll();
        if ($location.hash() !== 'contact-us') {
          // set the $location.hash to `newHash` and
          // $anchorScroll will automatically scroll to it
          $location.hash('contact-us');
        } else {
          // call $anchorScroll() explicitly,
          // since $location.hash hasn't changed
          $anchorScroll();
        }
      // });

      // if ($location.hash() !== 'contact-us') {
      //   // set the $location.hash to `newHash` and
      //   // $anchorScroll will automatically scroll to it
      //   $location.hash('contact-us');
      // } else {
      //   // call $anchorScroll() explicitly,
      //   // since $location.hash hasn't changed
      //   $anchorScroll();
      // }
    }
  }
})();
