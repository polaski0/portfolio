import React, { useEffect, useLayoutEffect, useRef } from 'react';
import '../assets/css/Home.css';
import { gsap } from 'gsap';

function horizontalLoop(items, config) {
    items = gsap.utils.toArray(items);
    config = config || {};
    let tl = gsap.timeline({ repeat: config.repeat, paused: config.paused, defaults: { ease: "none" }, onReverseComplete: () => tl.totalTime(tl.rawTime() + tl.duration() * 100) }),
        length = items.length,
        startX = items[0].offsetLeft,
        times = [],
        widths = [],
        xPercents = [],
        curIndex = 0,
        pixelsPerSecond = (config.speed || 1) * 100,
        snap = config.snap === false ? v => v : gsap.utils.snap(config.snap || 1), // some browsers shift by a pixel to accommodate flex layouts, so for example if width is 20% the first element's width might be 242px, and the next 243px, alternating back and forth. So we snap to 5 percentage points to make things look more natural
        totalWidth, curX, distanceToStart, distanceToLoop, item, i;
    gsap.set(items, { // convert "x" to "xPercent" to make things responsive, and populate the widths/xPercents Arrays to make lookups faster.
        xPercent: (i, el) => {
            let w = widths[i] = parseFloat(gsap.getProperty(el, "width", "px"));
            xPercents[i] = snap(parseFloat(gsap.getProperty(el, "x", "px")) / w * 100 + gsap.getProperty(el, "xPercent"));
            return xPercents[i];
        }
    });
    gsap.set(items, { x: 0 });
    totalWidth = items[length - 1].offsetLeft + xPercents[length - 1] / 100 * widths[length - 1] - startX + items[length - 1].offsetWidth * gsap.getProperty(items[length - 1], "scaleX") + (parseFloat(config.paddingRight) || 0);
    for (i = 0; i < length; i++) {
        item = items[i];
        curX = xPercents[i] / 100 * widths[i];
        distanceToStart = item.offsetLeft + curX - startX;
        distanceToLoop = distanceToStart + widths[i] * gsap.getProperty(item, "scaleX");
        tl.to(item, { xPercent: snap((curX - distanceToLoop) / widths[i] * 100), duration: distanceToLoop / pixelsPerSecond }, 0)
            .fromTo(item, { xPercent: snap((curX - distanceToLoop + totalWidth) / widths[i] * 100) }, { xPercent: xPercents[i], duration: (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond, immediateRender: false }, distanceToLoop / pixelsPerSecond)
            .add("label" + i, distanceToStart / pixelsPerSecond);
        times[i] = distanceToStart / pixelsPerSecond;
    }
    function toIndex(index, vars) {
        vars = vars || {};
        (Math.abs(index - curIndex) > length / 2) && (index += index > curIndex ? -length : length); // always go in the shortest direction
        let newIndex = gsap.utils.wrap(0, length, index),
            time = times[newIndex];
        if (time > tl.time() !== index > curIndex) { // if we're wrapping the timeline's playhead, make the proper adjustments
            vars.modifiers = { time: gsap.utils.wrap(0, tl.duration()) };
            time += tl.duration() * (index > curIndex ? 1 : -1);
        }
        curIndex = newIndex;
        vars.overwrite = true;
        return tl.tweenTo(time, vars);
    }
    tl.next = vars => toIndex(curIndex + 1, vars);
    tl.previous = vars => toIndex(curIndex - 1, vars);
    tl.current = () => curIndex;
    tl.toIndex = (index, vars) => toIndex(index, vars);
    tl.times = times;
    tl.progress(1, true).progress(0, true); // pre-render for performance
    if (config.reversed) {
        tl.vars.onReverseComplete();
        tl.reverse();
    }
    return tl;
}

function Card() {
    return (
        <div className="card">
            <div className='card-overlay'></div>
            {/* <img className='card-image' src="images/Profile.jpg" alt="Meynard Julien" /> */}
        </div>
    )
}

function Home() {
    const heroRef = useRef();
    let counter = 0;

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            // gsap.fromTo('.card', {
            //     x: '-100vw',
            // },
            //     {
            //         x: 0,
            //         duration: 1,
            //         ease: 'circ.out'
            //     });
            // gsap.fromTo('.left', {
            //     opacity: 0,
            // },
            //     {
            //         opacity: 1
            //     });

            const cards = gsap.utils.toArray(".card"),
                loop = horizontalLoop(cards, { paused: true });

            // add click listeners so you can click a box to have it move to the first slot
            cards.forEach((card, i) => card.addEventListener("click", () => loop.toIndex(i, { duration: 1, ease: "power1.inOut" })));

            const interval = setInterval(() => {
                loop.next({ duration: 1 });
            }, 500);

            return () => clearInterval(interval);

            // make the "next" and "previous" buttons call the appropriate methods on the timeline
            // document.querySelector(".next").addEventListener("click", () => loop.next({ duration: 1, ease: "power1.inOut" }));
            // document.querySelector(".prev").addEventListener("click", () => loop.previous({ duration: 1, ease: "power1.inOut" }));


        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="hero" ref={heroRef}>
            <div className="content">
                <div>
                    <h3 className='name'>Meynard Julien B. Trinidad</h3>
                    <h4 className='position'>Junior Web Developer</h4>
                </div>
                <div className='divider'></div>
                <div>
                    <p className='description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium voluptates ab magnam labore quae adipisci reprehenderit commodi optio pariatur similique! Quod assumenda unde non eaque aperiam reiciendis! Possimus, repellendus hic.</p>
                </div>
            </div>
            <div className='card-wrapper'>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
            {/* <div className="right">
                <div className="card">
                    <div className='card-overlay'></div>
                    <img className='card-image' src="images/Profile.jpg" alt="Meynard Julien" />
                </div>
            </div> */}
        </section>
    )
}

export default Home;