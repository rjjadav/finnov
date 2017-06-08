(function(){
	'use strict';

	angular.module('app.main.personal-loan',[
		'app.main.personal-loan.application'
	])
	.config(config);

	config.$inject = ['$stateProvider'];

	function config($stateProvider){
		$stateProvider
		.state('app.main_personal-loan',{
			url: '/personal-loan',
			abstract: true,
			// views: {
			// 	'content@app' : {
			// 		templateUrl: 'app/main/personal-loan/personal-loan.html',
			// 		controller: 'PersonalLoanController',
			// 		controllerAs: 'pl'
			// 	}
			// }
		})
	}
})();