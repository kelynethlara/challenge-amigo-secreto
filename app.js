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