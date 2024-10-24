export const loginUsers = async (e)=>{
    e.preventDefault()
    const emailLogin = document.getElementById("emailLogin").value.trim()
    const passwordLogin = document.getElementById("passwordLogin").value

    if ( !emailLogin || !passwordLogin) {
        return alert("todos los campos deben ser completados")
    }
   
    try {
        const response = await fetch("http://localhost:3000/login",{
            method: "POST",
            body: JSON.stringify({emailLogin,passwordLogin}),
            headers:{
                "Content-type":"application/json"
            },
             credentials: "include"
        })
        if (response.ok) {
            window.location.href = "/"
        }
        else {
            console.error("error al iniciar sesion")
            alert("error al iniciar sesion")
        }
    } catch (error) {
        console.error("error al registrar el usuario",error);
    }
    
}

