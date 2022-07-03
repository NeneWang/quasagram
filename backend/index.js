const express = require('express')
const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');
const { getStorage } = require('firebase-admin/storage');

let path = require('path')
let os = require('os')
let fs = require('fs')

const http = require('http');
const busboy = require('busboy');

const port = 4000
const app = express()


const serviceAccount = require('./serviceAccountKey.json');

initializeApp({
    credential: cert(serviceAccount),
    storageBucket: 'quasagram-57a30.appspot.com'
});


const db = getFirestore();
const bucket = getStorage().bucket();

app.get('/', (req, res) => res.send('I love node so hard!'))

app.get('/posts', (req, res) => {

    res.set("Access-Control-Allow-Origin", "*")

    let posts = []
    db.collection('posts').orderBy('date', 'desc').get().then(snapshot => {

        snapshot.forEach((doc) => {
            posts.push(doc.data())
        });
        res.send(posts)
    })

})

// Expoint - createPost

app.post('/createPost', (req, res) => {
    res.set('Access-Control-Allow-Origin', '*')



    console.log('POST request');
    const bb = busboy({ headers: req.headers });

    let fields = {}

    bb.on('file', (name, file, info) => {


        const { filename, encoding, mimeType } = info;
        console.log(
            `File [${name}]: filename: %j, encoding: %j, mimeType: %j`,
            filename,
            encoding,
            mimeType
        );
        file.on('data', (data) => {
            console.log(`File [${name}] got ${data.length} bytes`);
        }).on('close', () => {
            console.log(`File [${name}] done`);
        });
    });

    bb.on('field', (name, val, info) => {
        console.log(`Field [${name}]: value: %j`, val);
        fields[name] = val
    });

    bb.on('close', () => {
        console.log('Done parsing form!');
        // res.writeHead(303, { Connection: 'close', Location: '/' });
        // console.log('fields: ', fields)
        db.collection('posts').doc(fields.id).set(
            {
                id: fields.id,
                caption: fields.caption,
                location: fields.location,
                date: parseInt(fields.date),
                imageUrl: 'https://firebasestorage.googleapis.com/v0/b/quasagram-57a30.appspot.com/o/img1.PNG?alt=media&token=558e3f4e-abac-4850-88dc-ff3acc26e768'
            }
        )

        res.send("Done Parsing form!");
    });

    req.pipe(bb);
})


app.listen(process.env.PORT || port)


