// Main Angular.js application module with routing
angular.module('myApp', ['ngRoute'])

// Configure the routes (like creating a map of your website)
.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        // When user visits #/ (home page)
        .when('/', {
            templateUrl: 'app/views/home.html',     // Show this HTML file
            controller: 'HomeController'           // Use this controller (brain)
        })
        // When user visits #/about (about page)  
        .when('/about', {
            templateUrl: 'app/views/about.html',   // Show this HTML file
            controller: 'AboutController'          // Use this controller (brain)
        })
        // If user visits any other URL, redirect to home
        .otherwise({
            redirectTo: '/'
        });
}]);

// This sets up:
// 1. The main app module with routing capability (ngRoute)
// 2. A map of URLs to HTML templates and controllers
// 3. A fallback route if someone visits a non-existent page