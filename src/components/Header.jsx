import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <nav>
      <div className='logo'>
        <img src="/images/logo11.png" alt="logo" />
        <h1>The Gujarat Innovation and Research Hub</h1>

      </div>
      
      <ul>
          <li><NavLink to={"/"}>Home</NavLink></li>
          <li><NavLink to={"/about"}>About</NavLink></li>
          <li><NavLink to={"/contact"}>Contact</NavLink></li>
          <li><NavLink to={"/license"}>License</NavLink></li>
      </ul>

      <button>
           Login
      </button>

    
      
    </nav>
    </header>
  )
}

export default Header
