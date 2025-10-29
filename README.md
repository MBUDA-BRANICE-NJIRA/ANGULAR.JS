# Angular.js Application Setup

## Project Structure
```
ANGULAR.JS/
├── index.html          # Main HTML file with ng-app directive
├── package.json        # Node.js dependencies
├── app
│   ├── app.js         # Main Angular module definition
│   ├── controllers/   # Controller files
│   │   └── mainController.js
│   └── services/      # Service files
│       └── todoService.js
├── content/
│   └── css/
│       └── styles.css # Application styles
└── node_modules/      # Installed dependencies
```

## Key Angular.js Concepts

### 1. **Module** (`app.js`)
- The main container for your application
- Defines dependencies and configuration
- `angular.module('myApp', [])` creates the module

### 2. **Controller** (`mainController.js`)
- Contains the business logic
- Manages data and user interactions
- Uses `$scope` to bind data to the view

### 3. **Directives** (in HTML)
- `ng-app`: Bootstraps the Angular application
- `ng-controller`: Defines which controller manages this part of the view
- `ng-model`: Two-way data binding for form inputs
- `ng-click`: Handles click events
- `ng-repeat`: Loops through arrays/objects
- `{{ }}`: Interpolation for displaying data

### 4. **Service** (`todoService.js`)
- Shared business logic and data
- Singleton pattern - one instance across the app
- Injectable into controllers

## How to Run

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm start
   ```
   This will start a Python HTTP server on port 3000.

   **If you get "Address already in use" error:**
   ```bash
   # Check which ports are available
   npm run check-ports
   
   # Try alternative port
   npm run start:alt    # Uses port 8080
   
   # Kill any process using port 8000 (if needed)
   npm run kill-port
   ```

   **Alternative start options:**
   ```bash
   # For Node.js-based server (install http-server first)
   npm run start:node
   
   # Install http-server globally (one-time setup)
   npm run install-server
   ```

3. **Open in browser:**
   - Primary: `http://localhost:3000`
   - Alternative: `http://localhost:8080` (if using start:alt)
   - Your application will automatically load

## Available Scripts

- `npm start` - Starts Python HTTP server on port 3000
- `npm run start:alt` - Starts Python HTTP server on port 8080 (backup)
- `npm run start:node` - Starts Node.js HTTP server with auto-open browser
- `npm run check-ports` - Check which ports are available
- `npm run kill-port` - Kill any process using port 8000
- `npm run install-server` - Installs http-server globally for Node.js option

## Troubleshooting

### "Address already in use" Error
This happens when another process is using the same port. Solutions:

1. **Use different port:** `npm run start:alt` (uses port 8080)
2. **Check what's using ports:** `npm run check-ports`
3. **Kill conflicting process:** `npm run kill-port`
4. **Use Node.js server:** `npm run start:node`

## What's Working Now

✅ **Two-way Data Binding**: Type in the input, data updates automatically
✅ **Event Handling**: Click buttons to add/remove todos
✅ **Template Interpolation**: `{{ }}` displays dynamic data
✅ **Directives**: ng-repeat, ng-click, ng-model working
✅ **MVC Pattern**: Model (data), View (HTML), Controller (logic)

## Next Steps to Learn

1. **Routing**: Navigate between different views
2. **HTTP Requests**: Connect to APIs using `$http`
3. **Filters**: Format and filter data in templates
4. **Custom Directives**: Create reusable components
5. **Form Validation**: Validate user input
6. **Dependency Injection**: Understand Angular's DI system

## Angular.js vs Modern Angular

**Angular.js (1.x) - What you're using:**
- JavaScript-based
- Uses $scope for data binding
- Simpler setup, no build process required
- Good for learning MVC concepts

**Angular (2+) - Modern version:**
- TypeScript-based
- Component architecture
- Requires build tools (CLI, Webpack)
- More complex but more powerful

Your current setup is perfect for learning the fundamentals!