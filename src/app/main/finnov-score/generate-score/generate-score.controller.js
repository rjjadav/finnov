/**
 * Created by rahul j jadav on 3/4/2017.
 */
(function () {
  'use strict';

  angular.module('app.main.finnov-score')
    .controller('GenerateScoreController', GenerateScoreController);

  GenerateScoreController.$inject = [];

  function GenerateScoreController() {
    var score = this;
    score.bankDetails = 'bank';
  }
})();
