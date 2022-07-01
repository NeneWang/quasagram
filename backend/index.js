const express = require('express')
const app = express()
var admin = require("firebase-admin");
const port = 4000


import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC7Onj_jWu8vl7ZBmjfuimcqtvUAVtRKm8",
    authDomain: "quasagram-57a30.firebaseapp.com",
    projectId: "quasagram-57a30",
    storageBucket: "quasagram-57a30.appspot.com",
    messagingSenderId: "300964608650",
    appId: "1:300964608650:web:2cfba7fd97a06347a94b73"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = firebaseApp.firestore()

app.get('/', (req, res) => res.send('I love node so hard!'))

app.get('/posts', (req, res) => {
    let posts = []

    posts = db.collection('posts').get().then(snapshot => {
        snapshot.forEach((doc) => {
            console.log(doc.id, '=>', doc.data())
            posts.push(doc.data())
        })
        res.send(posts)
    })
})



// var serviceAccount = require("path/to/serviceAccountKey.json");

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount)
// });




app.listen(process.env.PORT || 3000)


