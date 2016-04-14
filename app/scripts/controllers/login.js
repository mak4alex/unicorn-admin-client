'use strict';

/**
 * @ngdoc function
 * @name unicornAdminClientApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the unicornAdminClientApp
 */
angular.module('unicornAdminClientApp')
  .controller('LoginCtrl', function ($scope, $auth, $location, $log) {
    
    $scope.submitLogin = function(loginForm) {
      $auth.submitLogin(loginForm)
        .then(function(resp) {          
          $log.debug('Login success', resp);          
          $scope.addAlert({ type: 'success', msg: 'You are successfully Login.'});
          $scope.current_user = resp;
          $location.path("/shop");
        })
        .catch(function(resp) {
          $log.debug('Login fail', resp);       
          $scope.addAlert({ type: 'danger', msg: resp.errors.join('. ')});
        });
    };    

  });
