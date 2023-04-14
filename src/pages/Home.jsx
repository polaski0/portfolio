import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
import '../assets/css/Home.css';
import { gsap } from 'gsap';

function Home() {
    const heroRef = useRef('');

    useLayoutEffect(() => {
        const words = gsap.utils.toArray('.stagger');

        let ctx = gsap.context(() => {
            const t1 = gsap.timeline();
            gsap.set('.card-container', { css: { 'filter': 'grayscale(1)' } });
            gsap.set(words, { y: 10 });
            // gsap.set('.content-container', { opacity: 0, y: 10 });

            // t1.fromTo('.card-container', {
            //     opacity: 0,
            //     rotateY: 0,
            // }, {
            //     delay: 1,
            //     opacity: 1,
            //     rotateY: 360 * 2,
            //     duration: 2,
            //     ease: 'bounce'
            // })
            //     .to(
            //         '.card-container', { css: { 'filter': 'grayscale(0)' } }
            //     )
            //     .from(
            //         words, { opacity: 0, stagger: 0.2, duration: 1, y: 0 }
            //     );

            // words.forEach((word) => {
            //     const t2 = gsap.timeline();
            //     console.log(word);
            //     // t2.fromTo(word, { opacity: 0, y: 10, stagger: 1 }, { opacity: 1, y: 0, duration: 1, delay: 3, ease: 'power1.out' });
            //     t2.from(word, {
            //         autoAlpha: 0,
            //         duration: 2,
            //         stagger: 1,
            //         delay: 3
            //     });
            // });
            // .to('.content-container', { opacity: 1, y: 0, stagger: 0.2 });
        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className='hero' ref={heroRef}>
            <div className='content-wrapper'>
                <div className='content-container'>
                    <h3 className='name'>
                        <span className="stagger">Meynard</span>
                        <span className="stagger">Julien</span>
                        <span className="stagger">B.</span>
                        <span className="stagger">Trinidad</span>
                    </h3>
                    <h4 className='position'>Junior Web Developer</h4>
                </div>
                {/* <div className='divider'></div>
                <div>
                    <p className='description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium voluptates ab magnam labore quae adipisci reprehenderit commodi optio pariatur similique! Quod assumenda unde non eaque aperiam reiciendis! Possimus, repellendus hic.</p>
                </div> */}
            </div>
            <div className='card-wrapper'>
                <Card />
            </div>
        </section>
    )
}

function Card() {
    return (
        <div className='card-container'>
            <div className='card'>
                <div className='card-overlay'></div>
                <img className='card-image' src="images/Profile.jpg" alt="Meynard Julien" />
            </div>
        </div>
    )
}

export default Home;