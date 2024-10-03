import React from 'react';
import { useParams } from 'react-router-dom';
import { Questions } from '../components/Questions.jsx';
import { Navbar } from '../components/Navbar.jsx';


export const TestPage = () => {
  const  id_categoria_FK  = window.location.search;
  console.log(id_categoria_FK);
  const id = id_categoria_FK.slice(1);
  return (
    <div className="p-0">
      <Navbar/>
      <h1 className="text-2xl font-bold mb-4 text-center bg-black text-orange-600">Preguntas de la Categoría</h1>
      <Questions categoryId={id} className="mx-10" />
    </div>
  );
};
