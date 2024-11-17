import { useState } from "react";

export default function Hola({props}) {
  const [response, setResponse] = useState(0);
  
  const handleResponse = (num) => {
    setResponse(num);
  };

  const getBackgroundColor = (value) => {
    switch (value) {
      case "3":
        return "bg-red-500"; // Rojo para bajo
      case "4":
        return "bg-yellow-500"; // Amarillo para medio
      case "5":
        return "bg-green-500"; // Verde para alto
      default:
        return "bg-gray-300"; // Fondo por defecto
    }
  };

  const { descripcion, id_categoria, id_pregunta, id_subcategoria_FK, id_boton_FK } = props;

  return (
    <li key={id_pregunta} className={`mx-5 p-4 w-full rounded shadow bg-gray-200 flex justify-between items-center`}>
      <span>{descripcion}</span>
      {
        !(id_boton_FK == 2) ? 
        <div className="text-white">
          <input type="hidden" value={response} name={id_pregunta} />
          <input 
            type="button" 
            value="si" 
            onClick={() => setResponse(1)} 
            className={`${(response == 1) ? "opacity-100" : "opacity-50"} -mr-1 w-20 h-8 shadow bg-green-500`} 
            style={{ clipPath: "polygon(100% 0, 80% 100%, 0 100%, 0 0)" }} 
          />
          <input 
            type="button" 
            value="no" 
            onClick={() => setResponse(0)} 
            className={`${(response == 0) ? "opacity-100" : "opacity-50"} -ml-1 w-20 h-8 shadow bg-red-500`} 
            style={{ clipPath: "polygon(20% 0, 100% 0, 100% 100%, 0 100%)" }} 
          />
        </div> : 
        <div>
          <select 
            name={id_pregunta} 
            id="boton" 
            value={response} 
            onChange={(e) => handleResponse(e.target.value)} 
            className={`${getBackgroundColor(response)} text-white py-2 px-4 rounded shadow focus:outline-none`}>
            <option value="3">Bajo</option>
            <option value="4">Medio</option>
            <option value="5">Alto</option>
          </select>
        </div>
      }
    </li>
  );
}
