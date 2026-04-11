import { useState } from 'react'
import './App.css'
import Navbar from '../Components/Main/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from '../Components/Home/Header'
import Home from '../Pages/Home'
import Support from '../Pages/Support'


import Banner from '../Components/Main/Banner'
import Plan from '../Components/Main/Plan'
import Questions from '../Components/Main/Questions'
import Movies from '../Pages/Movies'
import Subscription from '../Pages/Subscription'
import Sign from '../Pages/Sign'
import Inside from '../Pages/Movie_inside'
import SearchPage from '../Components/Main/Search'
import Actor from '../Pages/Actor'




function App() {

  return (
    <BrowserRouter>
    <Navbar/>

    {/* <Banner/> */}
    {/* <Questions/> */}
    {/* <Plan/> */}
    {/* <Header/> */}
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/support' element={<Support/>}/>
      <Route path='/moviesandshows' element={<Movies/>}/>
      <Route path='/subs' element={<Subscription/>}/>
      <Route path='/signin' element={<Sign/>}/>
      <Route path='/movie_inside/:id' element={<Inside/>}/>
      <Route path='/search' element={<SearchPage/>}/>
      <Route path='/actor/:id' element={<Actor/>}/>


    </Routes>
    </BrowserRouter>
      )
}

export default App
