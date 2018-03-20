'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp')
  .controller('PrewpnbCtrl', 
    function ($scope, $timeout, $http, $log, $state, $stateParams) {
      $scope.budgetType = false;

      function clickDetails(e){
        e.preventDefault();
        $state.go('dashboard.prewpnb.statusform');
      };
      
      $scope.reviewTypeOptions = {
        autoWidth: true,
        dataSource:['Executive', 'Corporate Service']
    };

    $scope.budgetTypeOptions = {
      autoWidth: true,
      dataSource:['Capital', 'Non Capital'],
      select: function(e){
        if (e.item) {
          var selectedType = this.dataItem(e.item.index());

          if(selectedType === "Non Capital"){
            $scope.budgetType = true;
          }else{
            $scope.budgetType = false;
          }
        }
      }
    };

      $scope.revisionGridOptions = {
        sortable  : true,
        pageable  : true,
        editable  : true,
        height : 350,
        dataSource: {
          data:
          [ 
              {"bsLine":"89903010 - Stationary/Supplies", "originalValue1":"2200", "originalValue2":"5350", "variance":"(58.89 %)"},
              {"bsLine":"89903081 -	Traveling and Accomodation(Domestic Sundries)", "originalValue1":"30150", "originalValue2":"7350", "variance":"310.20 %"},
              {"bsLine":"80206020	Office, Housing and Welfare Lease", "originalValue1":"2400", "originalValue2":"0", "variance":"0 %"},     
          ],
          batch : true
        },
        columns   : [
          {
            field   : "bsLine",
            title   : "Account Code",
            width   : "20px"
          },
          {
            field   : "originalValue1",
            title   : "Current ($)",
            width   : "8px"
          },
          {
            field   : "originalValue2",
            title   : "Previous ($)",
            width   : "8px"
          },
          {
            field   : "variance",
            title   : "Variance ($)",
            width   : "8px"
          },
            {
              command: [
                { name: "approve", text: "Approve" },
                { name: "reject", text: "Reject"},
                { name: "correction", text: "Correction" }
              ],
              width : "13px"
            }
          ]
      };

      $scope.prewpnbGridOptions = {
        sortable  : true,
        pageable  : true,
        height : 350,
        dataSource: {
                    data:
                    [ {"period":"2017", "pscName":"Operator A", "totalBudget":"$790,000","totalCapBudget":"$835,780"},
                      {"period":"2017", "pscName":"Operator A", "totalBudget":"$34,750","totalCapBudget":"$177,580"}                  
                    ]},

        columns   : [
        {
          field   : "period",
          title   : "Period",
          width   : "30px"
        },{
          field   : "pscName",
          title   : "Operator Name",
          width   : "35px",
        },
        {
          field   : "totalBudget",
          title   : "Total Non Capital Budgeted",
          width   : "30px"
        },
        {
          field   : "totalCapBudget",
          title   : "Total Capital Budgeted",
          width   : "30px"
        },
        { command: { text: "View Details", click: clickDetails }, title: "Check Details", width: "20px" }]
      };

  

  });