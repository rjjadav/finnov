(function(){
	'use strict';

	angular.module('app.main.personal-loan.application',[])
	.config(config);

	config.$inject = ['$stateProvider'];

	function config($stateProvider){
		$stateProvider
		.state('app.main_personal-loan.application',{
			url: '/application',
			views: {
				'content@app':{
					templateUrl: 'app/main/personal-loan/application/application.html',
					controller: 'PersonalLoanApplicationController',
					controllerAs: 'application'
				}
			}
		})
	}
})();