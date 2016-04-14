'use strict';

/**
 * @ngdoc function
 * @name unicornAdminClientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the unicornAdminClientApp
 */
angular.module('unicornAdminClientApp')
  .controller('MainCtrl', function ($scope, $auth, $state, $log) {
  
  	$scope.current_user = $auth.user;

    var isSign = null;
 

  	$scope.isSignedIn = function() {
      isSign = isSign || $auth.userIsAuthenticated()
  		return isSign;
  	}

    $scope.signOut = function() {
      $auth.signOut()
        .then(function(resp) {
          $log.debug('Logout success', resp);          
          $scope.addAlert({ type: 'success', msg: 'You are successfully Logout.'});
          $scope.current_user = resp;
          $state.go("public.welcome");
        })
        .catch(function(resp) {
          $log.debug('Logout fail', resp);       
          $scope.addAlert({ type: 'danger', msg: resp.errors.join('. ')});
        });
    };
   
    


  	
  	var alerts = [];	  

  	$scope.addAlert = function(alert) {
	    alerts.push(alert);
	  };

	  $scope.closeAlert = function(index) {
	    alerts.splice(index, 1);
	  };

	  $scope.getAlerts = function() {
	    return alerts;
	  };
    
  });
