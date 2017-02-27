'use strict';

/**
 * @ngdoc function
 * @name ingresosApp.controller:CreateIngresoCtrl
 * @description
 * # CreateIngresoCtrl
 * Controller of the ingresosApp
 */
angular.module('ingresosApp')
  .controller('CreateIngresoCtrl', function (serviceIngreso, $scope, $location,$routeParams) {
    //  serviceIngreso.get("ingreso",$.param({
  //  query:"Id:"+$routeParams.Id
//    })).then(function(response){
//    $scope.ingreso=response.data[0];
    //NOconsole.log(response);
  //  console.log("aqui estoy");
    //NONavigator.goTo('create_ingreso',response.data[0]);

//  });
  serviceIngreso.get("cuenta_bancaria","").then(function(response){
    $scope.entidades = response.data;
    });

    serviceIngreso.get("forma_ingreso","").then(function(response){
    $scope.forma_ingreso = response.data;
    });

    serviceIngreso.get("ingreso_rubro","").then(function(response){
      $scope.rubros = response.data;
      console.log($scope.rubros);
    });

    serviceIngreso.get("concepto","").then(function(response){
      $scope.conceptos = response.data;
    });

    serviceIngreso.get("informacion_persona_natural","").then(function(response){
      $scope.informacion_persona_natural = response.data;
    });

    $scope.crear_ingreso = function(ingreso){

      //$scope.FechaConsignacion = $scope.FechaConsignacion;
    //  console.log("Fecha antes de ser formateada: " + $scope.FechaIngreso);
      //var fecha = new Date($scope.ingreso.FechaIngreso);
      //$scope.FechaIngreso = $scope.FechaIngreso;
      //$scope.FechaIngreso = fecha;
      console.log("Fecha ingreso:  " + $scope.FechaIngreso);
      console.log("Fecha consignacion:  " + $scope.FechaConsignacion);

      ingreso.Valor = parseFloat(ingreso.Valor);
      ingreso.Consecutivo = parseFloat(ingreso.Consecutivo);
      ingreso.Vigencia = parseFloat(ingreso.Vigencia);
      ingreso.Id = parseInt(ingreso.Id);
      ingreso.FechaIngreso=$scope.FechaIngreso;
      ingreso.FechaConsignacion=$scope.FechaConsignacion;

      serviceIngreso.post("ingreso",ingreso).then(function(response){

        alert("Guardado");
        console.log(response.data);
        $location.path("view_ingreso");
      });

      console.log(ingreso);
    }
  });
