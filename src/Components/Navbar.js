import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'



const Navabr = () => {
  const [color, setcolor] = useState(false)

  const changeColor = () => {
    if (window.scrollY >= 100) {
      setcolor(true)
    } else {
      setcolor(false)
    }
  }
  window.addEventListener('scroll', changeColor)
  return (
    <div className={color ? 'header header-bg' : "header"}>
    

      <ul className='navmenu'>
        <li>
          <Link to='/'> Home
          </Link>
        </li>
        <li>
          <Link to='/about'> About
          </Link>
        </li>
        <li>
          <Link to='/contact'> Contact
          </Link>
        </li>
        <li>
          <Link to='/skill'> Skill
          </Link>
        </li>
      </ul>

    </div>
  )
}

export default Navabr