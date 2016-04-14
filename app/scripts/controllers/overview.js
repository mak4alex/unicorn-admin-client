'use strict';

/**
 * @ngdoc function
 * @name unicornAdminClientApp.controller:OverviewCtrl
 * @description
 * # OverviewCtrl
 * Controller of the unicornAdminClientApp
 */
angular.module('unicornAdminClientApp')
  .controller('OverviewCtrl', function ($scope, $log) {
    var ctrl = this;

    $log.debug('Test resolve', $scope.auth);

  });
