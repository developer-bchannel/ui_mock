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


      var descriptionAutoComplete = function(container, options){
        $('<input  data-bind="value:' + options.field + '" style="width: 120px" />')
            .appendTo(container)
            .kendoAutoComplete({
                dataSource: $scope.accountData,
                filter:"contains",
                minLength:"1"
           });
      };

      $scope.accountData = {
        transport :   {
          read: function(e){
            $http({
              method  : 'GET',
              url     : 'http://localhost:2222/getAllAccount'
            }).success(function(response){
              $log.debug(response   );
              e.success(response);
            });
          } 
        }
      };

      $scope.product = $stateParams.productId;

    	$scope.budgetGridOptions = {
        sortable  : true,
        pageable  : true,
        toolbar   : ["create"],
        editable  : "inline",
        dataBound : function() {
                      this.expandRow(this.tbody.find("tr.k-master-row").first());
                    },
        dataSource: {

                    },
        columns   : [
        {
          field   : "naturalAccountCode",
          title   : "Cost Element",
          width   : "80px"
        },{
          field   : "accountDescription",
          title   : "Description",
          width   : "120px",
          editor  : descriptionAutoComplete,
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