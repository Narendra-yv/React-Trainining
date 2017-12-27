import React, { Component } from 'react';
import ListItem from './list-item'
import Button from './button'
import axios from 'axios'
class Dropdown extends Component {

    componentWillMount() {
        console.log('Init code.. we want to ajax here..')
        //AJAX code
        axios.get('http://localhost:3000/courses')
        .then( (response) => {
            console.log(response);
            console.log(response.data);
            this.setState({courses: response.data});
        })
        .catch( (error) => {
            console.log(error);
        });
    }

    constructor(){
        super();
        console.log('Constructor.. too early for ajax call')
        // this.state = {show: false, courses: ["Angular", "React", "ES6", "Java"]}
        this.state = {show: false, courses: []}
    }

    toggleShow(){
        // Wrong to change state with setState - > component will not re-render
        // this.state = {show: false}
        console.log('in the parent component..')
        this.setState({show: !this.state.show})
    }

    handleItemClicked(text){
        console.log('In the Dropdown parent component' ,text)
        this.setState({buttonCaption: text, show:false})
    }
    
    render() {
        var list = this.state.courses.map((course, i)=>  <ListItem key={i} text={course} whenItemClicked={this.handleItemClicked.bind(this)}/>)

        return (
            <div class="dropdown">
            <Button caption={this.state.buttonCaption || this.props.caption} whenClicked={this.toggleShow.bind(this)}/>
            <div class={this.state.show?'dropdown-menu show': "dropdown-menu"} aria-labelledby="dropdownMenuButton">
              {list}
            </div>
          </div> 
        );
    }
}

export default Dropdown;