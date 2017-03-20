/**
 * Created by rahul j jadav on 3/16/2017.
 */
(function () {
  'use strict';

  angular.module('app.main.underwriters')
    .controller('UnderwritersHomeController', UnderwritersHomeController);

  UnderwritersHomeController.$inject = ['$mdDialog'];

  function UnderwritersHomeController($mdDialog){
    var uh = this;
    uh.login = login;


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
          // if(data.next && data.next == 'signup') header.register(ev);
          // else if(data.next && data.next == 'forget_password') header.forgetPassword(ev);
        });
    }
  }
})();
