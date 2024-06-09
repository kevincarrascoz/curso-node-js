const http = require('node:http') // Protocolo HTTP
const fs = require('node:fs')

const desiredPort = process.env.PORT ?? 3000

const processRequest = (req, res) => {
  res.setHeader('Content-Type', 'text/html; charset=utf-8')
  if (req.url === '/') {
    res.statusCode = 200
    res.end('<h1>Bienvenido a la pagina de inicio xd</h1>')
  } else if (req.url === '/imagen') {
    fs.readFile('./imagen.png', (err, data) => {
      if (err) {
        res.statusCode = 500
        res.end('<h1>500 Internal server error</h1>')
      } else {
        res.statusCode = 200
        res.setHeader('Content-Type', 'image/png')
        res.end(data)
      }
    })
  } else if (req.url === '/contacto') {
    res.statusCode = 200
    res.end('<h1>Contacto</h1>')
  } else {
    res.statusCode = 404
    res.end('<h1>Not Found</h1>')
  }
}

const server = http.createServer(processRequest)

server.listen(desiredPort, () => {
  console.log(`El servidor esta escuchando en el puerto http://localhost:${server.address().port}`)
})
