import React from 'react';
import './Hero.css';
import dark_arrow from '../../assets/dark-arrow.png';
import video from '../../assets/hero.mp4';

const Hero = () => {
  return (
    <div className='hero container'>
      <video src={video} autoPlay muted loop className='hero'></video>
      <div className="hero-text">
        <h1>We Create Sweet Moments for a Sweeter World</h1>
        <p>"Our expertly crafted cakes are designed to delight your senses, bringing joy, flavor, and 
          creativity to every celebration."
        </p>
        <button className='btn'>Explore more <img src={dark_arrow} alt="dark arrow" /></button>
      </div>
    </div>
  );
}

export default Hero;
