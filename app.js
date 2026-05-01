const http = require('http');

const html = `
<!DOCTYPE html>
<html>
<head>
<title>Healthcare System</title>
<style>

body {
    margin:0;
    font-family: 'Segoe UI', sans-serif;
    background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
    color: white;
}

.container {
    text-align: center;
    padding: 40px;
}

h1 {
    font-size: 40px;
    margin-bottom: 5px;
}

.subtitle {
    color: #00eaff;
    margin-bottom: 30px;
}

/* Card Design */
.card {
    background: rgba(255,255,255,0.08);
    margin: 20px auto;
    padding: 25px;
    width: 320px;
    border-radius: 15px;
    backdrop-filter: blur(12px);
    box-shadow: 0 10px 25px rgba(0,0,0,0.4);
    transition: 0.3s;
}

.card:hover {
    transform: scale(1.03);
}

/* Inputs */
input {
    width: 85%;
    padding: 10px;
    margin: 8px;
    border-radius: 8px;
    border: none;
    outline: none;
}

/* Button */
button {
    padding: 10px 20px;
    border: none;
    background: linear-gradient(45deg, #00c6ff, #0072ff);
    color: white;
    cursor: pointer;
    border-radius: 8px;
    font-weight: bold;
    transition: 0.3s;
}

button:hover {
    transform: scale(1.05);
}

/* Message */
#msg {
    margin-top: 10px;
    color: #00ffcc;
    font-weight: bold;
}

/* Patient list */
ul {
    list-style: none;
    padding: 0;
}

li {
    background: rgba(255,255,255,0.1);
    margin: 5px;
    padding: 8px;
    border-radius: 8px;
}

/* Footer */
.footer {
    margin-top: 30px;
    font-size: 14px;
    color: #aaa;
}

</style>
</head>

<body>

<div class="container">

    <h1>🏥 Healthcare Management System</h1>
    <p class="subtitle">Secure DevSecOps Enabled Application</p>

    <div class="card">
        <h3>📅 Book Appointment</h3>
        <input id="name" placeholder="Patient Name"><br>
        <input id="doctor" placeholder="Doctor Name"><br>
        <button onclick="book()">Book Appointment</button>
        <p id="msg"></p>
    </div>

    <div class="card">
        <h3>🧾 Patients List</h3>
        <ul id="list"></ul>
    </div>

    <div class="footer">
        CI/CD | Docker | Kubernetes | DevSecOps 🚀
    </div>

</div>

<script>

let patients = [];

function book() {
    const name = document.getElementById('name').value;
    const doctor = document.getElementById('doctor').value;

    if(name && doctor){
        patients.push(name + " → Dr. " + doctor);
        document.getElementById('msg').innerText = "✅ Appointment Booked!";
        render();
    } else {
        document.getElementById('msg').innerText = "⚠ Please fill all fields";
    }
}

function render(){
    const list = document.getElementById('list');
    list.innerHTML = "";

    patients.forEach(p => {
        let li = document.createElement('li');
        li.innerText = p;
        list.appendChild(li);
    });
}

</script>

</body>
</html>
`;

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(html);
}).listen(3000);

console.log("Server running on port 3000");
