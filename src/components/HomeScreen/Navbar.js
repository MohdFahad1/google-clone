import React from 'react'
import { CgMenuGridO } from "react-icons/cg";
import '../Styles/Navbar.css';
const Navbar = () => {
    return (
        <nav>
            <a className='nav-links' href='#'>Gmail</a>
            <a className='nav-links' href='#'>Images</a>
            <div className='nav-icon'>
                <div className='grid-icon'><CgMenuGridO /> </div>
            </div>
            <button>Sign in</button>
        </nav>
    )
}

export default Navbar