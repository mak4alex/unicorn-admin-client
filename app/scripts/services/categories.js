'use strict';

/**
 * @ngdoc service
 * @name unicornAdminClientApp.categories
 * @description
 * # categories
 * Factory in the unicornAdminClientApp.
 */
angular.module('unicornAdminClientApp')
  .factory('categories', function ($resource, apiBaseUrl) {

    return $resource(
      apiBaseUrl + '/categories/:id',
      {
        id: '@id'
      },
      {
        create: { method: 'POST' },
        save: { method: 'PUT' },
        query: { method:'GET', isArray: false },
        delete: { method:'DELETE'}
      });

  });

