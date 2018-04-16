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
								{skkAfeNumber: "2017-019-0015",internalAfeNumber:"2018",opCompany:"Operator A",afeBsType:"Tangible Drilling/Workover",totalEstCost:"$ 297.347", budgetStatus:"Draft"},
								{skkAfeNumber: "2017-18A-0016",internalAfeNumber:"2018",opCompany:"Operator A",afeBsType:"Facilities",totalEstCost:"$ 550.000.000", budgetStatus: "Ready For Review"},
								{skkAfeNumber: "2017-18B-0017",internalAfeNumber:"2018",opCompany:"Operator A",afeBsType:"Equipment",totalEstCost:"$ 1.550.000.000", budgetStatus: "Reviewed"}
							]
	                    },
	        columns   : [
	        {
	          field   : "internalAfeNumber",
	          title   : "Period",
	          width   : "12px"
	        },{
	          field   : "opCompany",
	          title   : "Operator Company",
	          width   : "30px"
	        },
	        {
	          field   : "afeBsType",
	          title   : "Budget Type",
	          width   : "25px"
	        },{
	          field   : "totalEstCost",
	          title   : "Total Budget",
	          width   : "15px"
					},
					{
	          field   : "budgetStatus",
	          title   : "Status",
	          width   : "15px"
					},
					{ command: { text: "View Details", click: clickDetails }, title: "Check Details", width: "20px" }
				]
      };
			
			function clickDetails(e){
				e.preventDefault();
				var dataItem = this.dataItem($(e.currentTarget).closest("tr"));
				console.log(dataItem);
				if(dataItem.afeBsType == "Tangible Drilling/Workover"){
					$state.go("dashboard.drillingbudget");
				} else if(dataItem.afeBsType == "G&G Studies"){
					$state.go("dashboard.surveybudget");
				}
    	};

      $scope.newAfe = function(){

      	$state.go('dashboard.newafeform');
      };
 });