const fs = require('fs')

// Avoid using sync versioins! They block EventLoop!
try {
    fs.writeFileSync("./first.txt", "First file text");
    console.log("File first.txt was written");
    fs.appendFileSync("./first.txt", "\nOne more line");
    console.log("Appended to the firts.txt file");
    fs.renameSync("./first.txt", "./renamed-first.txt");
    console.log("File was renamed");
} catch (error) {
    console.log(error)
}
