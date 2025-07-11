import EventEmitter from 'events'
import fs from 'fs'

// Do not use events with fs. For study only. Use promises or callback instead

const fileEmitter = new EventEmitter();

const filePath = "./first.txt";

fileEmitter.on('writeComplete', () => {
    console.log(`File ${filePath} was written`);
    fs.appendFile(filePath, "\nOne more line", () => {
      fileEmitter.emit("appendComplete");
    });
})

fileEmitter.on('appendComplete', () => {
    console.log("Appended to the firts.txt file");
    fs.rename(filePath, "./renamed-first.txt", () => {
      fileEmitter.emit("renameComplete");
    });
})

fileEmitter.on('renameComplete', () => {
    console.log("File was renamed");
})

fs.writeFile(filePath, "First file text", () => {
  fileEmitter.emit("writeComplete");
});