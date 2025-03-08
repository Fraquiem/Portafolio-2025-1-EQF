// ✅ Verifica si el script se ejecuta correctamente
console.log("El script se ha cargado correctamente.");


document.addEventListener("DOMContentLoaded", function () {
    let form = document.querySelector("form");
    
    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault(); // Evita el envío automático

            let nombre = document.querySelector("input[type='text']").value.trim();
            let email = document.querySelector("input[type='email']").value.trim();
            let mensaje = document.querySelector("textarea").value.trim();

            if (nombre === "" || email === "" || mensaje === "") {
                alert("Por favor, completa todos los campos.");
            } else {
                alert("Mensaje enviado correctamente.");
                form.reset(); // Limpia el formulario después del envío
            }
        });
    } else {
        console.error("No se encontró el formulario.");
    }
});


