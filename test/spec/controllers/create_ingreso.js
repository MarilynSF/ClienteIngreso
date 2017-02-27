'use strict';

describe('Controller: CreateIngresoCtrl', function () {

  // load the controller's module
  beforeEach(module('ingresosApp'));

  var CreateIngresoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CreateIngresoCtrl = $controller('CreateIngresoCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CreateIngresoCtrl.awesomeThings.length).toBe(3);
  });
});
