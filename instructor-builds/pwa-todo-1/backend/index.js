const express = require('express')
let admin = require('firebase-admin')


// Configuring Express
const app = express()


// Config - Firebase

var serviceAccount = require("./quasagram-service-account.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});


let db = admin.firestore()

// Endpoints

app.get('/', (request, response) => {
    response.send('I love Node so hard!')
})

// Listen

app.listen(5001)





