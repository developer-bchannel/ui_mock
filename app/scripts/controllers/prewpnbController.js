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

      function clickDetails(e){
        e.preventDefault();
        $state.go('dashboard.prewpnb.statusform');
      };
      
      $scope.reviewTypeOptions = {
        autoWidth: true,
        dataSource:['SKK Revision', 'Approved by SKK']
    };

      $scope.revisionGridOptions = {
        sortable  : true,
        pageable  : true,
        toolbar   : ["create"],
        editable  : "inline",
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
          },
          {
            field   : "revisionDocument",
            title   : "Document Number",
            width   : "15px"
          }]
      };

      $scope.prewpnbGridOptions = {
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
          title   : "Total Operational Budget",
          width   : "30px"
        },
        {
          field   : "totalCapBudget",
          title   : "Total Project Budget",
          width   : "30px"
        },
        { command: { text: "View Details", click: clickDetails }, title: "Check Details", width: "20px" }]
      };

  

  });