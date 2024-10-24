export const logoutUsers = async () => {
    try {
        const response = await fetch("http://localhost:3000/logout", {
            method: "POST",
            credentials: "include",  // Para asegurarse de que las cookies se envíen
        });

        if (response.ok) {
            window.location.href = "/login";  // Redirigir al login después del logout
        }
    } catch (error) {
        console.error("Error al cerrar la sesión", error);
    }
};






