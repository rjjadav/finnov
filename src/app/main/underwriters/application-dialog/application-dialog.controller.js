/**
 * Created by rahul j jadav on 3/17/2017.
 */
(function () {
  'use strict';

  angular.module('app.main.underwriters')
  .controller('ApplicationDialogController', ApplicationDialogController);

  ApplicationDialogController.$inject=['$mdDialog','applicationNumber']

  function ApplicationDialogController($mdDialog, applicationNumber) {
    var appDialog = this;
    appDialog.applicationNumber = applicationNumber;
    appDialog.hide = hide;

    function hide(){
      $mdDialog.hide({'applicationNumber': appDialog.applicationNumber})
    }
  }
})();
