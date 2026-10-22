
const formulario = document.getElementById("formulario-contacto");

const campos = {
    nombre: document.getElementById("nombre"),
    correo: document.getElementById("correo"),
    telefono: document.getElementById("telefono"),
    mensaje: document.getElementById("mensaje")
};

const resultado = document.getElementById("resultado");

function mostrarError(campo, mensaje) {
    const entrada = campos[campo];
    const error = document.getElementById("error-" + campo);

    error.textContent = mensaje;
    entrada.classList.toggle("campo-invalido", mensaje !== "");
    entrada.setAttribute("aria-invalid", mensaje !== "" ? "true" : "false");
}

formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();

    const datos = {
        nombre: campos.nombre.value.trim(),
        correo: campos.correo.value.trim(),
        telefono: campos.telefono.value.trim(),
        mensaje: campos.mensaje.value.trim()
    };

    let valido = true;

    resultado.replaceChildren();

    Object.keys(campos).forEach(function(campo) {
        mostrarError(campo, "");
    });

    // Validar nombre
    if (datos.nombre.length < 2 || datos.nombre.length > 50) {
        mostrarError(
            "nombre",
            "El nombre debe tener entre 2 y 50 caracteres."
        );
        valido = false;
    }

    // Validar correo electrónico
    const patronCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (
        !patronCorreo.test(datos.correo) ||
        datos.correo.length > 100
    ) {
        mostrarError(
            "correo",
            "Ingresá un correo electrónico válido."
        );
        valido = false;
    }

    // Validar teléfono
    const patronTelefono = /^[0-9+\s()-]{8,20}$/;

    if (!patronTelefono.test(datos.telefono)) {
        mostrarError(
            "telefono",
            "Ingresá un teléfono válido de 8 a 20 caracteres."
        );
        valido = false;
    }

    // Validar mensaje
    if (datos.mensaje.length < 10 || datos.mensaje.length > 500) {
        mostrarError(
            "mensaje",
            "El mensaje debe tener entre 10 y 500 caracteres."
        );
        valido = false;
    }

    // Si hay errores, no mostrar el resumen
    if (!valido) {
        return;
    }

    // Crear el resumen con elementos del DOM
    const resumen = document.createElement("div");
    resumen.classList.add("mensaje-exito");

    const titulo = document.createElement("h2");
    titulo.textContent = "¡Formulario validado correctamente!";

    const textoNombre = document.createElement("p");
    textoNombre.textContent = "Nombre: " + datos.nombre;

    const textoCorreo = document.createElement("p");
    textoCorreo.textContent = "Correo: " + datos.correo;

    const textoTelefono = document.createElement("p");
    textoTelefono.textContent = "Teléfono: " + datos.telefono;

    const textoMensaje = document.createElement("p");
    textoMensaje.textContent = "Mensaje: " + datos.mensaje;

    resumen.appendChild(titulo);
    resumen.appendChild(textoNombre);
    resumen.appendChild(textoCorreo);
    resumen.appendChild(textoTelefono);
    resumen.appendChild(textoMensaje);

    resultado.appendChild(resumen);

    formulario.reset();
});
