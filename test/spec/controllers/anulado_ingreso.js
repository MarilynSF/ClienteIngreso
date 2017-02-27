'use strict';

describe('Controller: AnuladoIngresoCtrl', function () {

  // load the controller's module
  beforeEach(module('ingresosApp'));

  var AnuladoIngresoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AnuladoIngresoCtrl = $controller('AnuladoIngresoCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AnuladoIngresoCtrl.awesomeThings.length).toBe(3);
  });
});
