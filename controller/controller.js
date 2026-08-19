
document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que el formulario se envíe

    const nombre = document.getElementById("nombre").value.trim();

    if (nombre.toLowerCase() === "luis") {
        window.location.href = "CartaAmor/cartaAmor.html";
    } else {
        alert("Nombre incorrecto. Inténtalo de nuevo :c.");
    }
});