console.log("El script se ha cargado correctamente."); //coso para verificar si el script me corria bien (tuve un problema)


document.addEventListener("DOMContentLoaded", function () {
    let form = document.querySelector("form");
    
    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault(); 

            let nombre = document.querySelector("input[type='text']").value.trim();
            let email = document.querySelector("input[type='email']").value.trim();
            let mensaje = document.querySelector("textarea").value.trim();

            if (nombre === "" || email === "" || mensaje === "") {
                alert("Por favor, completa todos los campos.");
            } else {
                alert("Mensaje enviado correctamente.");
                form.reset(); 
            }
        });
    } else {
        console.error("No se encontró el formulario.");
    }
});


