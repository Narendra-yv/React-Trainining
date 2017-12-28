import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import {BrowserRouter, Route, Link} from 'react-router-dom'
import Home from './components/home'
import About from './components/about'
class App extends Component {

    render() {
        return (
            <div>
            <h2>App component</h2>
            
            <BrowserRouter>
                <div>
                <Link to="/">Home</Link> | <Link to="/about">About</Link>
                <hr/>
                <a href="/">Home</a> | <a href="/about">About</a>
                <hr/>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
                </div>
            </BrowserRouter>
            </div>
        );
    }
}

export default App;

ReactDOM.render(<App/>, document.getElementById('mount-point'))