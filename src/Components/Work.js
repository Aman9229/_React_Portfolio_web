import React from "react";
import "./Work.css";
import { NavLink } from 'react-router-dom'
import A4 from '../photo/A4.jpg'
import A1 from '../photo/A1.jpg'
import A2 from '../photo/A2.jpg'
const Work = () => {
  return (
    <div className="workcontainer">
      <h1 className="projectheading"> Project</h1>
      <div className="projectcontainer">



        <div className="projectcard">
          <img src={A4} alt="img" />
          <h2 className='projecttitle'>Chat Web App (Personal)</h2>
          <div className="projectdetail">
            <p> Chat app using react js firebase. </p>
            <div className="probtn">
              <NavLink to="https://6463623b60ac1a7c2ec6c249--gleeful-starlight-092583.netlify.app/" className="btn3"> View</NavLink>
              <NavLink to="https://github.com/Aman9229" className="btn3"> Source</NavLink>
            </div>
          </div>
        </div>



        <div className="projectcard">
          <img src={A1} alt="img" />
          <h2 className='projecttitle'>Spotify Music Web</h2>
          <div className="projectdetail">
            <p>Using HTML CSS and JS</p>
            <div className="probtn">
              <NavLink to="" className="btn3"> View</NavLink>
              <NavLink to="https://github.com/Aman9229" className="btn3"> Source</NavLink>
            </div>
          </div>
        </div>


        <div className="projectcard">
          <img src={A2} alt="img" />
          <h2 className='projecttitle'>Portfolio Website</h2>
          <div className="projectdetail">
            <p> Using ReactJs</p>
            <div className="probtn">
              <NavLink to="" className="btn3"> View</NavLink>
              <NavLink to="https://github.com/Aman9229" className="btn3"> Source</NavLink>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
};

export default Work;
