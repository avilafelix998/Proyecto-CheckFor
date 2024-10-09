import React from 'react';
import Bg1 from '../public/img/Bg4.png';
import Bg2 from '../public/img/Bg10.png';
import Bg3 from '../public/img/Bg11.png';

const Card = ({ title, text, image }) => {
  return (
    <div className="max-w-sm m-4 overflow-hidden transition-transform duration-300 transform rounded hover:scale-105">
      <div className="relative z-20 flex items-center justify-center bg-black h-44">
        <div className="absolute transition-transform duration-300 top-10 hover:scale-110">
          <img src={image} alt={title} className="object-cover rounded-t w-14 h-14 brightness-0 invert" />
        </div>
        <h2 className="absolute bottom-0 p-2 mb-4 text-lg font-bold text-orange-600 bg-opacity-70">
          {title}
        </h2>
      </div>
      <div className="relative z-10 bg-white h-44" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 94%)' }}>
        <div className="p-3 ml-1">
          <p className="text-base text-gray-700">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
};

export const Example = () => {
  const cards = [
    {
      image: Bg1,
      title: 'Sector de Construcción',
      text: 'Implica múltiples actividades y riesgos, desde excavaciones hasta edificaciones complejas. Es crucial adoptar prácticas seguras, capacitar a los trabajadores, proporcionar EPP y realizar revisiones para garantizar un entorno seguro.',
    },
    {
      image: Bg2,
      title: 'Sector Industrial',
      text: 'Comprende actividades como fabricación, ensamblaje y distribución. Enfrenta riesgos con la maquinaria y sustancias químicas. Es vital la capacitación y el cumplimiento de normas para proteger a los empleados.',
    },
    {
      image: Bg3,
      title: 'Sector Institucional',
      text: 'Abarca escuelas e instituciones, donde la seguridad e higiene es fundamental. Se deben establecer protocolos claros para prevenir incidentes y garantizar un entorno seguro, especialmente en lugares de alta concurrencia.',
    }
  ];

  return (
    <div className="flex flex-wrap justify-center mt-3">
      {cards.map((card, index) => (
        <Card 
          key={index} 
          title={card.title} 
          text={card.text} 
          image={card.image}
        />
      ))}
    </div>
  );
};



