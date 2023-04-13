import React, { useLayoutEffect, useRef } from 'react';
import '../assets/css/Home.css';
import { gsap } from 'gsap';

function Home() {

    const cardRef = useRef();

    useLayoutEffect(() => {
        gsap.to(cardRef.current, {
            rotation: '+=360'
        })
    });

    return (
        <section className="hero">
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
                <div className="card" ref={cardRef}>
                    <div className='card-overlay'></div>
                    <img className='card-image' src="images/Profile.jpg" alt="Meynard Julien" />
                </div>
            </div>
        </section>
    )
}

export default Home;