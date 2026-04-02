import React from 'react'
import { BrowserRouter, Routes } from 'react-router-dom'
import Header from '../Components/Home/Header'
import Plan from '../Components/Main/Plan'
import Questions from '../Components/Main/Questions'
import Devices from '../Components/Home/Devices'
import Banner from '../Components/Main/Banner'
import Footer from '../Components/Main/Footer'
import Slider from '../Components/Main/Slider'
import CategorySlider from '../Components/Main/Slider'
import Navbar from '../Components/Main/Navbar'

const Home = () => {
  return (
    <div>

     <Header/>
     
     <CategorySlider/>
    <Devices/>
    <Questions/>
    <Plan/>
    <Banner/>
    <Footer/>
   
    </div>
  )
}

export default Home