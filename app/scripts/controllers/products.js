'use strict';

/**
 * @ngdoc function
 * @name unicornAdminClientApp.controller:ProductsCtrl
 * @description
 * # ProductsCtrl
 * Controller of the unicornAdminClientApp
 */
angular.module('unicornAdminClientApp')
  .controller('ProductsCtrl', function ($scope, products) {
    
    $scope.listProducts = function() {
    	var params = {
	    	page: $scope.currentPage,
	    	per_page: $scope.itemsPerPage,
	    	query: $scope.query.trim(),
	    	sort: $scope.orderField + ' ' + $scope.orderDirection
	    };
    	products.query(params, function(data) {
    		console.log(data);

    		$scope.products = data.products;
    		$scope.totalItems = data.meta.pagination.total_objects;
    	})
    }

    $scope.fields = ['id', 'title', 'price', 'weight'];

		$scope.orderField = 'id';
    $scope.orderDirection = 'ASC';  
    $scope.query = '';  
	  $scope.itemsPerPage = 10;
   

    $scope.pageChanged = function() {
	    console.log('Page changed to: ' + $scope.currentPage);
	    $scope.listProducts(); 
	  };	 

    $scope.listProducts();

  })
  .controller('ProductsNewCtrl', function ($scope, products, categories) {  	

  	$scope.createProduct = function (newProduct) {
  		console.log('createProduct', newProduct);
  	};

  	$scope.checkUniqTitle = function (title) {
  		var value = title.$viewValue.trim();  		
  		if (value.length > 0) {
  			products.query({ title: value }, function(res) {
  				console.log(angular.isDefined(res.products) && res.products.length != 0);
  				if (angular.isDefined(res.products) && res.products.length != 0) {
	  				title.$error.unique = false;
  				} else {
  					delete title.$error.unique;
  				}
	  		});
  		}  		
  	};

  	$scope.topCategories = [];
  	categories.query({ top: '' }, function(res) {
  			$scope.topCategories = res.categories;
  	});

  	$scope.subCategories = [];
  	$scope.getSubCategories = function(topCategory) {
  		categories.query({ parent: topCategory }, function(res) {
  			$scope.subCategories = res.categories;
  		})
  	};

  	$scope.getValidatedClass = function (filed) {
			if (filed.$dirty) {
				return filed.$valid ? 'has-success' : 'has-error';
			} else {
				return 'has-warning';
			}
  	};

  	$scope.getFeedbackClass = function (filed) {  		
  		if (filed.$dirty) {
				return filed.$valid ? 'glyphicon-ok' : 'glyphicon-remove';
			} else {
				return 'glyphicon-warning-sign';
			}  		
  	};  	   
    

  });
