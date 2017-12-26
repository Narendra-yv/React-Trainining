(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Users/puneetvashisht/work/trainings/reacttrainingforcts/cardapp/src/app.jsx":[function(require,module,exports){
'use strict';

var CardList = require('./card-list');

// 2. Create an object of the class
var obj = React.createElement(CardList, {});

// 3. Render it to the dom
ReactDOM.render(obj, document.getElementById('mount-point'));

},{"./card-list":"/Users/puneetvashisht/work/trainings/reacttrainingforcts/cardapp/src/card-list.jsx"}],"/Users/puneetvashisht/work/trainings/reacttrainingforcts/cardapp/src/badge.jsx":[function(require,module,exports){
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

module.exports = Badge;

},{}],"/Users/puneetvashisht/work/trainings/reacttrainingforcts/cardapp/src/card-list.jsx":[function(require,module,exports){
"use strict";

// 1. Create the class
var Card = require('./card');
var CardList = React.createClass({
    displayName: "CardList",
    getInitialState: function getInitialState() {
        return {
            courses: ["Angular", "React", "Ember", "JS"]
        };
    },


    render: function render() {
        var courseList = this.state.courses.map(function (course, i) {
            console.log(course);
            return React.createElement(Card, { key: i, title: course });
        });

        return React.createElement(
            "div",
            null,
            courseList
        );
    }
});

module.exports = CardList;

},{"./card":"/Users/puneetvashisht/work/trainings/reacttrainingforcts/cardapp/src/card.jsx"}],"/Users/puneetvashisht/work/trainings/reacttrainingforcts/cardapp/src/card.jsx":[function(require,module,exports){
"use strict";

// 1. Create the class
var Badge = require('./badge');

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
                    this.props.title
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
module.exports = Card;

// // 2. Create an object of the class
// var obj = React.createElement(Card, {})

// // 3. Render it to the dom
// ReactDOM.render(obj, document.getElementById('mount-point'))

},{"./badge":"/Users/puneetvashisht/work/trainings/reacttrainingforcts/cardapp/src/badge.jsx"}]},{},["/Users/puneetvashisht/work/trainings/reacttrainingforcts/cardapp/src/app.jsx"]);
