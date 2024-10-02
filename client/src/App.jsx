import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home.jsx';
import { LoginForm } from './pages/LoginForm.jsx';
import { Navbar } from './components/Navbar.jsx';
import { Categories } from './pages/Categories.jsx'; 
import { TestPage } from './pages/Test.jsx';
const App = () => (
  <Router>
    <div className="h-screen overflow-hidden bg-gray-100">
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/" element={<><Navbar /><Home /></>} />
        <Route path="/categories" element={<Categories/>} />
        <Route path="/test" element={<TestPage />} />
      </Routes>
    </div>
  </Router>
);


export default App;