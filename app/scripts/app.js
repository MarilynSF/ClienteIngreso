'use strict';

/**
 * @ngdoc overview
 * @name ingresosApp
 * @description
 * # ingresosApp
 *
 * Main module of the application.
 */
angular
  .module('ingresosApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'afOAuth2',
    'treeControl',
    'ngMaterial',
    'ui.grid',
    'ui.grid.edit',
    'ui.grid.rowEdit',
    'ui.grid.cellNav',
    'ui.grid.treeView',
    'ui.grid.selection',
    'ui.grid.exporter',
    'ngStorage'
  ])
    .config(['$locationProvider','$routeProvider', function($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix("");
      $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/create_ingreso', {
        templateUrl: 'views/create_ingreso.html',
        controller: 'CreateIngresoCtrl',
        controllerAs: 'createIngreso'
      })
      .when('/view_ingreso', {
        templateUrl: 'views/view_ingreso.html',
        controller: 'ViewIngresoCtrl',
        controllerAs: 'viewIngreso'
      })
      .when('/edit_ingreso/:Id', {
        templateUrl: 'views/edit_ingreso.html',
        controller: 'EditIngresoCtrl',
        controllerAs: 'editIngreso'
      })
      .when('/estado_ingreso', {
        templateUrl: 'views/estado_ingreso.html',
        controller: 'EstadoIngresoCtrl',
        controllerAs: 'estadoIngreso'
      })
      .when('/aprobado_ingreso', {
        templateUrl: 'views/aprobado_ingreso.html',
        controller: 'AprobadoIngresoCtrl',
        controllerAs: 'aprobadoIngreso'
      })
      .when('/anulado_ingreso', {
        templateUrl: 'views/anulado_ingreso.html',
        controller: 'AnuladoIngresoCtrl',
        controllerAs: 'anuladoIngreso'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
