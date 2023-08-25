import React from 'react'
import Navbar from '../Components/Navbar'

import Footer from '../Components/Footer'
import Aman2 from '../Components/Aman2'
import Aboutcon from '../Components/Aboutcon'
const About = () => {
  return (
    <div >
      <Navbar />
       <Aman2  heading="ABOUT." text="Im a friendly Front-End Developer."/>
      <Aboutcon/>
      <Footer />
    </div>
  )
}

export default About;