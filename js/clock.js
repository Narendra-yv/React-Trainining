'use strict';

// Step 1. Create a class
var Clock = React.createClass({
    displayName: 'Clock',


    render: function render() {
        var now = new Date();
        return React.createElement(
            'div',
            null,
            React.createElement(
                'h2',
                null,
                'Current time '
            ),
            React.createElement(
                'p',
                null,
                now.getHours(),
                ' : ',
                now.getMinutes(),
                ' : ',
                now.getSeconds()
            )
        );
    }
});

setInterval(function () {
    // Step 2. Create an object from the class
    var obj = React.createElement(Clock, {});

    // Step 3. Render the object on the dom
    ReactDOM.render(obj, document.getElementById('time'));
}, 1000);