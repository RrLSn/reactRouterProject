import React from 'react'
import NavBar from '../components/NavBar'

const Shares = () => {
  return (
    <div className='bg-[#dfdacd] w-[98.7vw] h-[130vh] text-[#16002c]'>
        <NavBar />

        <div className='flex pt-[5rem] px-[5rem] gap-[2rem]'>
            <div className='flex flex-col place-content-center'>
                <h1 className='text-7xl font-[700]'>Invest. Learn. Grow.</h1>
                <p className='text-[1.1rem] font-[500] w-[35rem] my-[3rem] leading-[2rem]'>Invest in over 1,000 stocks, learn from current investors and grow your market knowledge. All in one easy to use app.</p>
                <p className='text-[1.1rem] font-[500] w-[50rem]'>As with all investing, your capital will be at risk.</p>

                <div className='mt-[4rem] flex gap-[2rem]'>
                    <img src="/Media/QR_code.svg" alt="" />
                    <h1 className='text-[1.6rem] font-[700] w-[14rem] my-[2rem]'>Scan this QR code to download Shares</h1>
                </div>
            </div>
            <img src="/Media/shares_hero.avif" alt="" className='w-[45rem]' />
        </div>
    </div>
  )
}

export default Shares