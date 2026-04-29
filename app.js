const http = require('http');

const version = process.env.VERSION || "Blue";

const theme = {
    Blue: {
        color: "#00ccff",
        glow: "#00ccff88",
        bg: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
        switchUrl: "http://localhost:3002",
        button: "Switch to Green"
    },
    Green: {
        color: "#00ff99",
        glow: "#00ff9988",
        bg: "linear-gradient(135deg, #0f2027, #1f4037, #99f2c8)",
        switchUrl: "http://localhost:3001",
        button: "Switch to Blue"
    }
};

const current = theme[version];

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});

    res.end(`
    <html>
    <head>
        <title>${version}</title>
        <style>
            body {
                margin: 0;
                height: 100vh;
                display: flex;
                justify-content: center;
                align-items: center;
                background: ${current.bg};
                font-family: 'Segoe UI', sans-serif;
                color: white;
            }

            .card {
                text-align: center;
                padding: 50px;
                border-radius: 20px;
                background: rgba(255,255,255,0.08);
                backdrop-filter: blur(15px);
                box-shadow: 0 0 30px ${current.glow};
            }

            h1 {
                font-size: 50px;
                color: ${current.color};
                text-shadow: 0 0 20px ${current.glow};
            }

            button {
                margin-top: 20px;
                padding: 12px 25px;
                border: none;
                border-radius: 25px;
                font-size: 16px;
                cursor: pointer;
                background: ${current.color};
                color: black;
                font-weight: bold;
                transition: 0.3s;
            }

            button:hover {
                transform: scale(1.1);
            }
        </style>
    </head>

    <body>
        <div class="card">
            <h1>🚀 ${version} Environment</h1>
            <p>CI/CD Pipeline is working!</p>

            <button onclick="window.location.href='${current.switchUrl}'">
                ${current.button}
            </button>
        </div>
    </body>
    </html>
    `);

}).listen(3000);
