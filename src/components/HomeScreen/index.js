import React from 'react'
import Footer from './Footer'
import HomeScreen from './HomeScreen'
import Navbar from './Navbar'

const Home = ({ setSearch }) => {
    return (
        <>
            <Navbar />
            <HomeScreen setSearch={setSearch}/>
            <Footer />
        </>
    )
}

export default Home