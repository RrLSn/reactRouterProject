import React from 'react'
import NavBar from '../components/NavBar'
import "./Carrier.css"

const Carrier = () => {
  return (
    <div className='w-[98.7vw] h-[170vh] bg-[#e4dfff]'>
      <NavBar />
      
      <div className='carrier_hero'>
        <p className='text-[1.2rem] font-[700]'>Careers</p>
        <h1 className='text-6xl font-[700] w-[55rem] text-center my-[2rem] leading-[5rem]'>Ready to make investing social with us?</h1>
        <p className='text-[1.1rem] font-[500] w-[42rem] text-center'>We’re on a mission to give every human fair access to the stock market and the social connectedness and support to build a strong financial future – in community.</p>
        <button className='border my-[3rem] py-[1.5rem] w-[15rem] rounded-full text-white bg-[#594ff4] text-[1.2rem]'>See available roles</button>
        <img src="/Media/carrier_hero.avif" alt="" className='w-[70rem]' />
      </div>
    </div>
  )
}

export default Carrier