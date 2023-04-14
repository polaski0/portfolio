import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Canvas, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';

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
  const appRef = useRef('');

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo('.navbar', { y: -innerHeight }, { y: 0, duration: 1.5, ease: 'sine' });
    }, appRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="App" ref={appRef}>

      <Navbar />

      <Home />

      <Projects />

      <About />

    </div>
  )
};

export default App;
