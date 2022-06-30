const express = require('express')
const app = express()
const port = 4000


app.get('/', (req, res) => res.send('I love node so hard!'))

app.listen(port, () => console.log(`Example app listining at httl://localhost: ${port}`))







