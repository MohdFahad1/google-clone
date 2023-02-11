import React, { useState } from 'react'
import { FaMicrophone, FaSearch } from "react-icons/fa";
import '../Styles/HomeScreen.css';
const HomeScreen = () => {
  const [input, setInput] = useState('');
  return (
    <div className='home_screen-container'>
      <img src='https://www.google.com.hk/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png' alt="google" />
      <form>
        <FaSearch className='input-icon'/>
        <input type="text" value={input} onChange={(event) => setInput(event.target.value)}/>
        <FaMicrophone className='input-icon'/>
      </form>
      <div className='btn-div'>
        <button className='homescreen-btn'>Google Search</button>
        <a href='https://www.google.com/doodles' target='_blank' rel="noreferrer"><button className='homescreen-btn'>I'm Feeling Lucky</button></a>
      </div>
    </div>
  )
}

export default HomeScreen