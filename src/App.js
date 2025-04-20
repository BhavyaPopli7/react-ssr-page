import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import About from './components/About';
import Home from './components/Home';
import './App.css'

function App() {
  return (
    <div>
      {/* Navigation Bar */}
      <nav className="navbar">
       <Link to="/" className="logo">OURBUS</Link>  
          
        <div className="navLinks">
          <Link to="/">
            <button className="navButton">Home</button>
          </Link>
          <Link to="/about">
            <button className="navButton">About</button>
          </Link>
          <Link to="/contact">
            <button className="navButton">Contact</button>
          </Link>
        </div>  
      </nav>

      {/* Main Content */}
      <div className="content">
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;