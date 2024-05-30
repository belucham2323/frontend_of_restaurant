const nombre = document.getElementById("username");
const email = document.getElementById("email");
const expresion = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
document.getElementById("form_contact").addEventListener("submit", function (event) {
    const text_nombre=nombre.value;
    const text_email=email.value;
    if (text_nombre === "" || text_email === ""||!expresion.test(text_nombre)) {
      alert("Por favor, complete todos los campos obligatorios.");
      event.preventDefault(); // Evita que se envíe el formulario
    }
});