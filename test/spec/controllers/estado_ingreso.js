'use strict';

describe('Controller: EstadoIngresoCtrl', function () {

  // load the controller's module
  beforeEach(module('ingresosApp'));

  var EstadoIngresoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EstadoIngresoCtrl = $controller('EstadoIngresoCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(EstadoIngresoCtrl.awesomeThings.length).toBe(3);
  });
});
