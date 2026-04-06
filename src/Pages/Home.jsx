import React from 'react'
import Header from '../Components/Home/Header'
import Plan from '../Components/Main/Plan'
import Questions from '../Components/Main/Questions'
import Devices from '../Components/Home/Devices'
import Banner from '../Components/Main/Banner'
import Footer from '../Components/Main/Footer'
import SliderToo from '../Components/Main/Slidertoo'

const Home = () => {
  return (
    <div className=''>

     <Header/>
     <SliderToo/>
    <Devices/>
    <Questions/>
    <Plan/>
    <Banner/>
    <Footer/>
   
    </div>
  )
}

export default Home