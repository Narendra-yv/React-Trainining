const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient;
const app = express()

app.use(cors());
// parse application/json
app.use(bodyParser.json())

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'tododb';

app.get('/', (req, res) => res.send('Hello World change!'))

var todos = [
    {text:'Sample Item'}
]

app.get('/todos', function(req, res) {
    res.json(todos);
})

app.post('/todo', (req, res)=> {
    MongoClient.connect(url, function(err, client) {
        var todo = req.body;
        console.log(todo)
        todos.push(todo);
        console.log("Connected successfully to db server");
        const db = client.db(dbName);

        const collection = db.collection('todos');
        collection.insertMany(todos, function(err, result) {
            console.log("Inserted todos documents into the collection");
            // callback(result);
            res.json(todos);
          });
        
        client.close();
      });

   
   
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