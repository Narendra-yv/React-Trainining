import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import Badge from './badge'
class App extends Component {
    
    render() {
        return (
            <div>
                <h2>App Component</h2>
                <Badge caption="Likes"/>
             </div>   
        );
    }
}

export default App;

ReactDOM.render(<App/>, document.getElementById('mount-point'))