const logoutUsers =(e) => { 
    e.preventDefault()
    try {
        localStorage.removeItem("token")
        window.location.href = "/login"
    } catch (error) {
        console.error("Error al cerrar sesion", error)
        alert("Error al cerrar sesión")
    }
}
