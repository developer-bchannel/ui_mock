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
					height: 350,
	        dataBound : function() {
	                      this.expandRow(this.tbody.find("tr.k-master-row").first());
	                    },
	        dataSource: {
							data : [
								{skkAfeNumber: "2017-019-0015",internalAfeNumber:"100-001",afeBsType:"19",totalEstCost:"$ 250.000.000"},
								{skkAfeNumber: "2017-18A-0016",internalAfeNumber:"190-001",afeBsType:"18A",totalEstCost:"$ 550.000.000"},
								{skkAfeNumber: "2017-18B-0017",internalAfeNumber:"190-001",afeBsType:"18B",totalEstCost:"$ 1.550.000.000"}
							]
	                    },
	        columns   : [
	        {
	          field   : "skkAfeNumber",
	          title   : "SKK AFE Number",
	          width   : "80px"
	        },{
	          field   : "internalAfeNumber",
	          title   : "Operator AFE Number",
	          width   : "120px"
	        },
	        {
	          field   : "afeBsType",
	          title   : "Budget Schedule Type",
	          width   : "100px"
	        },{
	          field   : "totalEstCost",
	          title   : "Total Est. Cost",
	          width   : "100px"
	        }]
      };

      $scope.newAfe = function(){

      	$state.go('dashboard.newafeform');
      };
 });