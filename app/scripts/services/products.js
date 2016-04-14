'use strict';

/**
 * @ngdoc service
 * @name unicornAdminClientApp.products
 * @description
 * # products
 * Factory in the unicornAdminClientApp.
 */
angular.module('unicornAdminClientApp')
  .factory('products', function ($resource, apiBaseUrl) {
    
    return $resource(
      apiBaseUrl + '/products/:id',
      { id: '@id' },
      {
        create: { method: 'POST' },
        save:   { method: 'PUT' },
        query:  { method:'GET', isArray: false },
        delete: { method:'DELETE'}
      }
    );
  
  });
