import React from 'react'

import Navbar from '../Components/Navbar'
import Aman from '../Components/Aman'

import Footer from '../Components/Footer'
import Program from '../Components/Program'
import Work from '../Components/Work'
import Aboutcon from '../Components/Aboutcon'
import Form from '../Components/Form'
const Home = () => {
  return (
    <div>
      <Navbar/>
      <Aman  />

     <Program/>
     <Work/>
     <Aboutcon/>
     <Form/>
      <Footer/>
    </div>
  )
}

export default Home;