const http = require('node:http') // Protocolo HTTP
const { findAvailablePort } = require('./12.free-port.js')

const desiredPort = process.env.PORT ?? 3000

const server = http.createServer((req, res) => {
  console.log('Request recibida')
  res.end('Hola mundo')
})

findAvailablePort(desiredPort).then(port => {
  server.listen(port, () => {
    console.log(`El servidor esta escuchando en el puerto http://localhost:${port}`)
  })
})
