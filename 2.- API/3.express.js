const express = require('express')
const PORT = process.env.PORT ?? 3000
const ditto = require('./pokemon/ditto.json')
const app = express()

app.disable('x-powered-by')

app.use((req, res, next) => {
  console.log('mi primer middleware')
  next()
})

app.get('/pokemon/ditto', (req, res) => {
  res.json(ditto)
})

app.post('/pokemon', (req, res) => {
  let body = ''
  // escuchar evento data
  req.on('data', chunk => {
    body += chunk.toString()
  })
  req.on('end', () => {
    const data = JSON.parse(body)
    res.status(201).json(data)
  })
})

app.use((req, res) => {
  res.status(404).send('<h1>Not Found</h1>')
})

app.listen(PORT, () => {
  console.log(`server listening on port localhost:${PORT}`)
})
