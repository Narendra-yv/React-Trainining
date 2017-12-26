(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Users/puneetvashisht/work/trainings/reacttrainingforcts/cardapp/src/app.jsx":[function(require,module,exports){
'use strict';

var _cardList = require('./card-list');

var _cardList2 = _interopRequireDefault(_cardList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 2. Create an object of the class
var obj = React.createElement(_cardList2.default, {});

// 3. Render it to the dom
// var CardList = require('./card-list')
ReactDOM.render(obj, document.getElementById('mount-point'));

},{"./card-list":"/Users/puneetvashisht/work/trainings/reacttrainingforcts/cardapp/src/card-list.jsx"}],"/Users/puneetvashisht/work/trainings/reacttrainingforcts/cardapp/src/badge.jsx":[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Badge = function (_React$Component) {
    _inherits(Badge, _React$Component);

    function Badge() {
        _classCallCheck(this, Badge);

        var _this = _possibleConstructorReturn(this, (Badge.__proto__ || Object.getPrototypeOf(Badge)).call(this));

        console.log('INitialize component.. initalize state');
        _this.state = { count: 0 };
        return _this;
    }

    _createClass(Badge, [{
        key: "incrementCount",
        value: function incrementCount() {
            this.setState({ count: this.state.count + 1 });
        }
    }, {
        key: "render",
        value: function render() {
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
    }]);

    return Badge;
}(React.Component);

exports.default = Badge;

// var Badge = React.createClass({

//     getInitialState(){
//         return {
//             count: 0
//         }
//     },
//     incrementCount: function(){
//         this.setState({count: this.state.count + 1})
//     },

//     render: function(){
//         return (
//             <button onClick={this.incrementCount} type="button" className="btn btn-primary">
//                 {this.props.caption} <span className="badge badge-light">{this.state.count}</span>
//             </button>
//         )
//     }
// })

// module.exports = Badge

},{}],"/Users/puneetvashisht/work/trainings/reacttrainingforcts/cardapp/src/card-list.jsx":[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _card = require("./card");

var _card2 = _interopRequireDefault(_card);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CardList = function (_React$Component) {
    _inherits(CardList, _React$Component);

    function CardList() {
        _classCallCheck(this, CardList);

        var _this = _possibleConstructorReturn(this, (CardList.__proto__ || Object.getPrototypeOf(CardList)).call(this));

        _this.state = {
            courses: ["Angular", "React", "Ember", "ES6"]
        };
        return _this;
    }

    _createClass(CardList, [{
        key: "render",
        value: function render() {
            var courseList = this.state.courses.map(function (course, i) {
                console.log(course);
                return React.createElement(_card2.default, { key: i, title: course });
            });

            return React.createElement(
                "div",
                null,
                courseList
            );
        }
    }]);

    return CardList;
}(React.Component);

exports.default = CardList;

// // 1. Create the class
// var Card = require('./card')
// var CardList = React.createClass({
//     getInitialState(){
//         return 
//     },

//     render: function(){
//        var courseList =  this.state.courses.map(function(course, i){
//             console.log(course);
//             return <Card key={i} title={course}/>
//         })

//         return(
//             <div>
//                 {courseList}
//             </div>
//         ) 
//     }
// })

// module.exports = CardList

},{"./card":"/Users/puneetvashisht/work/trainings/reacttrainingforcts/cardapp/src/card.jsx"}],"/Users/puneetvashisht/work/trainings/reacttrainingforcts/cardapp/src/card.jsx":[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _badge = require("./badge");

var _badge2 = _interopRequireDefault(_badge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Card = function (_React$Component) {
    _inherits(Card, _React$Component);

    function Card() {
        _classCallCheck(this, Card);

        return _possibleConstructorReturn(this, (Card.__proto__ || Object.getPrototypeOf(Card)).apply(this, arguments));
    }

    _createClass(Card, [{
        key: "render",
        value: function render() {
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
                    React.createElement(_badge2.default, { caption: "Votes" })
                )
            );
        }
    }]);

    return Card;
}(React.Component);

exports.default = Card;

// // 1. Create the class
// var Badge = require('./badge')

// var Card = React.createClass({
//     render: function(){
//         return (
//         <div className="card">
//         <img className="card-img-top" src="http://via.placeholder.com/318x180" alt="Card image cap"/>
//         <div className="card-body">
//             <h4 className="card-title">{this.props.title}</h4>
//             <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//             <Badge caption="Votes" />  
//         </div>
//         </div>

//         )
//     }
// })
// module.exports = Card

// // // 2. Create an object of the class
// // var obj = React.createElement(Card, {})

// // // 3. Render it to the dom
// // ReactDOM.render(obj, document.getElementById('mount-point'))

},{"./badge":"/Users/puneetvashisht/work/trainings/reacttrainingforcts/cardapp/src/badge.jsx"}]},{},["/Users/puneetvashisht/work/trainings/reacttrainingforcts/cardapp/src/app.jsx"]);
