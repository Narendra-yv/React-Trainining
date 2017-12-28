import React, { Component } from 'react';
import {Route, Link, Switch, Redirect} from 'react-router-dom'
import Login from './components/login'
import Profile from './components/profile'
import About from './components/about'
import Home from './components/home'
import User from './components/user'
import NoMatch from './components/nomatch'
class Routes extends Component {

    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/about/:city" component={About}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/user" component={User}/>
                    <Route path="/profile" component={Profile}/>
                    <Redirect to="/"/>
                    {/* <Route component={NoMatch}/> */}
                </Switch>
            </div>
            
        );
    }
}

export default Routes;