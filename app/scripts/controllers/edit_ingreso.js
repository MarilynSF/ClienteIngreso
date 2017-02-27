'use strict';

/**
 * @ngdoc function
 * @name ingresosApp.controller:EditIngresoCtrl
 * @description
 * # EditIngresoCtrl
 * Controller of the ingresosApp
 */
angular.module('ingresosApp')
  .controller('EditIngresoCtrl', function(serviceIngreso, $scope, $location, $routeParams) {

    serviceIngreso.get("ingreso", $.param({
      query: "Id:" + $routeParams.Id
    })).then(function(response) {
      $scope.ingreso = response.data[0];
      $scope.FechaConsignacion = new Date($scope.ingreso.FechaConsignacion);
      $scope.FechaIngreso = new Date($scope.ingreso.FechaIngreso);
      serviceIngreso.get("cuenta_bancaria", "").then(function(response) {
        $scope.entidades = response.data;
      });

      serviceIngreso.get("forma_ingreso", "").then(function(response) {
        $scope.forma_ingreso = response.data;
      });

      serviceIngreso.get("ingreso_rubro", "").then(function(response) {
        $scope.rubros = response.data;
      });

      serviceIngreso.get("concepto", "").then(function(response) {
        $scope.conceptos = response.data;
      });

      serviceIngreso.get("informacion_persona_natural", "").then(function(response) {
        $scope.informacion_persona_natural = response.data;
      });

      console.log(response);
      console.log($scope.ingreso);


    });

    console.log("aqui estoy");

    $scope.edit_ingreso = function(ingreso) {
      serviceIngreso.put("ingreso", ingreso.Id, ingreso).then(function(response) {
        alert("Se modifico");
        console.log(ingreso);
        $location.path("view_ingreso");


      });

      console.log($scope.edit_ingreso);
    }
  });
