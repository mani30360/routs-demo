import React from 'react';
import NavBar from './NavBar';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import User from './User';
import Success from './SuccessPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="container-fluid">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/About" element={<About />} />
          <Route path="/User" element={<User />} />
          <Route path="/Success" element={<Success />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
