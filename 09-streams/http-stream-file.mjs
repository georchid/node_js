import http from 'http';
import fs from 'fs';

const server = http.createServer((req, res) => {
    const filePath = 'files/index.html';
    // with streams
    if (req.url === '/' && req.method === 'GET') {
        const readStream = fs.createReadStream(filePath);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        readStream.pipe(res);
    }
    // witout streams. Read entire file and only then send it to the client
    if (req.url === "/no-stream" && req.method === "GET") {
      const filePath = "files/index.html";
      const readStream = fs.readFile(filePath, (err, data) => {
        if (err){
            res.statusCode = 500;
            res.end('Error reading file in server');
        } else {
            res.statusCode = 200;
            res.setHeader("Content-Type", "text/html");
            res.end(data);
        }
      });
    }
});

server.listen(5000, () => {
    console.log("Server is listening at port 5000");
});