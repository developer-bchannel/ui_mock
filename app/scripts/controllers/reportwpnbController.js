"use strict";
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp')
  .controller('ReportWpnbCtrl', ['$scope', '$timeout', '$http', function ($scope, $timeout,$http) {

    function clickDetails(e){
        e.preventDefault();
        $state.go('dashboard.wpnbapproval.statusform');
      };
  	
    $scope.preAprrovedwpnbGridOptions = {
        sortable  : true,
        pageable  : true,
        height : 350,
        dataSource: {
                    data:
                    [ {"wpnbId":"WPnB-001-2016-A", "pscName":"PSC A Madura Strait", "totalBudget":"$790,000","totalCapBudget":"$835,780"},
                      {"wpnbId":"WPnB-002-2016-A", "pscName":"PSC B Natuna", "totalBudget":"$190,000","totalCapBudget":"$177,580"}                  
                    ]},

        columns   : [
        {
          field   : "wpnbId",
          title   : "WPnB #",
          width   : "30px"
        },{
          field   : "pscName",
          title   : "PSC Name",
          width   : "35px",
        },
        {
          field   : "totalBudget",
          title   : "Total Approved Operational Budget",
          width   : "30px"
        },
        {
          field   : "totalCapBudget",
          title   : "Total Approved Project Budget",
          width   : "30px"
        },
        { command: { text: "Additional Document", click: clickDetails }, title: "Check Additional Documents", width: "20px" }]
      };
  }]);