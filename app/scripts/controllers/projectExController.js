"use strict";
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp')
  .controller('ProjectexCtrl', ['$scope', '$timeout', '$http', function ($scope, $timeout,$http) {
  	
    $scope.bsSelectorOptions = {
        autoWidth: true,
        dataSource:['Project Budget', 'Inventory Budget'],
        select : function(e){
          var dataItem = this.dataItem(e.item.index());
          if(dataItem == 'Project Budget'){
            $.getJSON('assets/BS19(T).json').then(function(data){
              var sheets = $scope.projectSheet.sheets();
              $scope.spreadsheetOptions = sheets[0].fromJSON(data);
              $scope.sheets= [{ name: "BS19 (T)" }];
            }); 
          }else if(dataItem == 'Inventory Budget'){
            $.getJSON('assets/BS20.json').then(function(data){
              var sheets = $scope.projectSheet.sheets();
              $scope.spreadsheetOptions = sheets[0].fromJSON(data);
              $scope.sheets= [{ name: "BS20 (T)" }];
            });
          }
        }
    };

    $scope.afeWizOptions = {
        autoWidth: true,
        dataSource:['Yes', 'No']
    };


    

    $scope.$on("kendoWidgetCreated", function(event, widget){
          // the event is emitted for every widget; if we have multiple
          // widgets in this controller, we need to check that the event
          // is for the one we're interested in.
          $scope.sheets= [{ name: "BS19 (T)" }];
          if (widget === $scope.projectSheet) {
            var sheets = $scope.projectSheet.sheets();
            $.getJSON('assets/BS19(T).json').then(function(data){
              $scope.spreadsheetOptions = sheets[0].fromJSON(data);
            }); 
            console.log(sheets); 
            //$scope.spreadsheet.activeSheet(sheets[1]);
          } 
    });
  }]);