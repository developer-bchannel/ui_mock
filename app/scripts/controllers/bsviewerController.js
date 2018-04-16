"use strict";
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp')
.controller('BsviewerCtrl', function ($scope, $timeout, $http, $log, $state, $stateParams) {

    $scope.sheets= [{ name: "BS11", name: "BS11-att" }];
    $scope.sheets1= [{ name: "BS11", name: "BS11" }];
     $scope.$on("kendoWidgetCreated", function(event, widget){
          // the event is emitted for every widget; if we have multiple
          // widgets in this controller, we need to check that the event
          // is for the one we're interested in.
          if (widget === $scope.spreadsheet) {
            var sheets = $scope.spreadsheet.sheets();
            $scope.spreadsheet.activeSheet(sheets[0]);
          }
          if (widget === $scope.spreadsheet1) {
            var sheets = $scope.spreadsheet1.sheets();
            $scope.spreadsheet1.activeSheet(sheets[0]);
          }
        });
});