const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});

    res.end(`
        <html>
        <head>
            <title>DevOps App</title>
            <style>
                body {
                    background: linear-gradient(to right, #141e30, #243b55);
                    color: white;
                    font-family: Arial, sans-serif;
                    text-align: center;
                    margin-top: 100px;
                }
                h1 {
                    font-size: 50px;
                    color: #00ffcc;
                }
                p {
                    font-size: 20px;
                }
                .box {
                    background: rgba(255,255,255,0.1);
                    padding: 30px;
                    border-radius: 15px;
                    display: inline-block;
                    box-shadow: 0 0 20px rgba(0,0,0,0.5);
                }
            </style>
        </head>
        <body>
            <div class="box">
                <h1> DevOps VLE 7!</h1>
                <p>CI/CD Pipeline is working successfully!</p>
                <p>Powered by Jenkins + Docker</p>
            </div>
        </body>
        </html>
    `);

}).listen(3000);
