import React from 'react';
import { useParams } from 'react-router-dom';
import { Questions } from '../components/Questions.jsx';
import { Navbar } from '../components/Navbar.jsx';
import { BackgroundCellAnimation } from '../components/BgCell.jsx';


export const TestPage = () => {
  const  id_categoria_FK  = window.location.search;
  console.log(id_categoria_FK);
  const id = id_categoria_FK.slice(1);
  return (
    

    <div className="flex flex-col min-h-screen">
      <Navbar/>
      <BackgroundCellAnimation text="COMPLETE LA CATEGORÍA" />

      <Questions categoryId={id} className="mx-10" />
    </div>
  );
};
