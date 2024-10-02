// CategoryList.js

import { useState, useEffect } from "react";

export const CategoryList = () => {
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    try {
      const response = await fetch('http://localhost:3000/categories', {
        method: 'GET',
        credentials: 'include',
      });
      const categories = await response.json();
  
      console.log([categories]);
      setCategories(categories);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  useEffect(() => {
    getCategories();
    const fetchCategories = async () => {
      await getCategories(setCategories);
    };
    fetchCategories();
  }, []);

  return (
    <div>
      <ul className="space-y-2">
        {categories.map((category) => (
          <li key={category.id_categoria} className="p-2 border rounded shadow">
            {category.categoria}
          </li>
        ))}
      </ul>
    </div>
  );
};




// return questions[categories](
//   <div>
//     <h1>Categorias</h1>
//     <ul>
//       {categories.map((category) => (
//         <li key={category.id}>
//           <Link to={`/preguntas/${category.id}`}>{category.name}</Link>
//         </li>
//       ))}
//     </ul>
//   </div>
// )
