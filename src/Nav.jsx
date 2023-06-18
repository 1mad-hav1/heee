import React from 'react'
import './nav.css'
import {AiOutlineHome, AiOutlineUser} from 'react-icons/ai'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav]= useState('#')
  return (
    <nav>
      <div class="navhead"><p>Hello Admin</p></div>
      <div class="navbar">
      <a href="#Home" onClick={() => setActiveNav('#Home')} className={activeNav === '#Home' ? 'active' : ''}><AiOutlineHome/></a>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineUser/></a>
    </div>
    </nav>
  )
}

export default Nav
