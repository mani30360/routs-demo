import React from 'react';
import NavBar from './NavBar';
import Home from './Home';
import About from './About';
import ContactForm from './ContactForm';
import User from './User';

import Success from './SuccessPage';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {


  return (
    <BrowserRouter>

      <NavBar />
      <div className="container-fluid">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ContactForm" element={<ContactForm />} />
          <Route path="/About" element={<About />} />
          <Route path="/User" element={<User />} />

          <Route path="/Success" element={<Success />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
