const http = require('http');

const version = process.env.VERSION || "Blue";

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});

    res.end(`
        <html>
        <body style="background:#111;color:white;text-align:center;margin-top:100px;">
            <h1>🚀 DevOps ${version} Version</h1>
            <p>CI/CD Pipeline is working!</p>
            <p>Powered by Jenkins + Docker</p>
        </body>
        </html>
    `);

}).listen(3000);
