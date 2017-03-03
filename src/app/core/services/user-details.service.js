/**
 * Created by rahul j jadav on 3/2/2017.
 */
(function () {
  'use strict';

  angular.module('app.core')
    .service('UserService', UserService);

  UserService.$inject = [];

  function UserService(){
    var username = "Rahul Jadav";
    var loginStatus = false;


    this.getUsername = getUsername;
    this.setUsername = setUsername;

    this.getLoginStatus= getLoginStatus;
    this.setLoginStatus= setLoginStatus;

    // return data;

    function getUsername() {
      return username;
    }

    function setUsername(value){
      username = value;
    }

    function getLoginStatus(){
      return loginStatus;
    }

    function setLoginStatus(status){
      loginStatus = status;
    }


  }
})();
