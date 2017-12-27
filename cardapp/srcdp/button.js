import React, { Component } from 'react';
class Button extends Component {

    render() {
        return (
            <button onClick={this.props.whenClicked}  class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              {this.props.caption} 
            </button>
        );
    }
}

export default Button;