import React, { useEffect } from 'react'
import Header from '../Components/Home/Header'
import Plan from '../Components/Main/Plan'
import Questions from '../Components/Main/Questions'
import Devices from '../Components/Home/Devices'
import Banner from '../Components/Main/Banner'
import Footer from '../Components/Main/Footer'
import SliderToo from '../Components/Main/Slidertoo'
import ActorProfile from './Actor'

const Home = () => {

  useEffect(() => {
        document.documentElement.scrollTop = 0;
      }, []);
  return (
    <div className=''>

     <Header/>
     <SliderToo url={'trending/movie/week'} title={"Explore our wide variety of categories"} description={"Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new"} />
    <Devices/>
    <Questions/>
    <Plan/>
    <Banner/>
    <Footer/>
   
    </div>
  )
}

export default Home