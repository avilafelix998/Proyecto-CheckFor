import React from 'react';
import { useParams } from 'react-router-dom';
import { Questions } from '../components/Questions.jsx';

export const TestPage = () => {
  const  id_categoria_FK  = window.location.search;
  console.log(id_categoria_FK);
  const id = id_categoria_FK.slice(1);
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Preguntas de la Categoría</h1>
      <Questions categoryId={id} />
    </div>
  );
};
