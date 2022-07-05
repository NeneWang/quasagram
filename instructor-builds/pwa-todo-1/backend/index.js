const express = require('express')

// Configuring Express
const app = express()


// Endpoints

app.get('/', (request, response) => {
    response.send('I love Node so hard!')
})

// Listen

app.listen(5001)





