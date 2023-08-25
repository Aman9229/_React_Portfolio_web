import React from 'react'
import Navbar from '../Components/Navbar'
import Aman2 from '../Components/Aman2'
import Form from '../Components/Form'
import Footer from '../Components/Footer'
const Contact = () => {
  return (
    <div>
      <Navbar />
      
      <Aman2 heading="CONTACT." text="Lets have a chat ." />
      <Form/>
      <Footer />
    </div>
  )
}

export default Contact;