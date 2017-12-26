"use strict";

var Badge = React.createClass({
    displayName: "Badge",
    getInitialState: function getInitialState() {
        return {
            count: 0
        };
    },

    incrementCount: function incrementCount() {
        this.setState({ count: this.state.count + 1 });
    },

    render: function render() {
        return React.createElement(
            "button",
            { onClick: this.incrementCount, type: "button", className: "btn btn-primary" },
            this.props.caption,
            " ",
            React.createElement(
                "span",
                { className: "badge badge-light" },
                this.state.count
            )
        );
    }
});
"use strict";

// 1. Create the class

var Card = React.createClass({
    displayName: "Card",

    render: function render() {
        return React.createElement(
            "div",
            { className: "card" },
            React.createElement("img", { className: "card-img-top", src: "http://via.placeholder.com/318x180", alt: "Card image cap" }),
            React.createElement(
                "div",
                { className: "card-body" },
                React.createElement(
                    "h4",
                    { className: "card-title" },
                    "Card title"
                ),
                React.createElement(
                    "p",
                    { className: "card-text" },
                    "Some quick example text to build on the card title and make up the bulk of the card's content."
                ),
                React.createElement(Badge, { caption: "Votes" })
            )
        );
    }
});

// 2. Create an object of the class
var obj = React.createElement(Card, {});

// 3. Render it to the dom
ReactDOM.render(obj, document.getElementById('mount-point'));