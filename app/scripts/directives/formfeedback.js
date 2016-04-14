'use strict';

/**
 * @ngdoc directive
 * @name unicornAdminClientApp.directive:formFeedback
 * @description
 * # formFeedback
 */
angular.module('unicornAdminClientApp')
  .directive('formFeedback', function () {
    return {
      template: 
      	'<span class="glyphicon form-control-feedback"' +
       		'ng-class="getFeedbackClass()"aria-hidden="true"></span>',
      restrict: 'A',
      scope: {
			 	hasClass: "@hasClass"
			},
      link: function postLink(scope, element, attrs) {      	
      	scope.getFeedbackClass = function () {
      		if (scope.hasClass == 'has-success') {
      			return 'glyphicon-ok ';
      		}
      	}
      }
    };
  });
