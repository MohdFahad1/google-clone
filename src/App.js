import './App.css';
import React, { useState } from 'react';
import Home from './components/HomeScreen';
import { BrowserRouter, Routes, Route, redirect, Navigate } from "react-router-dom";
import Search from './components/SearchScreen/SeacrhScreen';
import EmptyViewComponent from './components/common/EmptyListComponent';
import { searchData } from './api/googleSearch';
function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [googleData, setGoogleData] = useState({});
  const setSearch = async (term) =>{
    setSearchTerm(term);

    const myData = await searchData(term);
    setGoogleData(myData);
  }
  return (<>
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home setSearch={setSearch}/>} />
          {searchTerm !== "" ? (<Route path="/search" element={<Search searchTerm={searchTerm} googleData={googleData} setSearch={setSearch}/>} />) : null}
          <Route path="/" element={<Navigate replace to="/" />} />
          <Route path="*" element={<EmptyViewComponent />} />
        </Routes>
      </div>
    </BrowserRouter>
  </>
  );
}

export default App;