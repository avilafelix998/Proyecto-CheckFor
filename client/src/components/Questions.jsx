// Questions.js
import React, { useEffect, useState } from 'react';

const getQuestions = async ( categoryId, setQuestions) => {
  try {
    const response = await fetch(`http://localhost:3000/test/${categoryId}`, {
      method: 'GET'
  });
    const questions = await response.json();
    console.log(questions);
    setQuestions(questions);
    
  } catch (error) {
    console.error('Error fetching questions:', error);
  }
};

export const Questions = ({ categoryId }) => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      await getQuestions(categoryId, setQuestions);
    };
    fetchQuestions();
  }, [categoryId]);

  return (
    <div>
      <ul className="space-y-2">
        {questions.map((question) => (
          <li key={question.id_pregunta} className="p-2 border rounded shadow">
            {question.descripcion} {/* Asegúrate de que esta propiedad coincida con tus datos */}
          </li>
        ))}
      </ul>
    </div>
  );
};