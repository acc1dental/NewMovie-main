import React from 'react'
import CategorySlider from '../Components/Main/Slider'
import Banner from '../Components/Main/Banner'
import Footer from '../Components/Main/Footer'

const Movies = () => {
  return (
    <div className='py-[60px] bg-[#141414]'>
      <CategorySlider/>
      <CategorySlider/>
      <CategorySlider/>
      <CategorySlider/>
      <CategorySlider/>
      <Banner/>
      <Footer/>
    </div>
  )
}

export default Movies