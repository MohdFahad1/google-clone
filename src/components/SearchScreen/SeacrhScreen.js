import React from 'react';
import Header from './Header';
import '../Styles/SearchScreen.css';
import SearchOutput from './SearchOutput/SearchOutput';


const SeacrhScreen = ({ searchTerm, googleData, setSearch}) => {
  return (
    <>
    <Header searchTerm={searchTerm} setSearch={setSearch}/>
    <div className='search-screen'>
      <SearchOutput googledata={googleData}/>
    </div>
    </>
  )
}

export default SeacrhScreen