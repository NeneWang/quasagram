const { response } = require('express');
const express = require('express')
let admin = require('firebase-admin')


// Configuring Express
const app = express()


// Config - Firebase

const serviceAccount = require("./quasagram-service-account.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});


const db = admin.firestore()

// Endpoints

app.get('/', (request, response) => {
    response.set('Access-Control-Allow-Origin', '*')

    response.send('I love Node so hard!')
})

app.get('/tasks', (request, response) => {
    response.set('Access-Control-Allow-Origin', '*')

    let tasks = []

    db.collection('tasks').orderBy('id', 'asc').get().then(snapshot => {
        snapshot.docs.forEach((doc) => {
            tasks.push(doc.data())
        })
        response.send(tasks)
    })
})


app.post('/createTask', (request, response) => {
    response.set('Access-Control-Allow-Origin', '*')

    db.collection('tasks').add({
        id: parseInt(request.query.id),
        title: request.query.title
    }).then(() => {
        response.send('Task Added from the query: ' + request.query )
    })
})

// Listen

app.listen(5001)





