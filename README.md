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

    MEAN - MongoDB, Express, Angular, NodeJS
    MERN - MongoDB, Express, React, NodeJS
