
import React, { Component } from 'react'
import "./Aman2.css"


class Aman2  extends Component{
    render(){
    return (
        <div className='heroimg'>
           <div className='heading'>
               <h1>{this.props.heading} </h1>
               <p>{this.props.text} </p>
            </div>
         </div>
    );
}}

export default Aman2