// LANGKAH 2 
const btnStart = document.getElementById('btnStart');
const btnStop = document.getElementById('btnStop');
const btnReset = document.getElementById('btnReset');
const statusIndicator = document.getElementById('statusIndicator');
const suhuMesin = document.getElementById('suhuMesin');

const teksStatus = statusIndicator.querySelector('strong');

let suhu = 25;
let intervalId = null;

// LANGKAH 3 
btnStart.addEventListener('click', function() {
    statusIndicator.className = 'alert alert-success';
    teksStatus.innerText = 'RUNNING';

    intervalId = setInterval(function() {
        suhu += 1;
        suhuMesin.innerText = suhu + " °C";

        if (suhu > 80) {
            statusIndicator.className = 'alert alert-danger';
            teksStatus.innerText = 'OVERHEAT';
            suhuMesin.style.color = 'red';
        }
    }, 1000);

    btnStart.disabled = true;
    btnStop.disabled = false;
});

btnStop.addEventListener('click', function() {
    clearInterval(intervalId);
    statusIndicator.className = 'alert alert-secondary';
    teksStatus.innerText = 'STOPPED';

    btnStart.disabled = false;
    btnStop.disabled = true;
});

btnReset.addEventListener('click', function() {
    clearInterval(intervalId);
    suhu = 25;
    suhuMesin.innerText = suhu + " °C";
    suhuMesin.style.color = 'black';

    statusIndicator.className = 'alert alert-secondary';
    teksStatus.innerText = 'UNKNOWN';

    btnStart.disabled = false;
    btnStop.disabled = true;
});

// LANGKAH 4 
const inputRPM = document.getElementById('inputRPM');
const pesanError = document.getElementById('pesanError');

inputRPM.addEventListener('input', function() {
    let value = parseInt(inputRPM.value);

    if (value > 2000) {
        pesanError.style.display = 'block';
    } else {
        pesanError.style.display = 'none';
    }
});

// LATIHAN 1 
const btnMaintenance = document.createElement("button");
btnMaintenance.innerText = "Maintenance Mode";
document.body.appendChild(btnMaintenance);

btnMaintenance.addEventListener("click", function() {
    statusIndicator.className = "alert alert-light";
    teksStatus.innerText = "MAINTENANCE";
});

// LATIHAN 2 
suhuMesin.addEventListener("mouseover", function() {
    suhuMesin.style.color = "blue";
    suhuMesin.style.fontWeight = "bold";
});

suhuMesin.addEventListener("mouseout", function() {
    suhuMesin.style.color = "black";
    suhuMesin.style.fontWeight = "normal";
});