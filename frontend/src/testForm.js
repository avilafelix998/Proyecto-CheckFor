export function TestForm() {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const respuestas = Object.fromEntries(formData.entries());

    // Enviar las respuestas al backend
    try {
      const response = await fetch("http://localhost:3000/api/respuestas", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(respuestas),
      });

      const data = await response.json();
      console.log(data.message); // Mensaje del backend
    } catch (error) {
      console.error("Error al enviar las respuestas:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Test de Seguridad e Higiene</h2>

      <div>
        <label>¿Usas casco de protección?</label>
        <br />
        <input type="radio" name="cascoProteccion" value="sí" /> Sí
        <input type="radio" name="cascoProteccion" value="no" /> No
      </div>

      <div>
        <label>¿Te has capacitado en seguridad?</label>
        <br />
        <input type="radio" name="capacitacionSeguridad" value="sí" /> Sí
        <input type="radio" name="capacitacionSeguridad" value="no" /> No
      </div>

      <button type="submit">Enviar Respuestas</button>
    </form>
  );
}

const response = await fetch("http://localhost:3000/api/respuestas", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(respuestas),
});
