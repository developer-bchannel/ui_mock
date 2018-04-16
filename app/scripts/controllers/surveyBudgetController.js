'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp')
  .controller('SurveyBudgetCtrl', 
    function ($scope, $timeout, $http, $log, $state, $stateParams) {

      var surveyData = [
        "40202011 - WIP Development Wells - Surveys - Domestic Contract Service",
        "40501011 - WIP G&G - Lab Analysis - Domestic Contract Service",
        "40501012 - WIP G&G - Lab Analysis - Overseas Technical Service",
        "40501020 - WIP G&G - Purchase - Domestic Contract Service",
        "40501030 - WIP G&G - Data processing - Domestic Contract Service",
        "40501041 - WIP G&G - Study Reprocessing / Interpretation / Evaluation / Integration / Certification - Domestic Contract Service",
        "40501042 - WIP G&G - Study Reprocessing / Interpretation / Evaluation / Integration / Certification - Overseas Technical Service",
        "40501051 - WIP G&G - Consultancy - Domestic Contract Service",
        "40501052 - WIP G&G - Consultancy - Overseas Technical Service",
        "40501970 - WIP G&G - Other - Domestic Contract Service",
        "40501980 - WIP G&G - Other - Domestic Sundries ",
        "40502011 - WIP GGR - Lab Analysis - Domestic Contract Service",
        "40502012 - WIP GGR - Lab Analysis - Overseas Technical Service",
        "40502020 - WIP GGR - Purchase - Domestic Contract Service",
        "40502031 - WIP GGR - Engineering - Domestic Contract Service",
        "40502032 - WIP GGR - Engineering - Technical Service Overseas",
        "40502041 - WIP GGR - Engineering - Domestic Sundries",
        "40502042 - WIP GGR - Engineering - Overseas Sundries",
        "40502051 - WIP GGR - PMT - Domestic Contract Service",
        "40502052 - WIP GGR - PMT - Overseas Technical Service",
        "40502061 - WIP GGR - PMT - Domestic Sundries",
        "40502062 - WIP GGR - PMT - Overseas Sundries",
        "40502070 - WIP GGR - Data processing - Domestic Contract Service",
        "40502081 - WIP GGR - Study Reprocessing / Interpretation / Evaluation / Integration / Certification - Domestic Contract Service",
        "40502082 - WIP GGR - Study Reprocessing / Interpretation / Evaluation / Integration / Certification - Overseas Technical Service",
        "40502091 - WIP GGR - Consultancy - Domestic Contract Service",
        "40502092 - WIP GGR - Consultancy - Overseas Technical Service",
        "40502100 - WIP GGR - Field Trial Project - Materials-Non-Capital - Domestic",
        "40502110 - WIP GGR - Field Trial Project - Domestic Contract Service",
        "40502120 - WIP GGR - Field Trial Project - Domestic Sundries",
        "40502130 - WIP GGR - Pilot Project - Materials-Non-Capital - Domestic",
        "40502140 - WIP GGR - Pilot Project - Domestic Contract Service",
        "40502150 - WIP GGR - Pilot Project - Domestic Sundries",
        "40502960 - WIP GGR - Others - Domestic Contract Service",
        "40502970 - WIP GGR - Others - Material-Non-Capital - Domestic",
        "40502980 - WIP GGR - Others - Domestic Sundries",
        "40504011 - WIP GGR Capital Expenditures - Domestic Sundries",
        "40504012 - WIP GGR Capital Expenditures - Overseas Sundries"
      ];


      var tangibleAutoComplete = function(container, options){
        $('<input  data-bind="value:' + options.field + '" style="width: 100%" />')
            .appendTo(container)
            .kendoAutoComplete({
                dataSource: surveyData,
                filter:"contains",
                minLength:"3"
           });
      };


      $scope.product = $stateParams.productId;

    	$scope.tangibleGridOptions = {
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
                      data : 
                      [
                          {
                            naturalAccountCode : "40502120 - WIP GGR - Field Trial Project - Domestic Sundries",
                            accountDescription : "Duration 6 months",
                            budgetQ1 : "45200",
                            budgetQ2 : "0",
                            budgetQ3 : "0",
                            budgetQ4 : "49030"
                          },
                          {
                            naturalAccountCode : "40501012 - WIP G&G - Lab Analysis - Overseas Technical Service",
                            accountDescription : "Siemens Singapore Geology Laboratorium",
                            budgetQ1 : "50000",
                            budgetQ2 : "57646",
                            budgetQ3 : "40000",
                            budgetQ4 : "0"
                          },
                          {
                            naturalAccountCode : "40502960 - WIP GGR - Others - Domestic Contract Service",
                            accountDescription : "Contract 3 mo PT xxx",
                            budgetQ1 : "50000",
                            budgetQ2 : "5471",
                            budgetQ3 : "0",
                            budgetQ4 : "0"
                          }
                      ]
                    },
        columns   : [
        {
          field   : "naturalAccountCode",
          title   : "Cost Element",
          width   : "100px",
          editor  : tangibleAutoComplete,
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