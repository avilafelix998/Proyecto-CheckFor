// Función para obtener las preguntas de una categoría
async function obtenerPreguntas(categoria) {
  try {
    const response = await fetch(
      `http://localhost:3000/api/preguntas/${categoria}`
    );
    const preguntas = await response.json();

    // Limpiar el formulario existente
    const form = document.getElementById("test-form");
    form.innerHTML = "";

    // Recorrer las preguntas y añadirlas al formulario
    preguntas.forEach((pregunta, index) => {
      const preguntaDiv = document.createElement("div");
      preguntaDiv.innerHTML = `
        <label>${pregunta.texto}</label><br>
        <input type="radio" name="pregunta${index}" value="sí"> Sí
        <input type="radio" name="pregunta${index}" value="no"> No
      `;
      form.appendChild(preguntaDiv);
    });

    // Añadir botón de envío al formulario
    const submitButton = document.createElement("button");
    submitButton.type = "submit";
    submitButton.textContent = "Enviar";
    form.appendChild(submitButton);
  } catch (error) {
    console.error("Error al obtener las preguntas:", error);
  }
}

// Ejecutar la función cuando el frontend esté cargado
document.addEventListener("DOMContentLoaded", () => {
  obtenerPreguntas("seguridad"); // Puedes cambiar 'seguridad' por la categoría que necesites
});
