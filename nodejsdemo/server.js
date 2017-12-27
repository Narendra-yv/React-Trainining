const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()

app.use(cors());
// parse application/json
app.use(bodyParser.json())

app.get('/', (req, res) => res.send('Hello World change!'))

var todos = [
    {text:'Sample Item'}
]

app.get('/todos', function(req, res) {
    res.json(todos);
})

app.post('/todo', (req, res)=> {
    var todo = req.body;
    console.log(todo)
    todos.push(todo);
    res.json(todos);
    //REST Code.. 201
})

app.delete('/todo/:id', (req, res)=>{
    console.log(req.params.id)
    var index = req.params.id;
    todos.splice(index, 1)
    res.json(todos);
})

// app.delete

app.listen(3000, () => console.log('Example app listening on port 3000!'))