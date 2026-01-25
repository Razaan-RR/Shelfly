const express = require('express')
const cors = require('cors')
const items = require('./data.json')

const app = express()
app.use(cors())

app.get('/api/items', (req, res) => {
  res.json(items)
})

app.listen(5000, () => {
  console.log('Express running at http://localhost:5000')
})
