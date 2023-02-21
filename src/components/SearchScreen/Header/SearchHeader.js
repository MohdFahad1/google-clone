import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaMicrophone, FaSearch } from "react-icons/fa";
import { CgMenuGridO } from "react-icons/cg";
import '../../Styles/SearchHeader.css';

const SearchHeader = ({ searchTerm, setSearch }) => {
    const navigate = useNavigate();
    const [searchText, setSearchText] = useState('');
    useEffect(() => {
        setSearchText(searchTerm)
    }, [searchTerm])


    const handleSubmit = (e) => {
        e.preventDefault();
    
        if (/^[a-zA-Z0-9].*/.test(searchText) || /^[a-zA-Z0-9]+" ".*/.test(searchText)) {
          setSearch(searchText);
          navigate('/search');
        } else {
          navigate('/error');
        } 
      }
    
      const handleButton = () => {
        if(/^[a-zA-Z0-9].*/.test(searchText) || /^[a-zA-Z0-9]+" ".*/.test(searchText)){
          setSearch(searchText);
        }
      }


    const nav = useNavigate();
    return (
        <div className='search_header'>
            <Link to={'/'}>
                <img src='https://www.google.co.in/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png' alt='Google Logo' />
            </Link>
            <form className='search_header-input' onSubmit={handleSubmit}>
                <input type="text" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
                <div className='search_header-icons'>
                    <FaMicrophone style={{cursor:'pointer'}}/>
                    <FaSearch style={{cursor:'pointer'}} onClick={handleButton}/>
                </div>
            </form>
            <CgMenuGridO />
        </div>
    )
}

export default SearchHeader