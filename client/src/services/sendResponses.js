const sendResponses = async (data) => {
    console.log(data)
    fetch("http://localhost:3000/respuestas",{
        method:"POST",
        body:JSON.stringify(data),
        headers:{
            "Content-Type":"application/json"
        }
    }).then((el)=>console.log("acá",el.json()))
}

export default sendResponses;