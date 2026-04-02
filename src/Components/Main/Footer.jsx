import React from 'react'
import { Link } from "react-router-dom"


const Footer = () => {
  return (
    <div className='w-[100%] h-[410px] bg-[#0F0F0F] pt-[80px] px-[80px]'>


        <div className="flex gap-[150px] border-[1px] border-b-[#262626] border-r-[#0F0F0F] border-l-[#0F0F0F] border-t-[#0F0F0F] h-[230px]">
            <div className="first">
                <h1 className='font-[600] text-[18px] leading-[150%] text-white'>Home</h1>

                <div className="flex flex-col gap-[10px] text-[#999999] font-[500] text-[16px] pt-[20px] decoration-none">
                    <li><Link>Categories</Link></li>
                    <li><Link>Devices</Link></li>
                    <li><Link>Pricing</Link></li>
                    <li><Link>FAQ</Link></li>

                </div>
            </div>

            <div className="second">
                <h1 className='font-[600] text-[18px] leading-[150%] text-white'>Movies</h1>

                <div className="flex flex-col gap-[10px] text-[#999999] font-[500] text-[16px] pt-[20px] decoration-none">
                    <li><Link>Gernes</Link></li>
                    <li><Link>Trending</Link></li>
                    <li><Link>New Release</Link></li>
                    <li><Link>Popular</Link></li>

                </div>
            </div>

            <div className="third">
                <h1 className='font-[600] text-[18px] leading-[150%] text-white'>Shows</h1>

                <div className="flex flex-col gap-[10px] text-[#999999] font-[500] text-[16px] pt-[20px] decoration-none">
                    <li><Link>Gernes</Link></li>
                    <li><Link>Trending</Link></li>
                    <li><Link>New Release</Link></li>
                    <li><Link>Popular</Link></li>

                </div>
            </div>

            <div className="third">
                <h1 className='font-[600] text-[18px] leading-[150%] text-white'>Support</h1>

                <div className="flex flex-col gap-[10px] text-[#999999] font-[500] text-[16px] pt-[20px] decoration-none">
                    <li><Link>Contact Us</Link></li>
                    

                </div>
            </div>

             <div className="third">
                <h1 className='font-[600] text-[18px] leading-[150%] text-white'>Subscription</h1>

                <div className="flex flex-col gap-[10px] text-[#999999] font-[500] text-[16px] pt-[20px] decoration-none">
                    <li><Link>Plans</Link></li>
                    <li><Link>Features</Link></li>

                    

                </div>
            </div>
        </div>

        <div className="bottom flex justify-between pt-[50px] h-[100px] bg-[#0F0F0F] ">
            <p className='font-[400] text-[14px] text-[#999999]'>@2023 streamvib, All Rights Reserved</p>
            <div className="font-[400] text-[14px] text-[#999999] flex gap-[30px]">
                <li>Terms of Use</li>
                <li>Privacy Policy</li>
                <li>Cookie Policy</li>
            </div>
        </div>
    </div>
  )
}

export default Footer