/**
 * Created by rahul j jadav on 2/27/2017.
 */
(function () {
  'use strict';

  angular.module('app.main.auth')
    .controller('ForgetPasswordController',ForgetPasswordController);

  ForgetPasswordController.$inject = ['$mdDialog'];

  function ForgetPasswordController($mdDialog) {
    var fp = this;
    fp.cancel = cancel;

    function cancel(){
      $mdDialog.cancel();
    }
  }
})();
