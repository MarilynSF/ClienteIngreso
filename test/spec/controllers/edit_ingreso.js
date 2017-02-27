'use strict';

describe('Controller: EditIngresoCtrl', function () {

  // load the controller's module
  beforeEach(module('ingresosApp'));

  var EditIngresoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EditIngresoCtrl = $controller('EditIngresoCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(EditIngresoCtrl.awesomeThings.length).toBe(3);
  });
});
