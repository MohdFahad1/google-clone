import React from 'react'
import { FaMicrophone, FaSearch } from "react-icons/fa";
import '../Styles/HomeScreen.css';
const HomeScreen = () => {
  return (
    <div className='home_screen-container'>
      <img src='https://www.google.com.hk/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png' alt="google" />
      <form>
        <FaSearch className='input-icon'/>
        <input type="" />
        <FaMicrophone className='input-icon'/>
      </form>
      <div>
        <button className='homescreen-btn'>Google Search</button>
        <button className='homescreen-btn'>I'm Feeling Lucky</button>
      </div>
    </div>
  )
}

export default HomeScreen