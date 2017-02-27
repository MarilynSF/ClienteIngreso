'use strict';

describe('Service: serviceIngreso', function () {

  // load the service's module
  beforeEach(module('ingresosApp'));

  // instantiate service
  var serviceIngreso;
  beforeEach(inject(function (_serviceIngreso_) {
    serviceIngreso = _serviceIngreso_;
  }));

  it('should do something', function () {
    expect(!!serviceIngreso).toBe(true);
  });

});
