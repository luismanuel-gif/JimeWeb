
//variables
const botonSi = document.getElementById("si");
const botonNo = document.getElementById("no");

// Si le gustó
botonSi.addEventListener("click", () => {
    window.location.href = "https://youtu.be/p_1Osm5xE5Y?si=qSko4NtahqLJh70X";
});

// Hacemos que el botón "No me gustó" huya
botonNo.addEventListener("mouseover", moverBoton);
botonNo.addEventListener("click", moverBoton);

function moverBoton(){

    const ancho = window.innerWidth - botonNo.offsetWidth - 20;
    const alto = window.innerHeight - botonNo.offsetHeight - 20;

    const x = Math.random() * ancho;
    const y = Math.random() * alto;

    botonNo.style.position = "fixed";
    botonNo.style.left = x + "px";
    botonNo.style.top = y + "px";
}