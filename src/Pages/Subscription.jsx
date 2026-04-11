import React, { useEffect } from 'react'
import Banner from '../Components/Main/Banner'
import Footer from '../Components/Main/Footer'
import StreamVibePricing from '../Components/Main/Plan'
import SearchPage from '../Components/Main/Search'

const Subscription = () => {

  useEffect(() => {
      document.documentElement.scrollTop = 0;
    }, []);

  return (
    <div>
      <StreamVibePricing/>  
      <Banner/>
      <Footer/>
    </div>
  )
}

export default Subscription