# reacttrainingforcts

    Setup
        Visual Studio Code
        NodeJS: node --version
        npm install -g http-server

    Basic JS
        Losely typed language
        Not Pure OO language. Direct objects with classes
        Function are also first class objects
        DOM manipulation
        Bind function
        Async
        Callback vs Promises: Promises are better substitutes to callbacks, they don't expose your functionlity. Also you can chain up your actions using the then statements.

    JQuery vs Javascript
    
    First React
        Steps:
            1. Create a class in React
            2. Create an object from class
            3. Render the object on the DOM
        No JS, JSX
            Transcompiler: Babel - Takes the JSX source code and transpile to JS
            * class="" --> className = ""
        Props vs States
            Properties are things that flow into the component
            States are things that are possesed by the component

    React vs Jquery

    Automate the trans-compilation
        Gulp - Streaming build system : seq of tasks
        Transcompile task - 
            - read the src file with .jsx extensions
            - transcompile using babel
            - concat into one file
            - put into build folder
            <!-- gulp.src('./src/**/*.jsx')
            .pipe(babel())
            .pipe(concat('bundle.js'))
            .pipe(gulp.dest('./build')) -->

        Better build system
        ES6 version for JS -> Class syntax, constructors, methods and fields

    NodeJS
        Npm - Node Package Manager 
        npm init : create a configuration file  - package.json
        npm install --options <package_name> : npm install --save-dev babel-cli
        npm install - install packages mentioned in the package.json
    
    NPM packages
        Gulp: Streaming build system, task runner
            Build an front-end: minifiying, compressing images, transcompiling
        Babel: transcompiler/transpile - .babelrc
        Browserfiy: Bundler which can build as specified in a sequence

    Nesting of components
        child access parent functionalities
        communication b/w parent-child
            - child to access props from the parents
            - parents passing functions as reference to child components

    MEAN - MongoDB, Express, Angular, NodeJS
    MERN - MongoDB, Express, React, NodeJS
    Single stack - JS

    axios vs fetch (natively available with latest browser)    

    Controlled components -> DOM <=> State
    Uncontrolled component

    Mongo DB references:
        1. https://www.npmjs.com/package/mongodb
        2. https://docs.mongodb.com/manual/mongo/
        3. https://docs.mongodb.com/manual/reference/sql-comparison/
    
    JS 

    Routing/SPA

    Ref: https://reacttraining.com/react-router/

        1. Composing mutiple pages as a single page
        2. Page navigation - client side concern
        3. Programmatic,  <Link/>: Static navigation
        4. Paramaterized routes
        5. Nested Routes
        6. Error cases: NoMAtch/Redirect
        7. Switch to render the first matching route

    Challenges to Routing:
        1. SEO: Render the React components on Server side
        2. Control navigation on client side - put guards on protective routes
   
    Webpack
        Its a bundler

    Flux, Redux (Stores) 
