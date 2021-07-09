import React, {useRef, useEffect} from 'react';
import {TweenMax, TimelineLite, Power3} from 'gsap';

import './App.scss';

import meow1 from "./images/meow2.jpg";
import meow2 from "./images/meow1.jpg";
import arrow from './images/arrow-right.svg'

function App() {

  let app = useRef(null);
  let content = useRef(null);
  let images = useRef(null);

  let tl = new TimelineLite();

    useEffect(() => {
      const headlineFirst = content.children[0].children[0];
      const headlineSecond = headlineFirst.nextSibling;
      const contentP = content.children[1];
      const contentButton = content.children[2];

      const meow1Image = images.firstElementChild;
      const meow2Image = images.lastElementChild;

      TweenMax.to(app, 0, {css: {visibility: 'visible'}})

      
      
      tl.from(meow1Image, 1.5, {y: 1280, ease: Power3.easeInOut})
        .from(meow1Image.firstElementChild, 2, {scale: 2, ease: Power3.easeOut}, 0.2)
        .from(meow2Image, 1.4, {y: 1280, ease: Power3.easeOut}, 0.2)
        .from(meow2Image.firstElementChild, 2, {scale: 1.6, ease: Power3.easeOut}, 0.2)
      

      tl.staggerFrom([headlineFirst.children, headlineSecond.children ], 1, {
        y: 44,
        ease:Power3.easeOut,
        delay: .8
      }, .15, 'Start')
        .from(contentP, 1, {y: 20, opacity: 0, ease: Power3.easeOut}, 1.4)
        .from(contentButton, 1, {y: 20, opacity: 0, ease: Power3.easeOut}, 1.6)
    
    }, [tl])
  

  return (
    <div className="hero" ref={el => app = el}>
      <div className="container">
        <div className="hero-inner">
          <div className="hero-content">
            <div className="hero-content-inner" ref={el => content = el}>
              <h1>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">Our Love</div>
                </div>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">Meow Meow</div>  
                </div>
              </h1>
              <p>
                Meow Meow is baby of Yang family. She was born in July, 2014.
                She is a spoiled cat, and everyone regards her as a queen.
              </p>
              <div className="btn-row">
                <button className="explore-button">Explore
                  <div className="arrow-icon">
                    <img src={arrow} alt="row"/>
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="hero-images">
            <div className="hero-images-inner" ref={el => images = el}>
              <div className="hero-image meow1">
                <img src={meow1} alt="meow1" />
              </div>
              <div className="hero-image meow2">
                <img src={meow2} alt="meow2" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;