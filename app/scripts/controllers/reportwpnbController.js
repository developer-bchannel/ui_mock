"use strict";
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp')
.controller('ReportWpnbCtrl', function ($scope, $timeout, $http, $log, $state, $stateParams) {

    function clickDetails(e){
        e.preventDefault();
        $state.go('dashboard.wpnbapproval.statusform');
      };

    $scope.viewBs = function(){
      //e.preventDefault();
      $state.go('dashboard.wpnbviewer');
    };
  	
    $scope.preAprrovedwpnbGridOptions = {
        sortable  : true,
        pageable  : true,
        height : 350,
        dataSource: {
                    data:
                    [ {"wpnbId":"2017", "pscName":"Operator C", "totalBudget":"$790,000","totalCapBudget":"$835,780","currStatus":"Approved"},
                      {"wpnbId":"2017", "pscName":"Operator A", "totalBudget":"$34,750","totalCapBudget":"$177,780","currStatus":"Reviewed For Approval"},               
                      {"wpnbId":"2017", "pscName":"Operator B", "totalBudget":"$490,000","totalCapBudget":"$187,720","currStatus":"Review for Revision"}
                    ]},

        columns   : [
        {
          field   : "wpnbId",
          title   : "Period",
          width   : "15px"
        },{
          field   : "pscName",
          title   : "Operator Name",
          width   : "20px",
        },
        {
          field   : "totalBudget",
          title   : "Non Capital Budget",
          width   : "30px"
        },
        {
          field   : "totalCapBudget",
          title   : "Capital Budget",
          width   : "30px"
        },
        {
          field   : "currStatus",
          title   : "Current Status",
          width   : "30px"
        },
        { 
          command: [{ text: "Details", click: clickDetails },{ text: "Document", click: clickDetails }], title: "Command", width: "30px" 
        }
          ]
      };

      $scope.reviewTypeOptions = {
        autoWidth: true,
        dataSource:['SKK Revision', 'Approved by SKK']
    };

      $scope.revisionGridOptions = {
        sortable  : true,
        pageable  : true,
        toolbar   : ["create"],
        editable  : true,
        height : 350,
        columns   : [
          {
            field   : "bsType",
            title   : "BS Type",
            width   : "7px",
          },
          {
            field   : "bsLine",
            title   : "BS Line #",
            width   : "7px"
          },
          {
            field   : "originalValue",
            title   : "Original Value ($)",
            width   : "8px"
          },
          {
            field   : "revisionValue",
            title   : "Original Value ($)",
            width   : "8px"
          },
          {
            field   : "revisionDescription",
            title   : "Description",
            width   : "38px"
          }]
      };
  });