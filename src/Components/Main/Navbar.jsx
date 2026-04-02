import React from 'react'
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className='flex w-[100%] h-[90px] bg-[#141414] items-center justify-between px-[80px] text-white realtive top-0'>
        <div className="nav_logo">
            <img src="./public/Logo.png" alt="" />
        </div>
        <ul className='flex w-[450px] h-[60px] text-[#BFBFBF]  px-[30px] py-[20px] gap-[16px] rounded-[10px] border-[3px] border-[#1F1F1F] items-center justify-between'>
            <li className=''><Link to={"/"} className='  focus:text-white focus:underline '>Home</Link></li>
            <li><Link to={"/moviesandshows"}  className=' focus:text-white focus:underline'>Movies & Shows</Link></li>
            <li><Link to={"/support"} className='focus:text-white  focus:underline'>Support</Link></li>
            <li><Link to={"/subs"} className='focus:text-white  focus:underline  w-[137px]'>Subscriptions</Link></li>

        </ul>

        <div className="icons flex gap-[14px]">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 cursor-pointer">
  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
</svg>

<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[24px] h-[24px] cursor-pointer">
  <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
</svg>

        </div>
    </nav>
  )
}

export default Navbar