@@ -0,0 +1,43 @@
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