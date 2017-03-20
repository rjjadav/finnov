/**
 * Created by rahul j jadav on 3/17/2017.
 */
(function () {
  'use strict';

  angular.module('app.main.underwriters')
    .controller('NewApplicationController', NewApplicationController);

  NewApplicationController.inject=['$mdDialog'];

  function NewApplicationController($mdDialog) {
    var app = this;
    app.uploadBankStatement = uploadBankStatement;

    function uploadBankStatement(ev,bankStatement){
      console.log(bankStatement);
      $mdDialog.show({
        templateUrl: 'app/main/underwriters/application-dialog/application-dialog.html',
        controller: 'ApplicationDialogController',
        controllerAs: 'appDialog',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose:true,
        fullscreen: true,
        locals:{
          applicationNumber : '123456789012'
        }
      })
      .then(function(data){
        if(data){
          console.log(data.applicationNumber)
        }
      });

    }
  }
})();
