// Home page controller - the "brain" for the home page
angular.module('myApp').controller('HomeController', ['$scope', '$location', 'DataService', function($scope, $location, DataService) {
    
    // Get data from the shared service (water tank)
    $scope.appInfo = DataService.getAppInfo();
    $scope.userStats = DataService.getUserStats();
    
    // Application title (from service)
    $scope.appTitle = $scope.appInfo.name;
    
    // Welcome message
    $scope.message = 'This is your first Angular.js application with routing and shared data!';
    
    // Todo list data
    $scope.todos = [
        { text: 'Learn Angular.js basics' },
        { text: 'Build a simple app' },
        { text: 'Understand MVC pattern' },
        { text: 'Learn routing concepts' }
    ];
    
    // New todo input model
    $scope.newTodo = '';
    
    // Function to add a new todo
    $scope.addTodo = function() {
        if ($scope.newTodo.trim() !== '') {
            $scope.todos.push({ text: $scope.newTodo });
            $scope.newTodo = ''; // Clear input
            
            // Update statistics in the shared service
            DataService.incrementTodosCreated();
        }
    };
    
    // Function to remove a todo
    $scope.removeTodo = function(index) {
        $scope.todos.splice(index, 1);
        
        // Update statistics in the shared service
        DataService.incrementTodosCompleted();
    };
    
    // Function to navigate to about page
    $scope.goToAbout = function() {
        DataService.incrementPagesVisited();  // Track page visit
        $location.path('/about');  // This changes the URL to #/about
    };
    
    // Track when this page loads
    DataService.incrementPagesVisited();
    
}]);