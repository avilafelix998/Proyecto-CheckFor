import { useState,useEffect,useContext } from "react"

export default function Hola({props}){
  const [response, setResponse] = useState(0)
    const handleResponse = (num) =>{
        setResponse(num)
    }
    const {descripcion, id_categoria, id_pregunta, id_subcategoria_FK} = props
    return (<li key={id_pregunta} className={` mx-10 p-2 border rounded shadow bg-gray-200 flex justify-between items-center`}>
            <span>{descripcion}</span>
            <div>
              <input type="hidden" value={response} name={id_pregunta} /> {/*Vos no le des bola*/}
              <input type="button" value="Chi" onClick={()=>setResponse(1)} className={`${(response == 1) ? "opacity-100" : "opacity-50"}  rounded-lg bg-green-500`} />
              <input type="button" value="Ño" onClick={()=>setResponse(0)} className={`${(response == 0) ? "opacity-100" : "opacity-50"}  rounded-lg bg-red-500`} />
            </div>
          </li>)
}