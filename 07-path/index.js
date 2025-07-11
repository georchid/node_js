const path = require('path')

const filePath = "/Users/george/Desktop/node/index.js";
const textFilePath = "/Users/george/Desktop/file.txt";
const relativePath = "./node/movie.mov";
const directorePath = "./node/subfolder";


console.log(path.isAbsolute(filePath)); // true
console.log(path.isAbsolute(relativePath)); // false

console.log(path.basename(filePath)); // index.js
console.log(path.basename(directorePath)); // subfolder

console.log(path.dirname(filePath)); // /Users/george/Desktop/node
console.log(path.dirname(directorePath)); // ./node

console.log(path.resolve(relativePath)); // /home/georchid/Projects/node_projects/07-path/node/movie.mov

console.log(path.extname(textFilePath)); // .txt
console.log(path.extname(directorePath)); // ''

console.log(path.parse(filePath));
/*
{
  root: '/',
  dir: '/Users/george/Desktop/node',
  base: 'index.js',
  ext: '.js',
  name: 'index'
}
*/
const parsedPath = path.parse(filePath);
console.log(path.join(parsedPath.dir, `renamed-${parsedPath.name}.mjs`)); ///Users/george/Desktop/node/renamed-index.mjs