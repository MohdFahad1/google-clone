import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaMicrophone, FaSearch } from "react-icons/fa";
import { CgMenuGridO } from "react-icons/cg";
import '../../Styles/SearchHeader.css';

const SearchHeader = ({ searchTerm }) => {

    const [searchText, setSearchText] = useState('');
    useEffect(() => {
        setSearchText(searchTerm)
    }, [searchTerm])

    const nav = useNavigate();
    return (
        <div className='search_header'>
            <Link to={'/'}>
                <img src='https://www.google.co.in/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png' alt='Google Logo' />
            </Link>
            <form className='search_header-input'>
                <input type="text" value={searchText} />
                <div className='search_header-icons'>
                    <FaMicrophone style={{cursor:'pointer'}}/>
                    <FaSearch style={{cursor:'pointer'}}/>
                </div>
            </form>
            <CgMenuGridO />
        </div>
    )
}

export default SearchHeader