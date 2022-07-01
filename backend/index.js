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



// Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyC7Onj_jWu8vl7ZBmjfuimcqtvUAVtRKm8",
//     authDomain: "quasagram-57a30.firebaseapp.com",
//     projectId: "quasagram-57a30",
//     storageBucket: "quasagram-57a30.appspot.com",
//     messagingSenderId: "300964608650",
//     appId: "1:300964608650:web:2cfba7fd97a06347a94b73"
// };

// // Initialize Firebase
// const firebaseApp = initializeApp(firebaseConfig);
// const db = getFirestore(firebaseApp);


app.get('/', (req, res) => res.send('I love node so hard!'))

app.get('/posts', (req, res) => {
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


