'use strict';

/**
 * @ngdoc function
 * @name unicornAdminClientApp.controller:CategoriesCtrl
 * @description
 * # CategoriesCtrl
 * Controller of the unicornAdminClientApp
 */
angular.module('unicornAdminClientApp')
  .controller('CategoriesCtrl', function (categoriesResource, $log) {
    var ctrl = this;


    ctrl.list = function () {

      categoriesResource.query().$promise.then(function (data) {
        ctrl.data = data.categories;
      });
    };

    ctrl.delete = function (category) {
      categoriesResource.delete({id: category.id}, {}, function (res) {
        $log.debug('Category deleted', res)
        ctrl.list();
      });
    };

    ctrl.list();
  });
