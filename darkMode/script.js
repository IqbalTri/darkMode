let body = document.body;
let info = document.getElementById("info");
let mode = document.getElementById("mode");
let home = document.getElementById("home");

const darkLimit = 5;
let darkCounter = 0;
let darkRemainingLeft;

function darkMode() {
    if(darkRemainingLeft == 1){
        info.textContent = "jatah fitur darkmode anda sudah habis";
        mode.style.display = "none"
        home.textContent = "RESTART"
        return;
    }

    darkCounter += 1;
    darkRemainingLeft = darkLimit - darkCounter;

    // render ke info element
    info.textContent = `Darkmode dipakai ${darkCounter}X, tersisa ${darkRemainingLeft}`;

    body.classList.toggle("dark");
}

function reRender() {
    location.reload();
}