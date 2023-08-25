import React from 'react'
import Navbar from '../Components/Navbar'

import Footer from '../Components/Footer'
import Aman2 from '../Components/Aman2'
import Program from '../Components/Program'
import Work from '../Components/Work'
const Skill = () => {
  return (
    <div>

      <Navbar/>
      <Aman2 heading="SKILLS." text=" Some of my most recent work & Skill"/>
      <Program />
      <Work/>
      <Footer/>
    </div>
  )
}

export default Skill