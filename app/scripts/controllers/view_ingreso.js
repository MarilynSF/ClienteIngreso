'use strict';

/**
 * @ngdoc function
 * @name ingresosApp.controller:ViewIngresoCtrl
 * @description
 * # ViewIngresoCtrl
 * Controller of the ingresosApp
 */
angular.module('ingresosApp')
  .controller('ViewIngresoCtrl', function (serviceIngreso,$scope,$location) {
    $scope.ingresos =[];
    serviceIngreso.get("ingreso",$.param({limit:0})).then(function(response){
    $scope.gridOptions.data=response.data;
    console.log($scope.ingresos)
  });

  $scope.gridOptions = {
          enableFiltering: true,
          enableSorting: true,
          columnDefs: [
            { name:'Consecutivo', field: 'Consecutivo', enableHiding: false},
            { name:'EstadoActa', field: 'EstadoActa', enableHiding: false},
            { name:'Vigencia', field: 'Vigencia', enableHiding: false},
            { name:'FechaIngreso', field: 'FechaIngreso', cellFilter: 'date:\'dd-MM-yyyy\'', enableHiding: false},
            { name:'FechaConsignación', field: 'FechaConsignacion', cellFilter: 'date:\'dd-MM-yyyy\'', enableHiding: false},
            { name:'Observaciones', field: 'Observaciones', enableHiding: false},
            { name:'Concepto', field: 'Concepto.Codigo', enableHiding: false},
            { name:'Rubro', field: 'Concepto.Rubro', enableHiding: false},
            { name:'Valor', field: 'Valor', enableHiding: false},
            { field: 'Ver',
            cellTemplate: '<center><button class="btn btn-success btn-circle" ng-click="grid.appScope.ver_ingreso(row.entity.Id)"><i class="fa fa-eye"></i></center>', enableFiltering: false, enableHiding: false}
          //  { field: 'Eliminar',
          //  cellTemplate: '<center><button type="button" class="btn btn-danger btn-circle" ng-click="grid.appScope.delete_ingreso(row.entity.Id)"><i class="fa fa-trash-o"></i></button></center>', enableFiltering: false, enableHiding: false}

          ],

        };




        $scope.delete_ingreso = function(id){
          alert("esta seguro")//PENDIENTE CONFIGURACIÓN DE VENTANA EMERGENTE!!!!
          serviceIngreso.delete("ingreso",id).then(function(response){
              $scope.gridOptions.data=response.data;
            console.log(response);
          });

          console.log($scope.delete_ingreso);
        }



        $scope.ver_ingreso = function(id){
          $location.path("edit_ingreso/"+id);
          console.log("VACIO!!")
          console.log($scope.edit_ingreso);
        }

        //funcion para crear un nuevo ingreso
        $scope.crear_ingreso = function(){
          $location.path("create_ingreso");
        }


  /*      $scope.edit_ingreso = function(id){
          serviceIngreso.put("ingreso",id, "").then(function(response){
            $scope.gridOptions.data=response.data;
            console.log(response);
            $location.path("create_ingreso");
          });

          console.log($scope.edit_ingreso);
        }*/

  });
