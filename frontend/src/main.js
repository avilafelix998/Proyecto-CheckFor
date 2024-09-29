document
  .getElementById("test-form")
  .addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("http://localhost:3000/api/respuestas", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      console.log(result.message);
      alert("Respuestas enviadas correctamente");
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
    }
  });
