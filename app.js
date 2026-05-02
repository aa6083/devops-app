const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});

    res.end(`
        <html>
        <head>
            <title>DevOps App</title>
            <style>
                body {
                    background: linear-gradient(to right, #0f2027, #203a43, #2c5364);
                    color: white;
                    font-family: Arial, sans-serif;
                    text-align: center;
                    margin-top: 80px;
                }

                h1 {
                    font-size: 48px;
                    color: #00ffcc;
                }

                h2 {
                    margin-bottom: 20px;
                }

                p {
                    font-size: 18px;
                }

                .box {
                    background: rgba(255,255,255,0.1);
                    padding: 35px;
                    border-radius: 15px;
                    display: inline-block;
                    box-shadow: 0 0 25px rgba(0,0,0,0.5);
                }

                .badge {
                    margin-top: 15px;
                    padding: 10px 20px;
                    background: #00ffcc;
                    color: black;
                    border-radius: 20px;
                    font-weight: bold;
                }
            </style>
        </head>

        <body>

            <div class="box">
                <h1> DevOps VLE 7! adsadsankdnsakdnadlkndlaldna</h1>
                <h2>CI/CD Pipeline (Exp 7)</h2>

                <p>✔ Application Deployed Successfully</p>
                <p>✔ Jenkins Pipeline Working</p>
                <p>✔ Docker Container Running</p>

                <div class="badge">
                    Jenkins + Docker 
                </div>
            </div>

        </body>
        </html>
    `);

}).listen(5000);

console.log("Server running on port 5000");
