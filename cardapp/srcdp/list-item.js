import React, { Component } from 'react';
class ListItem extends Component {
    
    handleItemClick(){
        console.log('Item is clicked..', this.props.text)
        this.props.whenItemClicked(this.props.text);
    }

    render() {
        return (
            <a onClick={this.handleItemClick.bind(this)} class="dropdown-item" href="#">{this.props.text}</a>
        );
    }
}

export default ListItem;