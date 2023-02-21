import React, { useState } from 'react'
import { FaMicrophone, FaSearch } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import '../Styles/HomeScreen.css';

const HomeScreen = ({ setSearch }) => {

  const navigate = useNavigate();

  const [input, setInput] = useState('');

  const handleSubmit = (e) => {

    e.preventDefault();

    if (/^[a-zA-Z0-9].*/.test(input) || /^[a-zA-Z0-9]+" ".*/.test(input)) {
      setSearch(input);
      navigate('/search');
    } else {
      navigate('/error');
    } 
  }

  const handleButton = () => {
    if(/^[a-zA-Z0-9].*/.test(input) || /^[a-zA-Z0-9]+" ".*/.test(input)){
      setSearch(input);
    }
  }


  return (
    <div className='home_screen-container'>
      <img src='https://www.google.com.hk/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png' alt="google" />
      <form onSubmit={handleSubmit}>
        <FaSearch className='input-icon' onClick={handleButton}/>
        <input type="text" value={input} onChange={(event) => setInput(event.target.value)} />
        <FaMicrophone className='input-icon' />
      </form>
      <div className='btn-div'>
        <button className='homescreen-btn' onClick={() => navigate('/search')}>Google Search</button>
        <a href='https://www.google.com/doodles' target='_blank' rel="noreferrer"><button className='homescreen-btn'>I'm Feeling Lucky</button></a>
      </div>
    </div>
  )
}

export default HomeScreen