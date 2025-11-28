import React from 'react'
import Hero from '../components/Home/Hero/Hero'
import Category from '../components/Home/Category/Category'
import Category_2 from '../components/Home/Category/Category_2'
import Category_3 from '../components/Home/Category/Category_3'
import Tagline from '../components/Home/TagLine/Tagline'
import AboutOverView from '../components/Home/AboutOverview/AboutOverView'
import Newsletter from '../components/Home/NewsLetter/Newsletter'
import Footer from '../components/Home/Footer/Footer'
import LatestProducts from '../components/Home/LatestProducts/LatestProducts'

const Home = () => {
  return (
    <div>
        <Hero/>
        <Category/>
        <Category_2/>
        <Category_3/>
        <Tagline/>
        <LatestProducts/>
        <AboutOverView/>
        <Newsletter/>
        <Footer/>
    </div>
  )
}

export default Home