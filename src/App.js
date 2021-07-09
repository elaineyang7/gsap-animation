import React from 'react';

import './App.scss';

import meow1 from "./images/meow2.jpg";
import meow2 from "./images/meow1.jpg";
import arrow from './images/arrow-right.svg'


function App() {
  return (
    <div className="hero">
      <div className="container">
        <div className="hero-inner">
          <div className="hero-content">
            <div className="hero-content-inner">
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
            <div className="hero-images-inner">
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