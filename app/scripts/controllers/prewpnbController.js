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
        toolbar   : ["create"],
        editable  : true,
        height : 350,
        dataSource: {
          data:
          [ 
              {"bsLine":"89903010 - Stationary/Supplies", "originalValue1":"10000", "originalValue2":"1000","originalValue3":"100","originalValue4":"100"}     
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
            title   : "Original Q1 ($)",
            width   : "8px"
          },
          {
            field   : "revisionValue1",
            title   : "Revision Q1 ($)",
            width   : "8px"
          },
          {
            field   : "originalValue2",
            title   : "Original Q2 ($)",
            width   : "8px"
          },
          {
            field   : "revisionValue2",
            title   : "Revision Q2 ($)",
            width   : "8px"
          },
          {
            field   : "originalValue3",
            title   : "Original Q3 ($)",
            width   : "8px"
          },
          {
            field   : "revisionValue3",
            title   : "Revision Q3 ($)",
            width   : "8px"
          },
          {
            field   : "originalValue4",
            title   : "Original Q4 ($)",
            width   : "8px"
          },
          {
            field   : "revisionValue4",
            title   : "Revision Q4 ($)",
            width   : "8px"
          },
          {
            field   : "revisionDescription",
            title   : "Remarks",
            width   : "38px"
          }]
      };

      $scope.prewpnbGridOptions = {
        sortable  : true,
        pageable  : true,
        height : 350,
        dataSource: {
                    data:
                    [ {"period":"2017", "pscName":"Operator A", "totalBudget":"$790,000","totalCapBudget":"$835,780"},
                      {"period":"2017", "pscName":"Operator A", "totalBudget":"$190,000","totalCapBudget":"$177,580"}                  
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