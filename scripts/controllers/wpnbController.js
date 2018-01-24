'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp')
  .controller('WpnbCtrl', ['$scope', '$timeout', function ($scope, $timeout) {

  	var wpnbProducts = ['Oil', 'Gas'];
    var wpnbPeriods = 2015;
    var id = 0;

    
  	function generateRandomItem(id) {

        var wpnbproduct = wpnbProducts[Math.floor(Math.random() * 1)];
        
        return {
            wpnbPeriod: id + wpnbPeriods,
            wpnbProduct: wpnbproduct
        }
    }

    $scope.rowCollection = [];

    for (id; id < 5; id++) {
        $scope.rowCollection.push(generateRandomItem(id));
    }

    //add to the real data holder
    $scope.addRandomItem = function addRandomItem() {
        $scope.rowCollection.push(generateRandomItem(id));
        id++;
    };

    //remove to the real data holder
    $scope.removeItem = function removeItem(row) {
        var index = $scope.rowCollection.indexOf(row);
        if (index !== -1) {
            $scope.rowCollection.splice(index, 1);
        }
    }
  }]);