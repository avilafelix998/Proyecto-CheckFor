import { Navbar } from '../components/Navbar.jsx';
import { Sidebar } from '../components/Sidebar.jsx';
import { Outlet } from 'react-router-dom'; // Esto te permitirá renderizar las rutas anidadas

export const Dashboard = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar /> {/* Sidebar permanece fija */}
      
      <div className="flex-1">
        
        {/* El Outlet se utiliza para renderizar las rutas hijas */}
        <div className="p-4">
          <Outlet /> {/* Aquí se renderizan los componentes según la ruta seleccionada */}
        </div>
      </div>
    </div>
  );
};
