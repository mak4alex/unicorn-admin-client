'use strict';

/**
 * @ngdoc overview
 * @name unicornAdminClientApp
 * @description
 * # unicornAdminClientApp
 *
 * Main module of the application.
 */
angular
  .module('unicornAdminClientApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ng-token-auth',
    'ui.bootstrap',
    'ui.router'
  ])
  .config(function ($stateProvider, $httpProvider, $authProvider, apiBaseUrl) {

    $stateProvider
      .state('public', {
        abstract: true,
        template: '<ui-view/>',
        onEnter: function($auth, $timeout, $state) { 
          if($auth.userIsAuthenticated()) {
            $timeout(function(){
              $state.go('admin.shop');
            });            
          }
        } 
      })
      .state('public.welcome', {
        url: '/',
        templateUrl: 'views/welcome.html',
        controller: 'WelcomeCtrl'               
      })       
      .state('public.login', {
        url: '/login',
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })     
      .state('admin', {
        abstract: true,
        template: '<ui-view/>',
        resolve: {
          auth: function($auth) {            
            return $auth.validateUser();
          }
        }
      })   
      .state('admin.shop', {
        url: '/shop',
        templateUrl: 'views/shop.html',
        controller: 'ShopCtrl'
      })  
      .state('admin.categories', {
        url: '/categories',
        templateUrl: 'views/categories.html',
        controller: 'ShopCtrl'
      })     
      .state('admin.products', {
        url: '/products',
        templateUrl: 'views/products/index.html',
        controller: 'ProductsCtrl'
      })
      .state('admin.newproduct', {
        url: '/products/new',
        templateUrl: 'views/products/new.html',
        controller: 'ProductsNewCtrl'
      })
      .state('admin.profile', {
        url: '/profile',
        templateUrl: 'views/profile.html',
        controller: 'ProfileCtrl' 
      })
      .state("public.otherwise", {
        url: "*path",
        templateUrl: 'views/welcome.html',
        controller: 'WelcomeCtrl'      
      });


    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];

    $authProvider.configure({
      apiUrl:                  apiBaseUrl,
      tokenValidationPath:     '/admin/validate_token',
      signOutUrl:              '/admin/sign_out',
      emailSignInPath:         '/admin/sign_in',
    });


  });
