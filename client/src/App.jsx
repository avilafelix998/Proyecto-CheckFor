import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home.jsx";
import { LoginForm } from "./pages/LoginForm.jsx";
import { Help } from "./pages/Help.jsx";
import { Sector } from "./pages/Sector.jsx";
import { Categories } from "./pages/Categories.jsx";
import { TestPage } from "./pages/Test.jsx";
import { Dashboard } from "./pages/Dashboard.jsx";
import { Kanban } from "./pages/Kanban.jsx";
import { Analytics } from "./components/Analytics"; // Asegúrate de tener este componente
import { History } from "./components/History"; // Asegúrate de tener este componente
import { DashboardContent } from "./components/DashboardContent"; // Asegúrate de tener este componente

const App = () => (
  <Router>
    <div className="bg-gradient-to-b from-black via-zinc-950 to-gray-950" style={{ fontFamily: "Roboto, sans-serif" }}>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/" element={<Home />} />
        <Route path="/help" element={<Help />} />
        <Route path="/sector" element={<Sector />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/test" element={<TestPage />} />
        <Route path="/kanban" element={<Kanban />} />
        {/* Definimos la ruta Dashboard con rutas anidadas */}
        <Route path="/dashboard" element={<Dashboard />}>
          {/* Rutas anidadas que cambian el contenido de la parte derecha */}
          <Route path="dashboardcontent" element={<DashboardContent />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="history" element={<History />} />
        </Route>
      </Routes>
    </div>
  </Router>
);

export default App;
