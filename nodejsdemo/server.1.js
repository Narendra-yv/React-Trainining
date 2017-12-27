const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors());

app.get('/', (req, res) => res.send('Hello World change!'))

var courses = [
    "ANgular from NodeJS", "React", "ECMAScript6", "Ember JS"
]

app.get('/courses', function(req, res) {
    res.json(courses);
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))