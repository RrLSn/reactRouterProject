import React from 'react'
import NavBar from '../components/NavBar'
import "./Community.css"

const Community = () => {
  return (
    <div className='w-[98.7vw] h-[180vh] bg-[#e4dfff]'>
      <NavBar />

      <div className='community_hero'>
        <p className='text-[1.2rem] font-[700]'>Welcome to</p>
        <h1 className='text-7xl font-[700] w-[63rem] text-center my-[2rem] leading-[6rem]'>Connect, share and learn with your crew</h1>
        <p className='text-[1.1rem] font-[500] w-[41rem] text-center'>Whether you’re new to investing or been around the block, level up your money moves with Communities. Speak your mind and ask those burning questions, in a safe space where everybody’s welcome.</p>
        <img src="/Media/community_hero.avif" alt="" className='w-[55rem] mt-[5rem]' />
      </div>
    </div>
  )
}

export default Community