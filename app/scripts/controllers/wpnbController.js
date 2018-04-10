'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp')
  .controller('WpnbCtrl', ['$scope', '$timeout', '$state', function ($scope, $timeout, $state) {

  	var wpnbProducts = ['Oil', 'Gas'];
    var wpnbPeriods = 2015;
    var id = 0;

    $scope.nonCapitalGridOptions = {
        sortable  : true,
        pageable  : true,
        height : 350,
        dataSource: {
                    data:
                    [ 
                        {"periode":"2018", "pscName":"Operator A", "totalBudget":"$ 790.000","type":"Seismic/Survey"},
                        {"periode":"2018", "pscName":"Operator A", "totalBudget":"$ 190.000","type":"G&G Studies"}, 
                        {"periode":"2018", "pscName":"Operator A", "totalBudget":"$ 2.004.109","type":"Intagible Drilling/Workover"},
                        {"periode":"2018", "pscName":"Operator A", "totalBudget":"$ 1.222.200","type":"Operational Expense"}
                    ]
                },

        columns   : [
        {
          field   : "periode",
          title   : "Budget Period",
          width   : "30px"
        },{
          field   : "pscName",
          title   : "Op. Name",
          width   : "35px",
        },
        {
          field   : "totalBudget",
          title   : "Total Budgeted",
          width   : "30px"
        },
        {
          field   : "type",
          title   : "Non Capital Type",
          width   : "30px"
        },
        { command: { text: "View Details", click: clickDetails }, title: "Check Details", width: "20px" }]
      };
    
    function clickDetails(e){
        e.preventDefault();

		var dataItem = this.dataItem($(e.currentTarget).closest("tr"));
				console.log(dataItem);
		if(dataItem.type == "Intangible Drilling/Workover"){
			$state.go("dashboard.drillingbudget");
		} else if(dataItem.type == "G&G Studies"){
			$state.go("dashboard.surveybudget");
        } else if(dataItem.type == "Operational Expense"){
             $state.go('dashboard.budgetform');
        }
    };

  	function generateRandomItem(id) {

        var wpnbproduct = wpnbProducts[Math.floor(Math.random() * 1)];
        
        return {
            wpnbPeriod: id + wpnbPeriods,
            wpnbProduct: wpnbproduct
        }
    }

    $scope.rowCollection = [];

    for (id; id < 5; id++) {
        $scope.rowCollection.push(generateRandomItem(id));
    }

    //add to the real data holder
    $scope.addRandomItem = function addRandomItem() {
        $scope.rowCollection.push(generateRandomItem(id));
        id++;
    };

    //remove to the real data holder
    $scope.removeItem = function removeItem(row) {
        var index = $scope.rowCollection.indexOf(row);
        if (index !== -1) {
            $scope.rowCollection.splice(index, 1);
        }
    }
  }]);