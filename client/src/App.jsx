import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home.jsx";
import { LoginForm } from "./pages/LoginForm.jsx";
import { Help } from "./pages/Help.jsx";
import { Sector } from "./pages/Sector.jsx";
import { Categories } from "./pages/Categories.jsx";
import { TestPage } from "./pages/Test.jsx";
import { Kanban } from "./pages/Kanban.jsx";


const App = () => {
  return (
    <Router>
      <div
        className="h-screen bg-slate-950"
        style={{ fontFamily: "Roboto, sans-serif" }}
      >
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route
            path="/"
            element={
              <>
                <Home />
              </>
            }
          />
          <Route path="/help" element={<Help />} />
          <Route path="/sector" element={<Sector />} />
        <Route path="/categories" element={<Categories />} />
          <Route path="/test" element={<TestPage />} />
          <Route path="/kanban" element={<Kanban />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
