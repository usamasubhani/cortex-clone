import React, { useLayoutEffect, useRef } from 'react';

import './App.css';

function App() {
  return (
    <div className="App">
      <Hero />
    </div>
  );
}

export default App;


function Hero() {

  const brain = useRef(null)

  useLayoutEffect(() => {
    var brainFrames =   [
      { transform: 'translateY(0%)' },
      { transform: 'translateY(-3%)' },
      { transform: 'translateY(0%)' },
    ];

    
    var brainTiming = {
      duration: 3600,
      iterations: Infinity
    };
    
    var brainAnim = brain.current.animate(
    brainFrames, brainTiming);

  }, 3000)
  return (
    <div>
      <div className="hero">
      
        <div className="herotitle" >
          <div className="title-1">CORTEX</div>
          <div className="title-2">COPYWRITER</div>
          <div className="desc">Enhance your communications with psychology-based copywriting and UX writing</div>
          <button className="send-btn">Send a message</button>
        </div>
        <div className="img-container">
          <img className="heroimg" src="https://www.cortexcopywriter.com/img/intro/Intro_Featured_Image_Empty.svg" />
          <img className="brain" ref={brain} src="https://www.cortexcopywriter.com/img/intro/Intro_Brain.svg" />
          
        </div>
        
      </div>
    </div>
  )
}