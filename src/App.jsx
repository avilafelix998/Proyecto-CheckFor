import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home.jsx';
import { LoginForm } from './pages/LoginForm.jsx';
import { Navbar } from './components/Navbar.jsx';

const App = () => (
  <Router>
    <div className="min-h-screen bg-gray-100">
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="*" element={<><Navbar /><Home /></>} />
      </Routes>
    </div>
  </Router>
);


export default App;