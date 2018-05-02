// Using Express as a http server
// Express has a router by default
const express = require('express')
const app = express()
const port = 3000

app.get('/', (request, response) => {
    response.send('Hello!')
})

app.listen(port, (err) => {
    if (err) {
        return console.log('whoops', err)
    }

    console.log(`server is listening on ${port}`)
})