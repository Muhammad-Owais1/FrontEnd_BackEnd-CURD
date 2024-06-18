const express = require('express')
const users = require('./USERS_DATA.json')
const app = express()
const port = 3000

app.get('/users', (req, res) => {
  res.json('Hello World!')
  console.log(users)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
