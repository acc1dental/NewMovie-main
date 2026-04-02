import React from 'react'
import Marquees from './Marquee'

const Banner = () => {
  return (
    <div className="w-[100%] h-auto bg-[#141414] flex justify-center items-center py-[120px] px-[80px] ">
        <div className="bg-gradient-to-r to-[#140F0FF9] from-[33%] via-[#220E0EE8] via-[50%] to-[#E50000] to-[100%] w-[1383px] h-[256px] rounded-[12px] flex items-center justify-between border-[1px] border-[#262626] px-[60px] text-white">
            <div className="text">
                <h1 className='font-bold text-[28px]'>Start your free trial today!</h1>
                <p className='font-[400] text-[16px]'>This is a clear and concise call to action that encourages users to sign up for a free trial of StreamVibe.</p>
            </div>

            <button className='w-[150px] h-[50px] rounded-[8px] bg-[#E50000] text-white font-[600] text-[16px] cursor-pointer'>Start a Free Trail</button>
        </div>

        <div>
        </div>
    </div>
  )
}

export default Banner