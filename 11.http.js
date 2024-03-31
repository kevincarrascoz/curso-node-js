const http = require('node:http') // Protocolo HTTP

const server = http.createServer((req, res) => {
  console.log('Request recibida')
  res.end('Hola mundo')
})

server.listen(0, () => {
  console.log(`El servidor esta escuchando en el puerto http://localhost:${server.address().port}`)
})
