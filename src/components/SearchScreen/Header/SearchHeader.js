import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaMicrophone, FaSearch } from "react-icons/fa";
import { CgMenuGridO } from "react-icons/cg";
import '../../Styles/SearchHeader.css';

const SearchHeader = ({ searchTerm }) => {
    const nav = useNavigate();
    return (
        <div className='search_header'>
            <Link to={'/'}>
                <img src='https://www.google.co.in/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png' alt='Google Logo' />
            </Link>
            <form className='search_header-input'>
                <input type="text" value={searchTerm} />
                <div className='search_header-icons'>
                    <FaMicrophone />
                    <FaSearch />
                </div>
            </form>
        </div>
    )
}

export default SearchHeader