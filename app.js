// Lista para almacenar los nombres
let nombres = [];
 
// Función para agregar nombres al array y mostrarlos
function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim(); // Eliminar nombres en blanco

    if (nombre === "") {
        alert("No puedes agregar un nombre vacío. Porfavor escribe algo.");
        return;
    }

    nombres.push(nombre); // Agregar al array
    input.value = ""; // Limpiar el campo de texto
    mostrarLista(); // Actualizar la lista en pantalla
}

// Función para mostrar los nombres
function mostrarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar la lista antes de volver a mostrar

    nombres.forEach(nombre => {
        let li = document.createElement("li");
        li.textContent = nombre;
        lista.appendChild(li);
    });
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    if (nombres.length < 2) {
        alert("Debes ingresar al menos 2 nombres para realizar el sorteo.");
        return;
    }

    let indiceGanador = Math.floor(Math.random() * nombres.length);
    let ganador = nombres[indiceGanador];

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>🎉 Tu Amigo Secreto es: <strong>${ganador}</strong> 🎉</li>`;
}