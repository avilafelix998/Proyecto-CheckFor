import React, { useEffect, useState } from 'react';
import { Navbar } from '../components/Navbar';

export const Categories = () => {
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    try {
      const response = await fetch('http://localhost:3000/categories', {
        method: 'GET',
        // credentials: 'include', // Descomenta si necesitas manejar autenticación
      });
      const categories = await response.json();
  
      console.log(categories);
      setCategories(categories);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div className="p-0 justify-between">
      <Navbar/>
      <h1 className="text-4xl text-orange-600 font-bold mb-4 text-center bg-black">Seleccione el area a evaluar</h1>
      <div className="flex flex-wrap m-2 justify-center">
        {categories.map((category) => (
          <a href={`/test?${category.id_categoria}`} key={category.id_categoria} className="m-2 w-full sm:w-1/2 md:w-1/3">
            <div className="p-4 border rounded shadow hover:shadow-lg transition-shadow text-orange-600 font-bold bg-gray-200">
              {category.categoria}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
  
};
