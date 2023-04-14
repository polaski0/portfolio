import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
import '../assets/css/Home.css';
import { gsap } from 'gsap';
import { Canvas, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';

function Card({ dimensions }) {
    // console.log(dimensions);
    const meshRef = useRef(null);
    const texture = useLoader(TextureLoader, 'images/Profile.jpg');

    useLayoutEffect(() => {
        if (!meshRef.current) {
            return;
        }

        let ctx = gsap.context(() => {
            const t1 = gsap.timeline();
            gsap.to(meshRef.current.rotation, { z: -6.5, duration: 1.2, ease: 'power2.out' });

            // t1.fromTo(meshRef.current.position, { y: 10 }, { y: 0, duration: 1.4, ease: 'power4.out' });

            t1.fromTo(meshRef.current.position, { y: 10 }, { y: -10, duration: 0.5, repeat: 2 })
                .fromTo(meshRef.current.position, { y: 10 }, { y: -10, duration: 0.8, repeat: 1 })
                .fromTo(meshRef.current.position, { y: 10 }, {
                    y: 0, duration: 1, ease: 'power4.out'
                })
        }, meshRef);

        return () => ctx.revert();
    }, []);

    return (
        <mesh ref={meshRef}>
            <boxGeometry args={[
                2,
                2,
                0.01]} />
            <meshBasicMaterial map={texture} />
            {/* <boxGeometry args={[
                2036 / window.innerWidth,
                2048 / window.innerHeight,
                0.01]} />
            <meshBasicMaterial map={texture} /> */}
        </mesh>
    )
}

function Home() {
    const heroRef = useRef('');
    const cameraRef = useRef('');
    const [imageDimensions, setImageDimensions] = useState({});

    // useLayoutEffect(() => {
    //     let ctx = gsap.context(() => {
    //         gsap.fromTo('.card-wrapper', { y: -innerHeight }, { y: 0, duration: 2, ease: 'sine' });
    //         gsap.to('.card-wrapper', { rotateX: -360, rotateY: 360, rotateZ: 12, duration: 2 });
    //     }, heroRef);

    //     return () => ctx.revert();
    // }, []);

    useLayoutEffect(() => {
        if (!cameraRef.current) {
            return;
        }

        console.log(cameraRef.current);

        let ctx = gsap.context(() => {
            // gsap.fromTo(cameraRef.current.position, { y: 10 }, { y: 0, duration: 1.4, ease: 'power4.out' });
        }, cameraRef);

        return () => ctx.revert();
    }, []);

    const getImageDimensions = (url) => {
        const image = new Image();
        image.onload = () => setImageDimensions({ width: image.naturalWidth, height: image.naturalHeight });
        image.src = url;
    };

    useEffect(() => {
        getImageDimensions('images/Profile.jpg');
    }, []);

    return (
        <section className="hero" ref={heroRef}>
            <div className="content">
                <div>
                    <h3 className='name'>Meynard Julien B. Trinidad</h3>
                    <h4 className='position'>Junior Web Developer</h4>
                </div>
                {/* <div className='divider'></div>
                <div>
                    <p className='description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium voluptates ab magnam labore quae adipisci reprehenderit commodi optio pariatur similique! Quod assumenda unde non eaque aperiam reiciendis! Possimus, repellendus hic.</p>
                </div> */}
            </div>
            <div className='card-wrapper'>
                <Canvas ref={cameraRef} camera={{ fov: 45, position: [0, 0, 5] }}>
                    <ambientLight intensity={0.1} />
                    <directionalLight color="red" position={[0, 0, 5]} />
                    {
                        Object.keys(imageDimensions).length !== 0 && <Card dimensions={imageDimensions} />
                    }
                </Canvas>
            </div>
        </section>
    )
}

// function Card() {
//     return (
//         <div className='card-container'>
//             <div className='card'>
//                 <div className='card-overlay'></div>
//                 <img className='card-image' src="images/Profile.jpg" alt="Meynard Julien" />
//             </div>
//         </div>
//     )
// }

export default Home;