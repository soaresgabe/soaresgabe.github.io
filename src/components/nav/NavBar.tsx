import React, { useState } from 'react'
import "./NavBar.css";
import {AiOutlineHome} from "react-icons/ai";
import {FiUser} from "react-icons/fi";
import {IoAppsOutline} from "react-icons/io5";
import {BiBook} from "react-icons/bi"
import {TbMessageCircle} from "react-icons/tb"

function NavBar() {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav className='navbar'>
        <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome className='icon' /></a>
        <a href="#" onClick={() => setActiveNav('#aboutme')} className={activeNav === '#aboutme' ? 'active' : ''}><FiUser className='icon' /></a>
        <a href="#" onClick={() => setActiveNav('#projects')} className={activeNav === '#projects' ? 'active' : ''}><IoAppsOutline className='icon' /></a>
        <a href="#" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBook className='icon' /></a>
        <a href="#" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><TbMessageCircle className='icon' /></a>
    </nav>
  )
}

export default NavBar;