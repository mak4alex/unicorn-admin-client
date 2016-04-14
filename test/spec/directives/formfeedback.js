'use strict';

describe('Directive: formFeedback', function () {

  // load the directive's module
  beforeEach(module('unicornAdminClientApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<form-feedback></form-feedback>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the formFeedback directive');
  }));
});
