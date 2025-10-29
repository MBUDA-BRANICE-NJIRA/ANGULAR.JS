// About page controller - the "brain" for the about page
angular.module('myApp').controller('AboutController', ['$scope', '$location', 'DataService', function($scope, $location, DataService) {
    
    // Get shared data from the service (water tank)
    $scope.appInfo = DataService.getAppInfo();
    $scope.userStats = DataService.getUserStats();
    
    // Data that will be shown on the about page
    $scope.appName = $scope.appInfo.name;
    $scope.description = 'This is a simple Angular.js application that demonstrates routing, data binding, shared services, and controllers.';
    
    // List of features (this will be repeated in the HTML using ng-repeat)
    $scope.features = [
        'Two-way data binding',
        'Routing between pages', 
        'Interactive todo list',
        'Shared data services',
        'Clean MVC architecture',
        'Responsive design'
    ];
    
    // Contact information object
    $scope.contact = {
        email: 'developer@example.com',
        phone: '(555) 123-4567'
    };
    
    // Function to navigate back to home page
    $scope.goHome = function() {
        DataService.incrementPagesVisited();  // Track page visit
        $location.path('/');  // This changes the URL to #/ (home)
    };
    
    // Track when this page loads
    DataService.incrementPagesVisited();
    
}]);