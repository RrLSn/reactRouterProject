import React from 'react'
import NavBar from '../components/NavBar'

const Purpose = () => {
  return (
    
    <div className='bg-[#e8d6d5] w-[98.7vw] h-[120vh] text-[#16002c]'>
      <NavBar />

      <div className='flex mt-[3rem] px-[5rem] gap-[2rem] h-[90vh]'>
        <div className='flex flex-col place-content-center'>
          <p className='text-[1.2rem] font-[700]'>Our purpose</p>
          <h1 className='text-7xl font-[700] my-[3rem] leading-[6rem]'>To build a world where together, we’re more than investors.</h1>
          <p className='text-[1.1rem] font-[500] w-[50rem]'>We’re putting an end to investing alone or thinking “the financial market isn’t for me”. Shares brings connecting with friends and Investing together – in one app. Because we believe investing is for everyone, not just the top dogs.</p>
        </div>
        <img src="/Media/purpose_hero.avif" alt="" className='w-[45rem]' />
      </div>
    </div>
  )
}

export default Purpose