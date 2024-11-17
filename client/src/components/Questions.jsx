import React, { useEffect, useState } from 'react';
import Question from './Question';
import sendResponses from '../services/sendResponses';
import { motion, AnimatePresence } from "framer-motion";


const getQuestions = async (categoryId, setQuestions) => {
  try {
    const response = await fetch(`http://localhost:3000/test/${categoryId}`, {
      method: 'GET'
    });
    const questions = await response.json();
    setQuestions(questions)
  } catch (error) {
    console.error('Error fetching questions:', error);
  }
};


export const Questions = ({ categoryId }) => {
  const [category, setCategory] = useState()
  const [questions, setQuestions] = useState([]);
  const [max, setMax] = useState()
  const [name,setName] = useState("")

  useEffect(() => {
    const fetchQuestions = async () => {
      await getQuestions(categoryId, setQuestions)
    };
    fetchQuestions();

  }, [categoryId]);

  useEffect(()=>{
    const menor = Math.min(...questions.map(el => el.id_subcategoria_FK))
    const mayor = Math.max(...questions.map(el => el.id_subcategoria_FK))
    setCategory(menor)
    setMax(mayor)


},[questions])

useEffect(()=>{
  fetch("http://localhost:3000/subcategorias").then((res)=>res.json()).then((el)=>el.map((els)=>{
    if (els.id_subcategorias == category ) {
      setName(els.subcategoria)
    }
  }))
}

,[category])

  return ( 

    <AnimatePresence mode="wait">
      <motion.div
        key={category} // Cambia según la categoría para activar la animación
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <div>
          <div className="relative top-6 mx-12 shadow-lg bg-orange-600 w-4/5 md:w-2/6 rounded-bl-[80px] rounded-tr-[80px]">
            <h1
              className="py-3 mb-2 text-center text-white"
              style={{ fontFamily: "Kdam Thmor Pro, sans-serif" }}
            >
              {name}
            </h1>
          </div>
          <div className="mb-10 flex items-center justify-center mx-auto max-w-7xl md:px-8 py-6 bg-gray-400/20 md:rounded-bl-[80px] md:rounded-tr-[80px]">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.target);
                let otroForm = {};
                formData.forEach((value, key) => {
                  otroForm[key] = value;
                });
                if (formData) {
                  console.log("aca");
                  sendResponses(otroForm);
                }
              }}
            >
              <ul className="flex flex-wrap items-center justify-center mt-6 mb-4 space-y-2 max-w-7xl">
                {questions.map((question, index) => {
                  return question.id_subcategoria_FK == category ? (
                    <Question props={question} />
                  ) : null;
                })}
              </ul>

              <button
                className="px-2 py-1 mb-4 ml-8 font-semibold text-orange-600 bg-white rounded hover:bg-white/90"
                type="submit"
              >
                Subir
              </button>

              <button
                onClick={() =>
                  category + 1 == max
                    ? (window.location.href = `/categories`)
                    : setCategory(category + 1)
                }
                className="px-2 py-1 mb-4 ml-8 font-semibold text-white bg-orange-600 rounded hover:bg-orange-500"
              >
                Siguiente
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}