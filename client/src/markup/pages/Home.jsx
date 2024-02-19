import React from 'react'
import Banner from '../components/Home/Banner'
import Features from '../components/Home/Features'
import Product from '../components/Home/Product'
import AboutSectionFirst from '../components/Home/AboutSectionFirst'
import ShopBanner from '../components/Home/ShopBanner'

const Home = () => {
  return (
    <div>
        <Banner/>
        <Features/>
        <Product/>
        <ShopBanner/>
        <AboutSectionFirst/>
    </div>
  )
}

export default Home