import { useState } from "react";
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import LogoDark from "../public/img/Logo2.png"

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative z-10">
      <nav className="flex items-center h-16 max-w-full px-4 mx-auto bg-black sm:px-6 lg:px-8">
        {/* Espacio para el logo */}
        <div className="flex mb-2">
          <img 
            src={LogoDark} 
            alt="Logo" 
            style={{
              width: '100%',
              height: '180px',
            }} 
          />
        </div>

        {/* Left section with navigation links */}
        <div className="items-center flex-grow hidden ml-4 md:flex">
          <ul className="flex items-center space-x-4">
            <li className="relative text-white cursor-pointer group">
              <Link to="/">Home</Link> {/* Botón Home */}
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 mt-1"></span>
            </li>
            <li className="relative text-white cursor-pointer group">
            <Link to="/categories">Test</Link>
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 mt-1"></span>
            </li>
            <li className="relative text-white cursor-pointer group">
              Dashboard
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 mt-1"></span>
            </li>
            <li className="relative text-white cursor-pointer group">
              Support
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 mt-1"></span>
            </li>
          </ul>
        </div>

        {/* Rectángulo naranja */}
        <div className="absolute top-0 right-0 flex items-center w-48 h-16 bg-orange-500">
          <div className="flex items-center justify-between w-full pr-2 pl-7">
            {/* Mostrar botones solo en pantallas grandes */}
            <div className="hidden md:flex">
              <Link to="/login">
                <button className="px-2 py-1 mr-2 font-semibold text-orange-500 bg-white rounded hover:bg-gray-100">
                  Sign in
                </button>
              </Link>
              <Link to="/login">
                <button className="px-1 py-1 text-white bg-transparent hover:text-gray-300">
                  Log in →
                </button>
              </Link>
            </div>
            {/* Botón hamburguesa para móviles */}
            <div className="md:hidden ml-9">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white focus:outline-none"
              >
                <div className="flex flex-col w-8 h-8 space-y-1">
                  <span className="block w-8 h-1 bg-white"></span>
                  <span className="block w-8 h-1 bg-white"></span>
                  <span className="block w-8 h-1 bg-white"></span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Diagonal en el lado izquierdo */}
        <div
          className="absolute top-0 w-48 h-16 bg-orange-500 right-48"
          style={{ clipPath: "polygon(100% 0, 100% 100%, 80% 100%)" }}
        />
      </nav>

      {/* Mobile menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="px-4 pt-4 pb-4 text-white bg-gray-800 md:hidden"
        >
          <ul className="space-y-4">
            <li className="cursor-pointer hover:underline">
              <Link to="/">Home</Link> {/* Link para Home en móvil */}
            </li>
            <li className="cursor-pointer hover:underline">Test</li>
            <li className="cursor-pointer hover:underline">Dashboard</li>
            <li className="cursor-pointer hover:underline">Support</li>
          </ul>
          <div className="mt-4">
            <Link to="/login">
              <button className="w-full px-4 py-2 mb-2 text-white bg-orange-500 rounded hover:bg-orange-600">
                Sign in
              </button>
            </Link>
            <Link to="/login">
              <button className="w-full px-4 py-2 text-white bg-transparent rounded hover:text-gray-300">
                Log in →
              </button>
            </Link>
          </div>
        </motion.div>
      )}
    </header>
  );
};