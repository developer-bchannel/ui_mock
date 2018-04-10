'use strict';
/**
 * @ngdoc overview
 * @name sbAdminApp
 * @description
 * # sbAdminApp
 *
 * Main module of the application.
 */
angular
  .module('sbAdminApp', [
    'oc.lazyLoad',
    'ui.router',
    'ui.bootstrap',
    'angular-loading-bar',
    'smart-table',
    'ncy-angular-breadcrumb',
    'kendo.directives',
    'ui-notification'
  ])
  .config(['$stateProvider','$urlRouterProvider','$ocLazyLoadProvider',function ($stateProvider,$urlRouterProvider,$ocLazyLoadProvider) 
  {  
    $ocLazyLoadProvider.config({
      debug:true,
      events:true,
    });

    $urlRouterProvider.otherwise('/dashboard/home');

    $stateProvider
      .state('dashboard', {
        url:'/dashboard',
        ncyBreadcrumb: {
          label: 'Dashboard'
        },
        templateUrl: 'views/dashboard/main.html',
        resolve: {
            loadMyDirectives:function($ocLazyLoad){
                return $ocLazyLoad.load(
                {
                    name:'sbAdminApp',
                    files:[
                    'scripts/directives/header/header.js',
                    'scripts/directives/sidebar/sidebar.js',
                    'scripts/directives/sidebar/sidebar-search/sidebar-search.js'
                    ]
                })
            }
        }
      })
      .state('dashboard.home',{
        url:'/home',
        controller: 'MainCtrl',
        templateUrl:'views/dashboard/home.html',
        ncyBreadcrumb: {
          label: 'Dashboard'
        },
        resolve: {
          loadMyFiles:function($ocLazyLoad) {
            return $ocLazyLoad.load({
              name:'sbAdminApp',
              files:[
              'scripts/controllers/main.js'
              ]
            })
          }
        }
      })
      .state('dashboard.form',{
        templateUrl:'views/form.html',
        url:'/form'
    })
      .state('dashboard.blank',{
        templateUrl:'views/pages/blank.html',
        url:'/blank'
    })
      .state('login',{
        templateUrl:'views/pages/login.html',
        url:'/login'
    })
      .state('dashboard.afeform',{
        templateUrl:'views/afebs/main.html',
        url:'/afebudget',
        controller:'AfeCtrl',
        ncyBreadcrumb: {
          label : 'AFE Budget'
        },
        resolve: {
          loadMyFile:function($ocLazyLoad) {
            return $ocLazyLoad.load({
                name : 'sbAdminApp',
                files:['scripts/controllers/afeController.js']
            })
          }
        }
    })
      .state('dashboard.newafeform',{
        templateUrl:'views/form/afebudget.html',
        url:'/createafebudget',
        controller:'NewAfeCtrl',
        ncyBreadcrumb: {
          label : 'Create AFE Budget',parent: 'dashboard.afeform'
        },
        resolve: {
          loadMyFile:function($ocLazyLoad) {
            return $ocLazyLoad.load({
                name : 'sbAdminApp',
                files:['scripts/controllers/newafeController.js']
            })
          }
        }
    })
      .state('dashboard.pscform',{
        templateUrl:'views/contract/main.html',
        url:'/pscform',
        controller:'PscCtrl',
        ncyBreadcrumb: {
          label: 'Production Sharing Contract'
        },
        resolve: {
          loadMyFile:function($ocLazyLoad) {
            return $ocLazyLoad.load({
                name : 'sbAdminApp',
                files:['scripts/controllers/pscController.js']
            })
          }
        }
    })
      .state('dashboard.projectplanning',{
        templateUrl:'views/contract/projectplan.html',
        url:'/projectplanning/:contractid',
        controller:'ProjectPlanningCtrl',
        ncyBreadcrumb: {
          label: 'Plan of Development',
          parent: 'dashboard.pscform'
        },
        resolve: {
          loadMyFile:function($ocLazyLoad) {
            return $ocLazyLoad.load({
                name : 'sbAdminApp',
                files:['scripts/controllers/projectPlanController.js']
            })
          }
        }
      })
      .state('dashboard.projectdetail',{
        templateUrl:'views/contract/projectdetail.html',
        url:'/projectdetail/:contractid',
        controller:'ProjectDetailCtrl',
        ncyBreadcrumb: {
          label: 'Detail',
          parent: 'dashboard.projectplanning'
        },
        resolve: {
          loadMyFile:function($ocLazyLoad) {
            return $ocLazyLoad.load({
                name : 'sbAdminApp',
                files:['scripts/controllers/projectDetailController.js']
            })
          }
        }
      })
       .state('dashboard.wpnb',{
        templateUrl:'views/wpnb/main.html',
        url:'/wpnb',
        controller:'WpnbCtrl',
        resolve:{
          loadMyFile:function($ocLazyLoad) {
            return $ocLazyLoad.load({
                name : 'sbAdminApp',
                files:['scripts/controllers/wpnbController.js']
            })
          }
        },
        ncyBreadcrumb:{
          label:'List All Budget'
        }
      })
       .state('dashboard.budgetform',{
        templateUrl:'views/wpnb/opexbudget.html',
        url:'/createbudget/?productId&budgetTypeId&period',
        controller:'OpexCtrl',
        ncyBreadcrumb: {
          label: 'Create Budget'
        },
        resolve: {
          loadMyFile:function($ocLazyLoad) {
            return $ocLazyLoad.load({
                name : 'sbAdminApp',
                files:['scripts/controllers/opexController.js']
            })
          }
        }
    })
       .state('dashboard.wpnb.budgetprojectform',{
        templateUrl:'views/wpnb/projectexbudget.html',
        url:'/createprojectbudget/?productId&budgetTypeId&period',
        controller:'ProjectexCtrl',
        ncyBreadcrumb: {
          label: 'Create Budget For Project'
        },
        resolve: {
          loadMyFile:function($ocLazyLoad) {
            return $ocLazyLoad.load({
                name : 'sbAdminApp',
                files:[
                'scripts/controllers/projectExController.js'
                ]
            })
          }
        }
    })
       .state('dashboard.prewpnb',{
        templateUrl:'views/prewpnb/main.html',
        url:'/prewpnb',
        controller:'PrewpnbCtrl',
        resolve:{
          loadMyFile:function($ocLazyLoad) {
            return $ocLazyLoad.load({
                name : 'sbAdminApp',
                files:['scripts/controllers/prewpnbController.js']
            })
          }
        },
        ncyBreadcrumb:{
          label:'List All Pre WP&B'
        }
      })
      .state('dashboard.wpnbapproval',{
        templateUrl:'views/wpnbapproval/main.html',
        url:'/wpnbreporting',
        controller:'ReportWpnbCtrl',
        resolve:{
          loadMyFile:function($ocLazyLoad) {
            return $ocLazyLoad.load({
                name : 'sbAdminApp',
                files:['scripts/controllers/reportwpnbController.js']
            })
          }
        },
        ncyBreadcrumb:{
          label:'List All PreApproved WP&B'
        }
      })
      .state('dashboard.wpnbapproval.statusform',{
        templateUrl:'views/wpnbapproval/statusproses.html',
        url:'/wpnbapproval/proses',
        controller:'ReportWpnbCtrl',
        resolve:{
          loadMyFile:function($ocLazyLoad) {
            return $ocLazyLoad.load({
                name : 'sbAdminApp',
                files:['scripts/controllers/reportwpnbController.js']
            })
          }
        },
        ncyBreadcrumb:{
          label:'Update Status Pre WP&B'
        }
      })
      .state('dashboard.prewpnb.statusform',{
        templateUrl:'views/prewpnb/statusproses.html',
        url:'/prewpnb/proses',
        controller:'PrewpnbCtrl',
        resolve:{
          loadMyFile:function($ocLazyLoad) {
            return $ocLazyLoad.load({
                name : 'sbAdminApp',
                files:['scripts/controllers/prewpnbController.js']
            })
          }
        },
        ncyBreadcrumb:{
          label:'Update Status Pre WP&B'
        }
      })
      .state('dashboard.wpnbviewer',{
        templateUrl:'views/wpnbapproval/bsviewer.html',
        url:'/wpnb/viewer',
        controller:'BsviewerCtrl',
        resolve:{
          loadMyFile:function($ocLazyLoad) {
            return $ocLazyLoad.load({
                name : 'sbAdminApp',
                files:['scripts/controllers/bsviewerController.js']
            })
          }
        },
        ncyBreadcrumb:{
          label:'Budget Schedule Viewer'
        }
      })
       .state('dashboard.prewpnblanding',{
        templateUrl:'views/prewpnb/landingpage.html',
        url:'/prewpnbpage',
        controller:'PrewpnbpageCtrl',
        resolve:{
          loadMyFile:function($ocLazyLoad) {
            return $ocLazyLoad.load({
                name : 'sbAdminApp',
                files:['scripts/controllers/prewpnbpageController.js']
            })
          }
        },
        ncyBreadcrumb:{
          label:'Pre WP&B Landing Page',
          parent: 'dashboard.prewpnb'

        }
      })
       .state('dashboard.template',{
        templateUrl:'views/wpnb/form.html',
        url:'/wpnbform',
        controller:'WpnbTemplateCtrl',
        resolve:{
          loadMyFile:function($ocLazyLoad) {
            return $ocLazyLoad.load({
                name : 'sbAdminApp',
                files:['scripts/controllers/wpnbTemplateController.js']
            })
          }
        },
        ncyBreadcrumb:{
          label:'WPnB Template'
        }
      })
      .state('dashboard.drillingbudget',{
        templateUrl:'views/form/drillingbudget.html',
        url:'/drillingform',
        controller:'DrillingBudgetCtrl',
        resolve:{
          loadMyFile:function($ocLazyLoad) {
            return $ocLazyLoad.load({
                name : 'sbAdminApp',
                files:['scripts/controllers/drillingBudgetController.js']
            })
          }
        },
        ncyBreadcrumb:{
          label:'Detail Drilling Budget'
        }
      })
      .state('dashboard.surveybudget',{
        templateUrl:'views/form/surveybudget.html',
        url:'/surveyform',
        controller:'SurveyBudgetCtrl',
        resolve:{
          loadMyFile:function($ocLazyLoad) {
            return $ocLazyLoad.load({
                name : 'sbAdminApp',
                files:['scripts/controllers/surveyBudgetController.js']
            })
          }
        },
        ncyBreadcrumb:{
          label:'Detail Survey/Study Budget'
        }
      })
  }]);

    
