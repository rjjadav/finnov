/**
 * Created by rahul j jadav on 3/19/2017.
 */
(function () {
  'use strict';

  angular.module('app.main.apply-loan')
    .controller('ApplyLoanController',ApplyLoanController);

  ApplyLoanController.$inject =[];

  function ApplyLoanController(){
    var apply = this;
    apply.next = next;
    apply.prev = prev;
    apply.uploadSalarySlips = uploadSalarySlips;

    apply.active = 0;
    apply.uploadedSalarySlips = [];

    function next(){
      apply.active += 1;
    }

    function prev(){
      apply.active -= 1;
    }

    function uploadSalarySlips(salarySlips){

      for(var i=0; i< salarySlips.length; i++){
        apply.uploadedSalarySlips.push(salarySlips[i]);
      }
    }
  }
})();
