// Questions.js
import React, { useEffect, useState } from 'react';
import { Navbar } from './Navbar';

const getQuestions = async (categoryId, setQuestions) => {
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
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      await getQuestions(categoryId, setQuestions);
    };
    fetchQuestions();
  }, [categoryId]);

  const handleResponse = (questionId, response) => {
    sendResponse(questionId, response);
    setQuestions(prevQuestions =>
      prevQuestions.map(q => 
        q.id_pregunta === questionId ? { ...q, selectedResponse: response } : { ...q, selectedResponse: null }
      )
    );
  };

  return (
    <div>
      <ul className="space-y-2">
        {questions.map((question) => (
          <li key={question.id_pregunta} className="mx-10 p-2 border rounded shadow bg-gray-200 flex justify-between items-center">
            <span>{question.descripcion}</span>
            <div>
              <button 
                onClick={() => handleResponse(question.id_pregunta, 1)} 
                className={`bg-green-500 text-white px-2 py-1 rounded mr-2 ${question.selectedResponse === 1 ? 'opacity-100' : 'opacity-50'}`}
              >
                ✓
              </button>
              <button 
                onClick={() => handleResponse(question.id_pregunta, 0)} 
                className={`bg-red-500 text-white px-2 py-1 rounded ${question.selectedResponse === 0 ? 'opacity-100' : 'opacity-50'}`}
              >
                X
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
