import { useState } from "react";

export const useCounter = () =>{
    const {counter,setCounter} = useState("hola")
    console.log(counter);
    const incrementar =  () =>{
        setCounter(counter + 1)
    }
    const decrementar =  () =>{
        setCounter(counter - 1)
    }

    return {counter,incrementar,decrementar}
}