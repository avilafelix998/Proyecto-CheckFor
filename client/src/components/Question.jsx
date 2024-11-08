import { useState,useEffect,useContext } from "react"
import {useCounterContext} from "../context/RespuestasProvider.jsx"

export default function Hola({props}){
    const {incrementar , decrementar, counter} = useCounterContext()
    console.log(counter);
    const handleResponse = (num) =>{
        setOption(num)
    }
    const {descripcion, id_categoria, id_pregunta, id_subcategoria_FK} = props
    return (<li key={id_pregunta} className={` mx-10 p-2 border rounded shadow bg-gray-200 flex justify-between items-center`}>
            <span>{descripcion}</span>
            <div>
              <button 
                onClick={incrementar}
                className={`bg-green-500 text-white px-2 py-1 rounded mr-2 `}
              >
                ✓
              </button>
              <button 
                className={`bg-red-500 text-white px-2 py-1 rounded`}
                onClick={()=>console.log(counter)}
              >
                X
              </button>
            </div>
          </li>)
}