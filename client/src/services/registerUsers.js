export const registerUsers = async (e)=>{
    
    e.preventDefault()

    const name = document.getElementById("name").value.trim()
    const email = document.getElementById("email").value.trim()
    const password = document.getElementById("password").value
    const passwordRepeat = document.getElementById("password-repeat").value

    if (!name || !email || !password || !passwordRepeat) {
        return alert("todos los campos deben ser completados")
    }
    if (passwordRepeat !== password) {
        return alert("las contraseñas no son iguales")
    }

    try {
        const response = await fetch("http://localhost:3000/register",{
            method: "POST",
            body: JSON.stringify({name,email,password}),
            headers:{
                "Content-type":"application/json"
            }
        })
        if (response.ok) {
            window.location.href = "/login"
        }
        else {
            console.error("error al registrarse")
            alert("error al registrarse")
        }
    } catch (error) {
        console.error("error al registrar el usuario",error);
    }
    
}

