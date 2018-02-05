"use strict";
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp')
  .controller('NewAfeCtrl', ['$scope', '$timeout', '$http', function ($scope, $timeout, $http) {

  	 $scope.afeSheets = [{ name: "BS19"}];

     $scope.$on("kendoWidgetCreated", function(event, widget){
          if (widget === $scope.projectSheet) {
            var sheets = $scope.projectSheet.sheets();

            $.getJSON('assets/BS19(T).json').then(function(data){
              $scope.spreadsheetOptions = sheets[0].fromJSON(data);  
            }); 
          } 
        });
  }]);