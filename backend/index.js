const express = require('express')
const app = express()
const port = 4000


app.get('/', (req, res) => res.send('I love node so hard!'))

app.get('/posts', (req, res) => {
    let posts = [
        {
            caption: 'Golden Gate Bridge',
            location: 'San Francisco'
        },
        {
            caption: 'London Eye',
            location: 'London'
        }
    ]
    res.send(posts)
})

app.listen(process.env.PORT || 3000)

