'use strict';

// 1. Create the class

var Card = React.createClass({
    displayName: 'Card',

    render: function render() {
        return React.createElement(
            'h2',
            null,
            'Card Component - Some changes'
        );
    }
});

// 2. Create an object of the class
var obj = React.createElement(Card, {});

// 3. Render it to the dom
ReactDOM.render(obj, document.getElementById('mount-point'));
