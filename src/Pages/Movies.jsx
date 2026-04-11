import React, { useEffect } from 'react'
import Banner from '../Components/Main/Banner'
import Footer from '../Components/Main/Footer'
import SliderToo from '../Components/Main/Slidertoo'

const Movies = () => {

  useEffect(() => {
        document.documentElement.scrollTop = 0;
      }, []);
  return (
    <div>
    <div className='py-[60px] bg-[#141414]'>
      <SliderToo url={'movie/popular'} title={"Popular Movies"} description={"Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new"}/>
      <SliderToo url={'movie/now_playing'} title={"Trending Movies"} description={"Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new"}/>
      <SliderToo url={'movie/top_rated'} title={"Retrending Movies"} description={"Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new"}/>
      <SliderToo url={'movie/upcoming'} title={"Upcoming Movies"} description={"Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new"}/>
      <Banner/>
    </div>
      <Footer/>

    </div>
  )
}

export default Movies