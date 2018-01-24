'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp')
  .controller('ProjectPlanningCtrl', function ($scope, $timeout, $stateParams, $log, $modal) {

  	var projectNames = ['Drilling', 'Workover', 'Survey', 'Marine Survey'];
    var id = 1;

    console.log($stateParams);

    function randomDate(start, end) {
    	return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
	}

  	function generateRandomItem(id) {

        var projectname = projectNames[Math.floor(Math.random() * 3)];
        
        return {
            id: id,
            projectName: projectname,
            estStartDate: new Date(2015, 0, 1), 
            estEndDate: new Date(2017, 0, 1), 
        }
    }

    $scope.openPod = function () {
        $modal.open({
            templateUrl : "podform.html",
            backdrop    : true,
            windowClass : 'modal',
            controller  : function($scope,$modalInstance,$log,pscData){
                $scope.ContractData = pscData;
                $scope.submit = function() {
                    $log.log(pscData);
                };
                $scope.cancel = function() {
                    $modalInstance.dismiss('cancel');
                }
            },
            resolve     : {
                pscData : function(){
                    return $scope.ContractData;
                }
            }
        });
    };

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
  });