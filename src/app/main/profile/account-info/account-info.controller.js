/**
 * Created by rahul j jadav on 3/6/2017.
 */
(function () {
  'use strict';
  angular.module('app.main.profile')
    .controller('AccountInfoController', AccountInfoController)

  AccountInfoController.$inject =['$mdDialog','accountInfo'];

  function AccountInfoController($mdDialog, accountInfo) {
    var info = this;
    info.cancel = cancel;
    info.save = save;

    info.accountInfo = accountInfo
    function cancel(){
      $mdDialog.cancel();
    }

    function save(){
      $mdDialog.hide({'profileInfo' : info.accountInfo});
    }
  }
})();
