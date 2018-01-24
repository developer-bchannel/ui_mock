"use strict";
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp')
  .controller('WpnbTemplateCtrl', ['$scope', '$timeout', function ($scope, $timeout) {

  	 $scope.sheets= [{ name: "BS19", name: "BS20" }];
     $scope.$on("kendoWidgetCreated", function(event, widget){
          // the event is emitted for every widget; if we have multiple
          // widgets in this controller, we need to check that the event
          // is for the one we're interested in.
          if (widget === $scope.spreadsheet) {
            var sheets = $scope.spreadsheet.sheets();
            $scope.spreadsheet.activeSheet(sheets[1]);
          }
        });
  }]);