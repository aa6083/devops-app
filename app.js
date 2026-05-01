const http = require('http');

const html = `
<!DOCTYPE html>
<html>
<head>
<title>Healthcare System</title>
<style>
body {
    margin:0;
    font-family: Arial;
    background: linear-gradient(135deg, #0f2027, #2c5364);
    color: white;
}

.container {
    text-align: center;
    padding: 40px;
}

.card {
    background: rgba(255,255,255,0.1);
    margin: 20px auto;
    padding: 20px;
    width: 300px;
    border-radius: 10px;
    backdrop-filter: blur(10px);
}

button {
    padding: 10px;
    border: none;
    background: #00c6ff;
    color: black;
    cursor: pointer;
    border-radius: 5px;
}

input {
    padding: 8px;
    margin: 5px;
}
</style>
</head>

<body>

<div class="container">
    <h1>Healthcare Management System</h1>
    <p>Secure DevSecOps Enabled Application</p>

    <div class="card">
        <h3> ASsadsssssssssssssssss Book Appointment</h3>
        <input id="name" placeholder="Patient Name"><br>
        <input id="doctor" placeholder="Doctor"><br>
        <button onclick="book()">Book</button>
        <p id="msg"></p>
    </div>

    <div class="card">
        <h3>Patients</h3>
        <ul id="list"></ul>
    </div>
</div>

<script>
let patients = [];

function book() {
    const name = document.getElementById('name').value;
    const doctor = document.getElementById('doctor').value;

    if(name && doctor){
        patients.push(name + " → Dr. " + doctor);
        document.getElementById('msg').innerText = "Appointment Booked!";
        render();
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
