import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
import '../assets/css/Projects.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Projects() {
    const projectsRef = useRef('');

    return (
        <div id='projects-page' ref={projectsRef}>
            <p>Projects</p>
        </div>
    )
}

export default Projects;