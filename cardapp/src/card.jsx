import Badge from './badge'
import React, { Component } from 'react';
class Card extends Component {
    render() {
        return (
            
                <div class="card">
                <img class="card-img-top" src="http://via.placeholder.com/318x180" alt="Card image cap"/>
                <div class="card-body">
                    <h4 class="card-title">{this.props.title}</h4>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <Badge caption="Votes" />  
                </div>
                
            </div>
            
            )
    }
}

export default Card;





// // 1. Create the class
// var Badge = require('./badge')

// var Card = React.createClass({
//     render: function(){
//         return (
//         <div class="card">
//         <img class="card-img-top" src="http://via.placeholder.com/318x180" alt="Card image cap"/>
//         <div class="card-body">
//             <h4 class="card-title">{this.props.title}</h4>
//             <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
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