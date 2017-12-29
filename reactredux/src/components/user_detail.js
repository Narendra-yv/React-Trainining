import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class UserDetail extends Component {
   
    render() {
        console.log(this.props.user);
        if(!this.props.user.id){
            return (<h2>Select a user</h2>);
        }
        return (
            <div>
               User Detail :  {this.props.user.id}
             </div>   
        );
    }
}


function mapStateToProps(state) {
  return { user: state.activeUser};
}

export default connect(mapStateToProps, actions)(UserDetail);