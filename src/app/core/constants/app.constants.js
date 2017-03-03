/**
 * Created by rahul j jadav on 2/27/2017.
 */
(function () {
  angular.module('app.core')
    .constant('CONST',(CONST)());

  CONST.$inject = [];

  function CONST(){
    var data ={
      PRE_LOGIN_PURPOSE_LOGIN : 'login',
      PRE_LOGIN_PURPOSE_REGISTER : 'register',
    }
    return data;
  }
})();
