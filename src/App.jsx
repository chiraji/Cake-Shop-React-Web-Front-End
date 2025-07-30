import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Tiltle from './Components/Title/Tiltle'
import About from './Components/About/About'
import Campus from './Components/Gallery/Campus'
import Testimonials from './Components/Reviews/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import VideoPlayer from './Components/VideoPlayer/VideoPlayer'


const App = () => {

  const [playState, setPlayState] = useState(false);

  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Tiltle subTitle="Our Services" title="What We Offer"/>
        <Programs/>
        <About setPlayState={setPlayState}/>
        <Tiltle subTitle="Gallery" title="Cake Photos"/>
        <Campus/>
        <Tiltle subTitle="Reviews" title="What Customers Says"/>
        <Testimonials/>
        <Tiltle subTitle="Contact Us" title="Get in Touch"/>
        <Contact/>
        <Footer/>
        <VideoPlayer playState={playState} setPlayState={setPlayState}/>
      </div>
    </div>
  )
}

export default App
