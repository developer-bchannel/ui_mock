'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp')
  .controller('AfeCtrl', 
    function ($scope, $timeout, $http, $log, $state, $stateParams) {

    	$scope.afeGridOptions = 
    	{
	        sortable  : true,
	        pageable  : true,
	        dataBound : function() {
	                      this.expandRow(this.tbody.find("tr.k-master-row").first());
	                    },
	        dataSource: {

	                    },
	        columns   : [
	        {
	          field   : "skkAfeNumber",
	          title   : "SKK AFE #",
	          width   : "80px"
	        },{
	          field   : "internalAfeNumber",
	          title   : "Operator AFE #",
	          width   : "120px"
	        },
	        {
	          field   : "afeBsType",
	          title   : "Budget Schedule Type",
	          width   : "100px"
	        },{
	          field   : "totalEstCost",
	          title   : "Total Est Cost",
	          width   : "100px"
	        }]
      };

      $scope.newAfe = function(){

      	$state.go('dashboard.newafeform');
      };
 });