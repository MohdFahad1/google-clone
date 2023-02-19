import React from 'react'
import { Link } from "react-router-dom";
import { FaSearch, FaImage, FaVideo, FaMapMarkerAlt, FaRegNewspaper, FaBars  } from "react-icons/fa";
import '../../Styles/SearchSubHeader.css';

const SearchSubHeader = () => {
  return (
    <div className='search_Sub_header'>
      <ul>
        <li>
          <Link to={'/'}><FaSearch className='search_Sub_header-icon'/> All</Link>
        </li>
        <li>
          <Link to={'/'}><FaRegNewspaper className='search_Sub_header-icon'/> News</Link>
        </li>
        <li>
          <Link to={'/'}><FaMapMarkerAlt className='search_Sub_header-icon'/> Maps</Link>
        </li>
        <li>
          <Link to={'/'}><FaImage className='search_Sub_header-icon'/> Images</Link>
        </li>
        <li>
          <Link to={'/'}><FaVideo className='search_Sub_header-icon'/> Videos</Link>
        </li>
        <li>
          <Link to={'/'}><FaBars className='search_Sub_header-icon'/> More</Link>
        </li>
      </ul>
    </div>
  )
}

export default SearchSubHeader