import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className="about-img"/>
        <img src={play_icon} alt="" className="play-icon" onClick={()=>{setPlayState(true)}}/>
      </div>
      <div className="about-right">
        <h3>ABOUT OUR CAKE SHOP</h3>
        <h2>Crafting Sweet Memories, One Cake at a Time</h2>
        <p>Embark on a delightful journey with our Cake Shop, where every creation is a masterpiece. Our expertly 
          crafted cakes and confections are designed to bring joy, flavor, and a touch of magic to every celebration.
        </p>
        <p>
        With a focus on creativity, quality ingredients, and personalized service, we create cakes that are not 
        just desserts but experiences. Whether it's a birthday, wedding, or any special occasion, our cakes 
        are made to leave a lasting impression.
        </p>
        <p>
        Whether you dream of a classic, elegant cake or a unique, custom design, our diverse range of 
        offerings provides the perfect treat to celebrate your special moments and make them unforgettable.
        </p>
      </div>
    </div>
  )
}

export default About
