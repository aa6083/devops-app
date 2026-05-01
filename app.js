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
    background: linear-gradient(135deg, #0f2027, #2c5364);
    color: white;
}

/* NAVBAR */
.navbar {
    background: rgba(0,0,0,0.3);
    padding: 15px;
    text-align: center;
}

.navbar button {
    margin: 5px;
    padding: 10px 20px;
    background: #00c6ff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

/* PAGE */
.page {
    display: none;
    padding: 30px;
    text-align: center;
}

.active {
    display: block;
}

/* CARD */
.card {
    background: rgba(255,255,255,0.1);
    margin: 20px auto;
    padding: 20px;
    width: 320px;
    border-radius: 10px;
    backdrop-filter: blur(10px);
}

/* INPUTS */
input {
    padding: 8px;
    margin: 5px;
    width: 80%;
    border-radius: 5px;
    border: none;
}

/* BUTTON */
button.action {
    padding: 10px;
    border: none;
    background: #00ffcc;
    cursor: pointer;
    border-radius: 5px;
}

/* LIST */
ul {
    list-style: none;
    padding: 0;
}

li {
    background: rgba(255,255,255,0.1);
    margin: 5px;
    padding: 8px;
    border-radius: 5px;
}

</style>
</head>

<body>

<div class="navbar">
    <button onclick="showPage('home')">Home</button>
    <button onclick="showPage('appointments')">Appointments</button>
</div>

<!-- HOME PAGE -->
<div id="home" class="page active">
    <h1>🏥 Healthcare Management System</h1>
    <p>Secure DevSecOps Enabled Application</p>

    <div class="card">
        <h3>About</h3>
        <p>This system allows booking appointments and managing patients.</p>
        <p>Built using Node.js + Docker + CI/CD</p>
    </div>
</div>

<!-- APPOINTMENTS PAGE -->
<div id="appointments" class="page">

    <h2>📅 Book Appointment</h2>

    <div class="card">
        <input id="name" placeholder="Patient Name"><br>
        <input id="doctor" placeholder="Doctor"><br>
        <button class="action" onclick="book()">Book</button>
        <p id="msg"></p>
    </div>

    <div class="card">
        <h3>Patients</h3>
        <ul id="list"></ul>
    </div>

</div>

<script>

let patients = [];

/* NAVIGATION */
function showPage(page) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(page).classList.add('active');
}

/* BOOKING */
function book() {
    const name = document.getElementById('name').value;
    const doctor = document.getElementById('doctor').value;

    if(name && doctor){
        patients.push(name + " → Dr. " + doctor);
        document.getElementById('msg').innerText = "✅ Appointment Booked!";
        render();
    } else {
        document.getElementById('msg').innerText = "⚠ Fill all fields";
    }
}

/* RENDER LIST */
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
