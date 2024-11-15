// import React, { createContext, useState, useContext, useEffect } from "react";

// const PreloaderContext = createContext();

// export const PreloaderProvider = ({ children }) => {
//   // Inicializa el estado con el valor de sessionStorage o con true si no existe
//   const [isLoading, setIsLoading] = useState(() => {
//     return sessionStorage.getItem("hasLoaded") ? false : true;
//   });

//   useEffect(() => {
//     // Actualiza sessionStorage cuando el estado cambia a false
//     if (!isLoading) {
//       sessionStorage.setItem("hasLoaded", "true");
//     }
//   }, [isLoading]);

//   return (
//     <PreloaderContext.Provider value={{ isLoading, setIsLoading }}>
//       {children}
//     </PreloaderContext.Provider>
//   );
// };

// // Custom hook para usar el contexto
// export const usePreloader = () => useContext(PreloaderContext);
