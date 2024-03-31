const path = require('node:path')

console.log(path.sep)

const filePath = path.join('content', 'subfolder', 'test')
console.log(filePath)

const base = path.join('home', 'proyecto-node-js')
console.log(base)

const extension = path.extname('image.jpg')

console.log(extension)
