const express = require('express')
const app = express()

let testData = {
  title: "Testing basic React Expess setup",
  array: [ 'Stuff', 'Things', 'A list', 'Hi Mom', "I'm using React"]
  }

app.get('/', (request, response) => response.send("Now we're thinking with Express"))

app.get( '/data', (request, response) => response.send( testData ))

app.listen( 3000, () => console.log("Listening on port 3000 "))