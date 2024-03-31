const { readFile } = require('node:fs/promises');
// Forma asyncrona
(
  async () => {
    console.log('Leyendo primer archivo...')
    const text = await readFile('./archivo.txt', 'utf-8')
    console.log('primer texto: ', text)
    console.log('Procesando...')
    console.log('Leyendo segundo archivo...')
    const secondText = await readFile('./archivo2.txt', 'utf-8')
    console.log('segundo texto: ', secondText)
  })()
