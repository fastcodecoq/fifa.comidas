'use strict';

angular.module('FIFA', ['ngRoute','ngAnimate','FIFA.controllers'])
	.config(['$routeProvider', function($routeProvider) {
	  $routeProvider.when('/', {
	  	templateUrl: 'views/inicio.html', 
	  	controller: ''
	  });
	  $routeProvider.when('/Menus', {
	  	templateUrl: 'views/menus.html', 
	  	controller: ''
	  });
	  $routeProvider.when('/Restaurantes', {
	  	templateUrl: 'views/restaurantes.html', 
	  	controller: ''
	  });
	  $routeProvider.when('/Novedades', {
	  	templateUrl: 'views/novedades.html', 
	  	controller: ''
	  });
	  $routeProvider.when('/Promociones', {
	  	templateUrl: 'views/promociones.html', 
	  	controller: ''
	  });
	  $routeProvider.when('/Domicilio', {
	  	templateUrl: 'views/domicilio.html', 
	  	controller: ''
	  });
	  $routeProvider.when('/Eventos', {
	  	templateUrl: 'views/eventos.html', 
	  	controller: ''
	  });
	  $routeProvider.otherwise({redirectTo: '/'});
	}]);