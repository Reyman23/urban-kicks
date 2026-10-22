const imagenes = [
    {
        ruta: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1000&q=80",
        titulo: "Zapatillas urbanas",
        descripcion: "Zapatilla deportiva roja"
    },
    {
        ruta: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1000&q=80",
        titulo: "Estilo deportivo",
        descripcion: "Zapatillas deportivas para todos los dias"
    },
    {
        ruta: "https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?auto=format&fit=crop&w=1000&q=80",
        titulo: "Moda urbana",
        descripcion: "Calzado de estilo urbano"
    }
];

const imagen = document.getElementById("imagen-destacada");
const titulo = document.getElementById("titulo-imagen");
const anterior = document.getElementById("anterior");
const siguiente = document.getElementById("siguiente");

let indiceActual = 0;

function mostrarImagen() {
    imagen.src = imagenes[indiceActual].ruta;
    imagen.alt = imagenes[indiceActual].descripcion;
    titulo.textContent = imagenes[indiceActual].titulo;
}

anterior.addEventListener("click", function () {
    indiceActual--;

    if (indiceActual < 0) {
        indiceActual = imagenes.length - 1;
    }

    mostrarImagen();
});

siguiente.addEventListener("click", function () {
    indiceActual++;

    if (indiceActual >= imagenes.length) {
        indiceActual = 0;
    }

    mostrarImagen();
});

mostrarImagen();