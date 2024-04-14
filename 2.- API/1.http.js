const http = require('node:http') // Protocolo HTTP

const desiredPort = process.env.PORT ?? 3000

const server = http.createServer((req, res) => {
  console.log('Request recibida')
  res.end('Hola mundo')
})

server.listen(desiredPort, () => {
  console.log(`El servidor esta escuchando en el puerto http://localhost:${server.address().port}`)
})
