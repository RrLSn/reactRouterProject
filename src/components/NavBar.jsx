import React from 'react'
import { Link } from 'react-router-dom'
import "./NavBar.css"

const NavBar = () => {
  return (
    <nav className='flex justify-between p-[3rem]'>
        <img src="/Media/Logo.svg" alt="" className='w-[13rem]' />

        <div className='w-[53rem] flex justify-between px-[2rem]'>
        <Link to="/">Purpose</Link>
        <Link to="/community">Communities</Link>
        <Link to="/carrier">Carriers<sup>(11)</sup></Link>
        <Link to="/learn" target="_blank">Learn</Link>
        <div>
        <Link to="/united">United Kingdom</Link>
        </div>
        </div>
    </nav>
  )
}

export default NavBar