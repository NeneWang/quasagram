const express = require('express')
const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');

const port = 4000
const app = express()


const serviceAccount = require('./serviceAccountKey.json');

initializeApp({
    credential: cert(serviceAccount)
});

const db = getFirestore();

app.get('/', (req, res) => res.send('I love node so hard!'))

app.get('/posts', (req, res) => {

    res.set("Access-Control-Allow-Origin", "*")

    let posts = []
    db.collection('posts').get().then(snapshot => {

        snapshot.forEach((doc) => {
            console.log(doc.id, '=>', doc.data());
            posts.push(doc.data())
        });
        res.send(posts)
    })

})



app.listen(process.env.PORT || port)


