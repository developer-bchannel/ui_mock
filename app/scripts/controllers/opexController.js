'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp')
  .controller('OpexCtrl', 
    function ($scope, $timeout, $http, $log, $state, $stateParams) {

      $scope.budgetType = function(){
        if($stateParams.budgetTypeId == "R11")
          return "General Admin Expense";
        else if($stateParams.budgetTypeId == "R08")
          return "Production";
      };

      var execData = [
        "89903010 - Stationary/Supplies",
        "89903020 - Printing/Photocopy/Reproduction",
        "89903030 - Newspaper/Magazine Subscriptions",
        "80199082	- Traveling & Accommodation Expatriate",
        "89903050	- Communication (Others)"
      ];


      var descriptionAutoComplete = function(container, options){
        $('<input  data-bind="value:' + options.field + '" style="width: 100%" />')
            .appendTo(container)
            .kendoAutoComplete({
                dataSource: execData,
                filter:"contains",
                minLength:"3"
           });
      };

      $scope.product = $stateParams.productId;

    	$scope.execOptions = {
        sortable  : true,
        pageable  : true,
        toolbar   : ["create"],
        editable  : "inline",
        dataBound : function() {
                      this.expandRow(this.tbody.find("tr.k-master-row").first());
                    },
        dataSource: {
                      schema:{
                        model:{
                          field:{
                            naturalAccountCode:{type:"string"},
                            accountDescription:{type:"string"},
                            budgetQ1:{type:"number"},
                            budgetQ2:{type:"number"},
                            budgetQ3:{type:"number"},
                            budgetQ4:{type:"number"}
                          }
                        }
                      },
                      offlineStorage : "offline-exec"
                    },
        columns   : [
        {
          field   : "naturalAccountCode",
          title   : "Cost Element",
          width   : "100px",
          editor  : descriptionAutoComplete,
        },{
          field   : "accountDescription",
          title   : "Description",
          width   : "120px"
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
        }]
      };
});