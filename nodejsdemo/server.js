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

app.post('/auth', (req, res)=> {
    console.log(req.body)
    var email = req.body.email;
    var pwd = req.body.pwd;
    console.log(email, pwd)
    if(email == pwd){
        res.json({auth: true})
    }
    else{
        res.json({auth: false})
    }
})

app.delete('/todo/:id', (req, res)=>{
    console.log(req.params.id)
    var index = req.params.id;
    todos.splice(index, 1)
    res.json(todos);
})

// app.delete

app.listen(3000, () => console.log('Example app listening on port 3000!'))