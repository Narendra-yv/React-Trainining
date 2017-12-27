import Card from './card'
import React, { Component } from 'react';

class CardList extends Component {
    constructor() {
        super()
        this.state = {
            courses: ["New Stuff", "Angular", "React", "Ember", "ES6"]
        }
    }
    render() {
        var courseList = this.state.courses.map(function (course, i) {
            console.log(course);
            return <Card key={i} title={course} />
        })
        return (
            <div class="row">
                {courseList}
            </div>
        )
    }
}


export default CardList;

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

