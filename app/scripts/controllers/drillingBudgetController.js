'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp')
  .controller('DrillingBudgetCtrl', 
    function ($scope, $timeout, $http, $log, $state, $stateParams) {

      $scope.budgetType = function(){
        if($stateParams.budgetTypeId == "R11")
          return "General Admin Expense";
        else if($stateParams.budgetTypeId == "R08")
          return "Production";
      };

      var tangibleData = [
        "40201011 - WIP Development Wells - Casing - Domestic",
        "40201012 - WIP Development Wells - Casing - Import",
        "40201021 - WIP Development Wells - Casing  Accessories - Domestic",
        "40201022 -	WIP Development Wells - Casing  Accessories - Import",
        "40201031 -	WIP Development Wells - Tubing - Domestic",
        "40201032	- WIP Development Wells - Tubing - Import",
        "40201041	- WIP Development Wells - Well Equipment Surface  - Domestic",
        "40201042	- WIP Development Wells - Well Equipment Surface  - Import",
        "40201051	- WIP Development Wells - Well Equipment Sub Surface - Domestic",
        "40201052	- WIP Development Wells - Well Equipment Sub Surface - Import",
        "40201981	- WIP Development Wells - Other Tangible Cost - Domestic",
        "40201982	- WIP Development Wells - Other Tangible Cost - Import"
      ];


      var tangibleAutoComplete = function(container, options){
        $('<input  data-bind="value:' + options.field + '" style="width: 100%" />')
            .appendTo(container)
            .kendoAutoComplete({
                dataSource: tangibleData,
                filter:"contains",
                minLength:"3"
           });
      };

      var intangibleData = [
        "40202011 - WIP Development Wells - Surveys - Domestic Contract Service",
        "40202012 - WIP Development Wells - Surveys - Overseas Technical Service",
        "40202021 - WIP Development Wells - Location Staking and Positioning - Domestic Contract Service",
        "40202022 - WIP Development Wells - Location Staking and Positioning - Overseas Technical Service",
        "40202031 - WIP Development Wells - Well Site and Access Road Preparation - Domestic Contract Service",
        "40202032 - WIP Development Wells - Well Site and Access Road Preparation - Overseas Technical Service",
        "40202041 - WIP Development Wells - Service Lines and Communication - Domestic Contract Service",
        "40202042 - WIP Development Wells - Service Lines and Communication - Overseas Technical Service",
        "40202051 - WIP Development Wells - Water Systems - Domestic Contract Service",
        "40202052 - WIP Development Wells - Water Systems - Overseas Technical Service",
        "40202061 - WIP Development Wells - Rigging Up and Rigging Down - Domestic Contract Service",
        "40202062 - WIP Development Wells - Rigging Up and Rigging Down - Overseas Technical Service",
        "40202071 - WIP Development Wells - Contract Rig - Domestic Contract Service",
        "40202072 - WIP Development Wells - Contract Rig - Overseas Technical Service",
        "40202081 - WIP Development Wells - Drilling Rig Crew/Contract Rig Crew - Domestic Contract Service",
        "40202082 - WIP Development Wells - Drilling Rig Crew/Contract Rig Crew - Overseas Technical Service",
        "40202090 - WIP Development Wells - Mud Chemical & Engineering Services - Domestic Contract Service",
        "40202100 - WIP Development Wells - Water - Domestic Contract Service",
        "40202111 - WIP Development Wells - Bits, Reamer and Core Heads - Domestic",
        "40202112 - WIP Development Wells - Bits, Reamer and Core Heads- Import",
        "40202121 - WIP Development Wells - Equipment Rental - Domestic Contract Service",
        "40202122 - WIP Development Wells - Equipment Rental - Overseas Technical Service",
        "40202131 - WIP Development Wells - Directional Drilling and Surveys - Domestic Contract Service",
        "40202132 - WIP Development Wells - Directional Drilling and Surveys - Overseas Technical Service",
        "40202141 - WIP Development Wells - Diving Services - Domestic Contract Service",
        "40202142 - WIP Development Wells - Diving Services - Overseas Technical Service",
        "40202151 - WIP Development Wells - Casing Installation - Domestic Contract Service",
        "40202152 - WIP Development Wells - Casing Installation - Overseas Technical Service",
        "40202331 - WIP Development Wells - Fuel and Lubricants - Domestic",
        "40202332 - WIP Development Wells - Fuel and Lubricants - Import",
        "40202171 - WIP Development Wells - Coring - Domestic Contract Service",
        "40202172 - WIP Development Wells - Coring - Overseas Technical Service",
        "40202181 - WIP Development Wells - Mud Logging Services - Domestic Contract Service",
        "40202182 - WIP Development Wells - Mud Logging Services - Overseas Technical Service",
        "40202191 - WIP Development Wells - Drill Stem Tests - Domestic Contract Service",
        "40202192 - WIP Development Wells - Drill Stem Tests - Overseas Technical Service",
        "40202201 - WIP Development Wells - Open Hole Electrical Logging Services - Domestic Contract Service",
        "40202202 - WIP Development Wells - Open Hole Electrical Logging Services - Overseas Technical Service",
        "40202160 - WIP Development Wells - Cement, Cementing and Pump Fees - Domestic Contract Service",
        "40202211 - WIP Development Wells - Casing Liner and Tubing Installation - Domestic Contract Service",
        "40202212 - WIP Development Wells - Casing Liner and Tubing Installation - Overseas Technical Service",
        "40202221 - WIP Development Wells - Cased Hole Electrical Logging Services - Domestic Contract Service",
        "40202222 - WIP Development Wells - Cased Hole Electrical Logging Services - Overseas Technical Service",
        "40202231 - WIP Development Wells - Perforating and Wireline Services - Domestic Contract Service",
        "40202232 - WIP Development Wells - Perforating and Wireline Services - Overseas Technical Service",
        "40202241 - WIP Development Wells - Stimulation Treatment - Domestic Contract Service",
        "40202242 - WIP Development Wells - Stimulation Treatment - Overseas Technical Service",
        "40202251 - WIP Development Wells - Production Test - Domestic Contract Service",
        "40202252 - WIP Development Wells - Production Test - Overseas Technical Service",
        "40202261 - WIP Development Wells - Supervision - Domestic Contract Service",
        "40202262 - WIP Development Wells - Supervision - Overseas Technical Service",
        "40202270 - WIP Development Wells - Insurance",
        "40202280 - WIP Development Wells - Permits and Fees - Domestic Contract Service",
        "40202291 - WIP Development Wells - Marine Rental and Charters - Domestic Contract Service",
        "40202292 - WIP Development Wells - Marine Rental and Charters - Overseas Technical Service",
        "40202301 - WIP Development Wells - Helicopter and Aviation Charges - Domestic Contract Service",
        "40202302 - WIP Development Wells - Helicopter and Aviation Charges - Overseas Technical Service",
        "40202311 - WIP Development Wells - Land Transportation - Domestic Contract Service",
        "40202312 - WIP Development Wells - Land Transportation - Overseas Technical Service",
        "40202321 - WIP Development Wells - Other Transportation - Domestic Contract Service",
        "40202322 - WIP Development Wells - Other Transportation - Overseas Technical Service",
        "40202340 - WIP Development Wells - Camp Facilities - Domestic Contract Service",
        "40202351 - WIP Development Wells - Contracted Employee - Domestic Contract Service",
        "40202352 - WIP Development Wells - Contracted Employee - Overseas Technical Service",
        "40202360 - WIP Development Wells - Environmental Control",
        "40202961 - WIP Development Wells - Other Intangible Cost - Domestic Contract Service",
        "40202962 - WIP Development Wells - Other Intangible Cost - Overseas Technical Service",
        "40202971 - WIP Development Wells - Other Intangible Cost - Domestic Non-Capital Material",
        "40202972 - WIP Development Wells - Other Intangible Cost - Import Non-Capital Material",
        "40202981 - WIP Development Wells - Other Intangible Cost - Domestic Sundries",
        "40202982 - WIP Development Wells - Other Intangible Cost - Overseas Sundries"
      ];


      var intangibleAutoComplete = function(container, options){
        $('<input  data-bind="value:' + options.field + '" style="width: 100%" />')
            .appendTo(container)
            .kendoAutoComplete({
                dataSource: intangibleData,
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
                            naturalAccountCode : "40201031 -	WIP Development Wells - Tubing - Domestic",
                            accountDescription : "Perforated Tubing O/D 9mm I/D 7.5mm",
                            budgetQ1 : "45200",
                            budgetQ2 : "0",
                            budgetQ3 : "0",
                            budgetQ4 : "49030"
                          },
                          {
                            naturalAccountCode : "40201041	- WIP Development Wells - Well Equipment Surface  - Domestic",
                            accountDescription : "Rig Pump 117 Psi",
                            budgetQ1 : "50000",
                            budgetQ2 : "57646",
                            budgetQ3 : "40000",
                            budgetQ4 : "0"
                          },
                          {
                            naturalAccountCode : "40201052	- WIP Development Wells - Well Equipment Sub Surface - Import",
                            accountDescription : "Rig Pump 117 Psi (Subsurface)",
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

      $scope.intangibleGridOptions = {
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
          editor  : intangibleAutoComplete,
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