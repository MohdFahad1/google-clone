import React from 'react';
import Header from './Header';



const SeacrhScreen = ({ searchTerm, googleData }) => {
  return (
    <>
    <Header searchTerm={searchTerm}/>
    <div className='search-screen'>
      <h1>Welcome to SeacrhScreen : { searchTerm }</h1>
    </div>
    </>
  )
}

export default SeacrhScreen