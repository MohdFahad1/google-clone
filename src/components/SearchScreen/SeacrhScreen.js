import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SeacrhScreen = ({ searchTerm }) => {

  return (
    <div className='search-screen'>
      <h1>Welcome to SeacrhScreen : { searchTerm }</h1>
    </div>
  )
}

export default SeacrhScreen