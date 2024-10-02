import React, { useEffect, useState } from 'react';

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
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Página de Categorías</h1>
      <ul className="space-y-2">
        {categories.map((category) => (
          <a href={`/test?${category.id_categoria}`} key={category.id_categoria}>
            <li className="p-2 border rounded shadow">
              {category.categoria}
            </li>
          </a>
        ))}
      </ul>
    </div>
  );
};
