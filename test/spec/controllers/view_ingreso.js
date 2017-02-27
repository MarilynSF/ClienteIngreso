'use strict';

describe('Controller: ViewIngresoCtrl', function () {

  // load the controller's module
  beforeEach(module('ingresosApp'));

  var ViewIngresoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ViewIngresoCtrl = $controller('ViewIngresoCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ViewIngresoCtrl.awesomeThings.length).toBe(3);
  });
});
