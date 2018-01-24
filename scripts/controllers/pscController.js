'use strict';
angular.module('sbAdminApp')
  .controller('PscCtrl',  function ($scope, $timeout, $log, $modal) {

    var contractNos = ['2016#112-110-', '2016#099-08-', '2016#102-29-', '2016#232-19-'];
    var contractAreas = ['Bawean', 'Madura Strait', 'Balikpapan', 'Eponge'];
    var contractPartners = ['Pertamina', 'Medco Energy', 'Kangean Energy Indonesia', 'Total Indonesia'];
    var contractPeriods = [5,10,15,20];
    var contractProducts = ['Oil','Gas'];
    var id = 1;

    $scope.ContractData = {
        id              : null,
        contractno      : 'contractno',
        contractArea    : 'Area',
        contractPartner : 'Partner',
        contractPeriod  : 5,
        contractProduct : 1
    };

    $scope.openPsc = function () {
        $modal.open({
            templateUrl : "pscform.html",
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
    

    function generateRandomItem(id) {

        var contractno = contractNos[Math.floor(Math.random() * 3)] + (Math.floor(Math.random() * 25)).toString();
        var contractarea = contractAreas[Math.floor(Math.random() * 3)];
        var contractpartner = contractPartners[Math.floor(Math.random() * 3)];
        var contractperiod = Math.floor(Math.random() * 25);
        var contractproduct = contractProducts[Math.floor(Math.random()*1)];

        return {
            id: id,
            contractNo: contractno,
            contractArea: contractarea,
            contractPartner: contractpartner,
            contractPeriod: contractperiod,
            contractProduct: contractproduct
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
});