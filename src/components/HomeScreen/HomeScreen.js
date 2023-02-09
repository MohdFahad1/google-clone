import React from 'react'
import { FaMicrophone } from "react-icons/fa";
import { FaCamera } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import '../Styles/HomeScreen.css';
const HomeScreen = () => {
  return (
    <div className='home_screen-container'>
      <img src='https://www.google.com.hk/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png' alt="google" />
      <form>
        <FaSearch />
        <input type="" />
        <FaMicrophone />
        <FaCamera />
      </form>
      <div>
        <button>Google Search</button>
        <button>I'm Feeling Lucky</button>
      </div>
    </div>
  )
}

export default HomeScreen