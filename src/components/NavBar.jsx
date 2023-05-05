import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./NavBar.css"

const NavBar = () => {
  const [scrollEffect, SetScrollEffect] = useState(true)
  window.addEventListener(
    'scroll',
    ()=> {
      scrollY>=15? SetScrollEffect(true): SetScrollEffect(false)
    }
  )
  return (
    <nav className={`wrapper ${scrollEffect && 'scrollEffect'}`}>
        <Link to="/"><img src="/Media/Logo.svg" alt="" className='w-[10rem] ml-[2rem]' /></Link>

        <div className='w-[53rem] flex justify-between px-[2rem]'>
        <Link to="/purpose">Purpose</Link>
        <Link to="/community">Communities</Link>
        <Link to="/carrier">Carriers<sup>(11)</sup></Link>
        <Link to="/learn" target="_blank">Learn</Link>
        <Link to="/united">United Kingdom</Link>
        </div>
    </nav>
  )
}

export default NavBar