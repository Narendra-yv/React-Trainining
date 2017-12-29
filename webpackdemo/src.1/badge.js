import React, { Component } from 'react';

class Badge extends Component {
    constructor(){
        super();
        console.log('INitialize component.. initalize state')
        this.state = {count : 0}
        // this.incrementCount.bind(this)
    }

    incrementCount() {
        this.setState({count: this.state.count + 1})
    }

    render() {
        return (
            <button onClick={this.incrementCount.bind(this)} type="button" class="btn btn-primary">
            {this.props.caption} <span class="badge badge-light">{this.state.count}</span>
        </button>
        );
    }
}

export default Badge;



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