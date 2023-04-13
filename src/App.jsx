import { useState } from 'react';

import Navbar from './components/Navbar';

import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';

/**
 * Outline
 * 
 * Home
 * Projects
 *  - Barangay Management System
 *  - PAKiTsek
 *  - Sicat Dental Clinic
 * About
 * 
 */

function App() {

  return (
    <div className="App">

      <Navbar />

      <Home />

      <Projects />

      <About />

    </div>
  )
};

export default App;
