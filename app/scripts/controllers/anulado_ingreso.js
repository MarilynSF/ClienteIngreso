'use strict';

/**
 * @ngdoc function
 * @name ingresosApp.controller:AnuladoIngresoCtrl
 * @description
 * # AnuladoIngresoCtrl
 * Controller of the ingresosApp
 */
angular.module('ingresosApp')
  .controller('AnuladoIngresoCtrl', function(serviceIngreso, $scope) {
    $scope.ingresos = [];
    serviceIngreso.get("ingreso", $.param({
      limit: 0,
      query: "EstadoActa:Anulado"
    })).then(function(response) {
      $scope.gridOptions.data = response.data;
      console.log($scope.ingresos)
    });

    $scope.gridOptions = {
      enableRowSelection: true,
      enableSelectAll: true,
      enableFiltering: true,
      enableSorting: true,
      columnDefs: [{
          name: 'Consecutivo',
          field: 'Consecutivo',
          enableHiding: false
        },
        {
          name: 'EstadoActa',
          field: 'EstadoActa',
          enableHiding: false
        },
        {
          name: 'Vigencia',
          field: 'Vigencia',
          enableHiding: false
        },
        {
          name: 'FechaIngreso',
          field: 'FechaIngreso',
          cellFilter: 'date:\'dd-MM-yyyy\'',
          enableHiding: false
        },
        {
          name: 'FechaConsignación',
          field: 'FechaConsignacion',
          cellFilter: 'date:\'dd-MM-yyyy\'',
          enableHiding: false
        },
        {
          name: 'Observaciones',
          field: 'Observaciones',
          enableHiding: false
        },
        {
          name: 'Concepto',
          field: 'Concepto.Codigo',
          enableHiding: false
        },
        {
          name: 'Valor',
          field: 'Valor',
          enableHiding: false
        },
      ],



    };
    $scope.gridOptions.onRegisterApi = function(gridApi) {
      $scope.gridApi = gridApi;
    };



    $scope.selectAll = function() {
      $scope.gridApi.selection.selectAllRows();
    };

    $scope.clearAll = function() {
      $scope.gridApi.selection.clearSelectedRows();
    };
  });
