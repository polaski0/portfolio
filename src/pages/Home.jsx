import React, { useEffect, useLayoutEffect, useRef } from 'react';
import '../assets/css/Home.css';
import { gsap } from 'gsap';

function Card() {
    return (
        <div className="card">
            <div className='card-overlay'></div>
        </div>
    )
};

function Home() {
    const heroRef = useRef();
    let counter = 0;

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.fromTo('.card', {
                x: '-100vw',
            },
                {
                    x: 0,
                    duration: 1,
                    ease: 'circ.out'
                });
            gsap.fromTo('.left', {
                opacity: 0,
            },
                {
                    opacity: 1
                });


        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="hero" ref={heroRef}>
            <div className="left">
                <div>
                    <h3 className='name'>Meynard Julien B. Trinidad</h3>
                    <h4 className='position'>Junior Web Developer</h4>
                </div>
                <div className='divider'></div>
                <div>
                    <p className='description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium voluptates ab magnam labore quae adipisci reprehenderit commodi optio pariatur similique! Quod assumenda unde non eaque aperiam reiciendis! Possimus, repellendus hic.</p>
                </div>
            </div>
            <div className="right">
                <div className="card">
                    <div className='card-overlay'></div>
                    <img className='card-image' src="images/Profile.jpg" alt="Meynard Julien" />
                </div>
            </div>
        </section>
    )
}

export default Home;