// Questions.js
import React, { useEffect, useState, useContext, createContext, useReducer } from 'react';
import { Navbar } from './Navbar';
import Question from './Question';

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

const sendResponse = async (questionId, response) => {
  try {
    const responseToSend = await fetch(`http://localhost:3000/responses`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ questionId, response }),
    });
    if (!responseToSend.ok) {
      throw new Error('Error sending response');
    }
    console.log('Response sent:', response);
  } catch (error) {
    console.error('Error sending response:', error);
  }
};

export const Questions = ({ categoryId }) => {
  const [category, setCategory] = useState()
  const [subCategories, setSubcategories ] = useState([])
  const [questions, setQuestions] = useState([]);
  const [max, setMax] = useState()
  const [name,setName] = useState("")
  const [option, setOption] = useState(0)

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
      console.log('es lo mismo',els);
      setName(els.subcategoria)
    }
  }))
}

,[category])
  // const handleResponse = (questionId, response) => {
  //   sendResponse(questionId, response);
  //   setQuestions(prevQuestions =>
  //     prevQuestions.map(q => 
  //       q.id_pregunta === questionId ? { ...q, selectedResponse: response } : { ...q, selectedResponse: null }
  //     )
  //   );
  // };
  const reducer = () =>{
    console.log('hoal');
  }
  const [respuestas, setRespuestas] = useReducer(reducer,0)

  return ( 

    <div>
      <h1 className='ml-8 text-white'>{name}</h1> 
      <button onClick={()=>(category + 1 == max)? window.location.href = `/categories`: setCategory(category + 1)} className='px-2 py-1 mb-4 ml-8 font-semibold text-white bg-orange-600 rounded hover:bg-orange-500' > siguiente</button>
      <ul className="space-y-2">
        {questions.map((question,index) => {
          return question.id_subcategoria_FK == category ?
          (
            <Question props={question}/>
          ) : <></>})}
      </ul>
    </div>
  );
};
