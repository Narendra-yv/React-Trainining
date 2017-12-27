import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import axios from 'axios'
class App extends Component {

    constructor(){
        super()
        this.state = {todos: [], todo: ''}
    }
    componentWillMount() {
        axios.get('http://localhost:3000/todos')
        .then((res) => {
            console.log(res)
            this.setState({todos: res.data})
        })
        .catch((err) => {console.log(err)})
    }

    addTodo(){
        console.log('Post call - Ajax');
        console.log(this.state.todo)
        axios.post('http://localhost:3000/todo', {
            text: this.state.todo
          })
          .then((res) => {
            console.log(res)
            this.setState({todos: res.data, todo:''})
        })
        .catch((err) => {console.log(err)})
    }

    handleTodoChange(event){
        // console.log(event.target.value)
        this.setState({todo: event.target.value})
    }

    render() {
        var list = this.state.todos.map((todo,i)=> <li key={i} class="list-group-item">{todo.text}</li>)

        return (
            <div>
             <div class="form-group">
                <label for="addTodoItem">Add a todo!!</label>
                <input type="text" class="form-control" id="addTodoItem" placeholder="Buy milk..." value={this.state.todo} onChange={this.handleTodoChange.bind(this)}/>
                <button onClick={this.addTodo.bind(this)}>Add</button>
            </div>    

            <label>Display the todo list here</label>
            <ul class="list-group">
                {list}
            </ul>
            </div>   
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('mount-point'))

export default App;