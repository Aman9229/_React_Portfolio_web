import React from 'react'
import './Aman.css'
import { Link } from 'react-router-dom'
import A3 from '../photo/A3.jpg'
const Aman = () => {
  return (
    <div className='hero'>
      <div className='mask'>
        <img src={A3} className='into-img'
          alt="intro" />
        <div className='content'>
          <p style={{ fontSize: '20px', color: 'black', marginTop: '45px', fontWeight: '700' }}> HI , I'M A FRONTEND DEVELOPER.</p>
          <h1 style={{ fontSize: '30px', color: 'black', fontWeight: '700' }}> React Developer.</h1>
          <div className='button' style={{ cursor: "pointer" }}>
            <Link to="/Skill" className='btn'  > Skill </Link>
            <Link to="/contact" className='btn'  > Contact</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Aman
