import React, { useEffect } from 'react'
import Header from '../Components/Suppor/Header'
import Questions from '../Components/Main/Questions'
import Banner from '../Components/Main/Banner'
import Footer from '../Components/Main/Footer'

const Support = () => {


  useEffect(() => {
        document.documentElement.scrollTop = 0;
      }, []);
  return (
    <div>
        <Header/>
        <Questions/>
        <Banner/>
        <Footer/>
    </div>
  )
}

export default Support