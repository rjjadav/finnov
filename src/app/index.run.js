(function() {
  'use strict';

  angular
    .module('finnov')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
