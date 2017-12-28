import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom'
import UserDisplay from './userdisplay'
import UserEdit from './useredit'

const User = (props) => (
    <div>
            <h2>Main User Page</h2>
            <ul class="nav">
                <li class="nav-item">
                    <Link class="nav-link" to="/user/">User Display</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" to="/user/edit">User Edit</Link>
                </li>   
            </ul>
            
            <Route exact path="/user" component={UserDisplay}/>
            <Route path="/user/edit" component={UserEdit}/>
     </div>   
)

export default User;