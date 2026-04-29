const http = require('http');

http.createServer((req, res) => {
    res.end("Hello DevSecOps Healthcare!");
}).listen(3000);
