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

    app.applicationNumber = undefined;
    app.bankStatementUploaded = false;

    function uploadBankStatement(ev,bankStatement){
      app.bankStatementUploaded = true;
      app.applicationNumber = '123456789012'
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
          applicationNumber : app.applicationNumber
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
