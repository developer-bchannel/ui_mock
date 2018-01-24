'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp')
  .controller('PrewpnbpageCtrl', 
    function ($scope, $timeout, $http, $log, $state, $stateParams) {
    	$scope.afeGridOptions = {
        sortable  : true,
        pageable  : true,
        dataSource: {
                    data:
                    [ {"wpnbId":"2017-190-001", "pscName": "Drilling and Workover", "budgetQ1":"Drilling a new rabbit hole"},
                      {"wpnbId":"2017-18B-003", "pscName": "Directional Survey", "budgetQ1":"Geological Study For New rabbit Hole"}                  
                    ]},

        columns   : [
        {
          field   : "wpnbId",
          title   : "AFE #",
          width   : "40px"
        },{
          field   : "status",
          title   : "Status",
          width   : "10px",
        },{
          field   : "pscName",
          title   : "Project Name",
          width   : "60px",
        },
        {
          field   : "budgetQ1",
          title   : "Description",
          width   : "80px"
        },{
          field   : "budgetQ2",
          title   : "Budget",
          width   : "50px"
        }]
      };

    });