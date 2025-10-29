// Shared Data Service - Like a Water Tank 🚰
// This stores data that can be used by ANY controller
angular.module('myApp').service('DataService', function() {
    
    // Private data (like water in the tank)
    var sharedData = {
        appInfo: {
            name: 'My Angular.js App',
            version: '1.0.0',
            author: 'You!'
        },
        userStats: {
            todosCreated: 0,
            todosCompleted: 0,
            pagesVisited: 0
        }
    };
    
    // Public methods (like taps to get water from the tank)
    
    // Get app information
    this.getAppInfo = function() {
        return sharedData.appInfo;
    };
    
    // Get user statistics
    this.getUserStats = function() {
        return sharedData.userStats;
    };
    
    // Update statistics when user does something
    this.incrementTodosCreated = function() {
        sharedData.userStats.todosCreated++;
    };
    
    this.incrementTodosCompleted = function() {
        sharedData.userStats.todosCompleted++;
    };
    
    this.incrementPagesVisited = function() {
        sharedData.userStats.pagesVisited++;
    };
    
    // Update app info
    this.updateAppInfo = function(newInfo) {
        angular.extend(sharedData.appInfo, newInfo);
    };
    
});