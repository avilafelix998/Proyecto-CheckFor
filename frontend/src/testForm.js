const response = await fetch("http://localhost:3000/api/respuestas", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(respuestas),
});
