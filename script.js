var compteur = document.getElementById("compteur");
var clic = document.getElementById("clic");
var img = document.getElementById("img");
var compteurclic = 0;
var resetbtn = document.getElementById("reset");

clic.addEventListener("click", function() {
    compteurclic++;
    compteur.textContent = compteurclic;
    img.style.display = "block";

    if (compteurclic >= 5) {
        clic.style.backgroundColor = "black";
    }

    if (compteurclic >= 10) {
        clic.style.backgroundColor = "purple";
    }

    if (compteurclic >= 15) {
        clic.style.backgroundColor = "green";
    }

    if (compteurclic === 21) {
        compteur.textContent = "STOP";
        compteur.style.color = "red";
        compteur.style.fontSize = "5em";
        clic.style.display = "none";
    }
});

resetbtn.addEventListener("click", function() {
    compteurclic = 0;
    compteur.textContent = compteurclic;
    img.style.display = "none";
    clic.style.backgroundColor = "blue";
    clic.style.display = "block";
});

