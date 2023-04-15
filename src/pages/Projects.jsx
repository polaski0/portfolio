import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
import '../assets/css/Projects.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Projects
 *  Barangay Management System (Laravel, JavaScript, Tailwind CSS)
 *  PAKiTsek (CodeIgniter, JavaScript, CSS)
 *  
 *  
 */

function Projects() {
    const projectsRef = useRef('');

    return (
        <div id='projects-page' ref={projectsRef}>
            <h3>Projects</h3>
        </div>
    )
}

export default Projects;