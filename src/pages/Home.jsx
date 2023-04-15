import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
import '../assets/css/Home.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Icon } from '@iconify/react';

gsap.registerPlugin(ScrollTrigger);

function Home() {
    const heroRef = useRef('');

    useLayoutEffect(() => {
        const words = gsap.utils.toArray('.stagger');

        let ctx = gsap.context(() => {
            const t1 = gsap.timeline();
            gsap.set('.card-container', { css: { 'filter': 'grayscale(1)' } });

            t1.fromTo('.card-container', {
                opacity: 0,
                rotateY: 0,
            }, {
                delay: 1,
                opacity: 1,
                rotateY: 360 * 2,
                duration: 1.5,
                ease: 'bounce',
            })
                .to('.card-container', {
                    css: { 'filter': 'grayscale(0)' }, duration: 0.2
                })
                .from('.backdrop', {
                    display: 'none'
                }).from(words, {
                    autoAlpha: 0,
                    stagger: 0.1,
                    y: '100%',
                    ease: 'expo'
                }).from('.mouse-wrapper', {
                    display: 'none',
                    y: innerHeight,
                    ease: 'expo'
                });
        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id='hero-page' className='hero' ref={heroRef}>
            <div className='content-wrapper'>
                <div className='content-container'>
                    <div className='name'>
                        <h3 className="stagger">Meynard</h3>
                        <h3 className="stagger">Julien</h3>
                        <h3 className="stagger">B.</h3>
                        <h3 className="stagger">Trinidad</h3>
                    </div>
                    <div className="position">
                        <h4 className="stagger">Junior</h4>
                        <h4 className="stagger">Web</h4>
                        <h4 className="stagger">Developer</h4>
                    </div>
                </div>
            </div>
            <div className='card-wrapper'>
                <Card />
            </div>
            <div className='mouse-wrapper'>
                <Icon icon="bi:mouse" />
                <Icon icon="material-symbols:arrow-back-ios-new-rounded" className='arrow-icon' rotate={3} />
            </div>
        </section>
    )
}

function Card() {
    return (
        <>
            <div className='card-container'>
                <div className='card'>
                    <div className='card-overlay'></div>
                    <img className='card-image' src="images/Profile.jpg" alt="Meynard Julien" />
                </div>
            </div>
            <div className="backdrop"></div>
        </>
    )
}

export default Home;