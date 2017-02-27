'use strict';

describe('Controller: AprobadoIngresoCtrl', function () {

  // load the controller's module
  beforeEach(module('ingresosApp'));

  var AprobadoIngresoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AprobadoIngresoCtrl = $controller('AprobadoIngresoCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AprobadoIngresoCtrl.awesomeThings.length).toBe(3);
  });
});
