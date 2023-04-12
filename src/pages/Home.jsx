import React from 'react';
import '../assets/css/Home.css';

function Home() {
    return (
        <section className="hero">
            <div className="left">
                <p>Meynard Julien B. Trinidad</p>
                <p>Junior Web Developer</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium voluptates ab magnam labore quae adipisci reprehenderit commodi optio pariatur similique! Quod assumenda unde non eaque aperiam reiciendis! Possimus, repellendus hic.</p>
            </div>
            <div className="right">
                <div className="card">
                    <img src="images/Profile.jpg" alt="Meynard Julien" />
                </div>
            </div>
        </section>
    )
}

export default Home;