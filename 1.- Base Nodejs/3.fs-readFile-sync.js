const fs = require('node:fs')
// Forma syncrona secuencial lineal
console.log('Leyendo primer archivo...')
const text = fs.readFileSync('./archivo.txt', 'utf-8')
console.log('primer texto: ', text)
console.log('Procesando...')
console.log('Leyendo segundo archivo...')
const secondText = fs.readFileSync('./archivo2.txt', 'utf-8')
console.log('segundo texto: ', secondText)
