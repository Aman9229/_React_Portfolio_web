import React from 'react'
import {  FaBootstrap, FaCss3,  FaGithub, FaHtml5,  FaJs, FaNodeJs, FaReact } from 'react-icons/fa';
import { Link } from 'react-router-dom'
import "./Program.css"
const Program = () => {
    return (
        <>
        <div className='skills'> Skills</div>
        <div className='pricing'>
          
            <div className='cardcontainer'>
            
                <div className='card'>
                    <h1>-Basics-</h1>
                    <h2> <FaHtml5 /> <span>HTML</span></h2>
                    <h2> <FaCss3/> <span>CSS</span></h2>
                    <h2> <FaJs /> <span>JS</span></h2>
                    
                    <h2> <FaNodeJs /> <span>Node JS</span></h2>
                   
                    <Link to="/contact" className='btn2'> Contact Me</Link>
                </div>
          
                <div className='card'>
                    <h1>-Framework & Library- </h1>
                    <h2><FaBootstrap/> <span>Bootstrap</span></h2>
                    <h2><FaReact/><span>ReactJs</span></h2>
                    <h2> <span>Express JS</span></h2>
                    <h2> <span>Material UI</span></h2>
                    <Link to="/contact" className='btn2'> Contact Me</Link>
                </div>

                <div className='card'>
                    <h1>-Database & Other-</h1>
                    <h2>  <span>MongoDB</span></h2>
                    <h2> <FaGithub/> <span>Github</span></h2>
                    <h2> <span>Mongoose</span></h2>
                    <h2> <span>Typescript</span></h2>
                    <Link to="/contact" className='btn2'> Contact Me </Link>
                </div>
           
          </div>
        </div>
        </>
    )
}

export default Program
