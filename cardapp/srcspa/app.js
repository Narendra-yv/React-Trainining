import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import Routes from './routes'
import Header from './header'

class App extends Component {

    render() {
        return (
            <div>
            <h2>App component</h2>
            
            <BrowserRouter>
                <div>
                <Header/>
                <Routes/>
                </div>
            </BrowserRouter>
            </div>
        );
    }
}

export default App;

ReactDOM.render(<App/>, document.getElementById('mount-point'))