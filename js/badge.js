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

// var obj = React.createElement(Badge, {caption:"Votes"});

ReactDOM.render(React.createElement(Badge, { caption: "Likes" }), document.getElementById('mount-point'));