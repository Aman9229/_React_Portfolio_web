import React from 'react'
import { Link } from 'react-router-dom'
import './Aboutcon.css'
import A2 from '../photo/A2.jpg'
import A3 from '../photo/A3.jpg'
const Aboutcon = () => {
  return (
    <div className='about'>
        <div className='left'>
         <h1> Who Am I?</h1>
         <p> I am react front-end developer.I create
             a responsive and good website for using all skills.</p>
             <Link to="/contact"> CONTACT</Link>

             <p style={{marginTop:'35px',color:'rgb(240, 11, 164)'}}> Lets Chat With Me?</p>
             <Link to="https://6463623b60ac1a7c2ec6c249--gleeful-starlight-092583.netlify.app/"> Click Me</Link>

        </div>
        <div className='right'>
            <div className='imgcontainer' >
              <div className='imgstacktop'>
                <img src={A3} alt='' className='img'/>
                </div>
                <div className='imgstackbottom'>
                <img src={A2} alt='' className='img'/>
                </div>  
            </div>

        </div>

    </div>
  )
}

export default Aboutcon;