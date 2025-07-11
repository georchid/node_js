import stream from "stream";
import fs from 'fs'

// // Pipe to file
// const filePath = './files/stdin-dump.txt';
// const writeStream = fs.createWriteStream(filePath);
// process.stdin.pipe(writeStream);

// // Pipe to stdout
// process.stdin.pipe(process.stdout);

const uppercaseStream = new stream.Transform({
    transform: function(chunk, encoding, cb) {
        const upperCased = chunk.toString().toUpperCase();
        cb(null, upperCased);
    },
});

const reverseStream = new stream.Transform({
    transform(chunk, encoding, cb) {
        const arrayOfChars = chunk.toString().split("");
        const lastChar = arrayOfChars.pop();
        const reversedString = arrayOfChars.reverse().concat(lastChar).join('');
        cb(null, reversedString);
    },
});


process.stdin
    .pipe(uppercaseStream)
    .pipe(reverseStream)
    .pipe(process.stdout);