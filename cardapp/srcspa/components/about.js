import React, { Component } from 'react';
import { loadavg } from 'os';
class About extends Component {

    loadData(){
        console.log('Loading a particular city data: ', this.props.match.params.city);
    }

    componentWillMount() {
        console.log('Component will mount');
        this.loadData()
    }

    componentWillUpdate() {
        console.log('This is right place to get updates..')
        this.loadData()
    }
   
    render() {
        console.log(this.props.match);
        return (
            <h2>About page -  {this.props.match.params.city}</h2>
        );
    }
}

export default About;