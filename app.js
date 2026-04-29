const http = require('http');

const version = process.env.VERSION || "Blue";

const theme = {
    Blue: {
        color: "#00ccff",
        glow: "#00ccff88",
        bg: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)"
    },
    Green: {
        color: "#00ff99",
        glow: "#00ff9988",
        bg: "linear-gradient(135deg, #0f2027, #1f4037, #99f2c8)"
    }
};

const current = theme[version] || theme["Blue"];

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});

    res.end(`
    <html>
    <head>
        <title>DevOps ${version}</title>
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
                animation: fadeIn 1s ease-in-out;
            }

            h1 {
                font-size: 50px;
                color: ${current.color};
                margin-bottom: 10px;
                text-shadow: 0 0 20px ${current.glow};
            }

            .badge {
                display: inline-block;
                padding: 8px 18px;
                border-radius: 20px;
                background: ${current.color};
                color: black;
                font-weight: bold;
                margin-bottom: 20px;
            }

            p {
                font-size: 18px;
                opacity: 0.9;
            }

            @keyframes fadeIn {
                from { opacity: 0; transform: translateY(20px); }
                to { opacity: 1; transform: translateY(0); }
            }
        </style>
    </head>

    <body>
        <div class="card">
            <h1>DevOps ${version}</h1>
            <div class="badge">${version.toUpperCase()} ENV</div>
            <p>CI/CD Pipeline is working perfectly!</p>
            <p>Jenkins + Docker </p>
        </div>
    </body>
    </html>
    `);

}).listen(3000);
