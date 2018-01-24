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

  $scope.prewpnbGridOptions = {
        sortable  : true,
        pageable  : true,
        dataSource: {
                    data:
                    [ {"wpnbId":"WPnB-001-2016-A", "pscName":"PSC A Madura Strait", "budgetQ1":"$90,000", "budgetQ2":"$16,000","budgetQ3":"$32,000" ,"budgetQ4":"$45,000"},
                      {"wpnbId":"WPnB-002-2016-A", "pscName":"PSC B Natuna", "budgetQ1":"$190,000", "budgetQ2":"$116,000","budgetQ3":"$30,000" ,"budgetQ4":"$15,000"}                  
                    ]},

        columns   : [
        {
          field   : "wpnbId",
          title   : "WPnB #",
          width   : "80px"
        },{
          field   : "pscName",
          title   : "PSC Name",
          width   : "100px",
        },
        {
          field   : "budgetQ1",
          title   : "Q1",
          width   : "50px"
        },{
          field   : "budgetQ2",
          title   : "Q2",
          width   : "50px"
        },{
          field   : "budgetQ3",
          title   : "Q3",
          width   : "50px"
        },{
          field   : "budgetQ4",
          title   : "Q4",
          width   : "50px"
        },{
          field   : "totalBudget",
          title   : "Total",
          width   : "50px"
        }]
      };

  });