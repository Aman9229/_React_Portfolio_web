import "./Footer.css"
import React from 'react'
import { FaHome, FaPhone, FaMailBulk, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa"

function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left" style={{ marginLeft: '25px' }}>

          <div style={{marginTop:'20px'}}>
            <div className="location" style={{ cursor: 'pointer' }}>
              <FaHome size={20} style={{ color: "yellow", marginRight: "2rem" }} />
            </div>
            <div style={{ display: 'flex', marginTop: "-40px", marginLeft: '40px', cursor: 'pointer' }}>
              <p> A3 Avantika Avanue Phase 1&2</p>
              <p>Bhopal MP INDIA</p>
            </div>

          </div>
          <div className="phone" style={{ cursor: 'pointer', marginTop: '15px' }}>
            <h4><FaPhone size={20} style={{ color: "yellow", marginRight: "2rem" }} />
              +91 8770853027</h4>
          </div>

          <div className="message" style={{ cursor: 'pointer', marginTop: '10px' }}>
            <h4> <FaMailBulk size={20} style={{ color: "yellow", marginRight: "2rem" }} /> Akp88714725@gmail.com
            </h4> </div>

        </div>
        <div className="right" style={{ marginLeft: '25px' }}>
          <h4 style={{color:'yellow',cursor:'pointer'}}> About Me</h4>
          <p style={{marginTop:'-25px'}}> I'll give a quick introduction to<br /> the main components that form the MERN stack, <br />and a few other libraries and tools that<br /> we’ll be using to build our web application</p>
          <div className="social" style={{ marginTop: '0px' }}>
            <FaFacebook size={27} style={{ color: "yellow", marginRight: "1rem", cursor: 'pointer' }} />
            <FaTwitter size={27} style={{ color: "yellow", marginRight: "1rem", cursor: 'pointer' }} />
            <FaLinkedin size={27} style={{ color: "yellow", marginRight: "1rem", cursor: 'pointer' }} />

          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;