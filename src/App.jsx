import { useState } from 'react';

import Navbar from './components/Navbar';

import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';

/**
 * Outline
 * 
 * Home
 * About
 * Projects
 *  - Barangay Management System
 *  - PAKiTsek
 *  - Sicat Dental Clinic
 * 
 */

function App() {

  return (
    <div className="App">

      <Navbar />

      <Home />

      <About />

      <Projects />

    </div>
  )
};

export default App;
