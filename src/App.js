import './App.css';
import React, { useState } from 'react';
import Home from './components/HomeScreen';
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Search from './components/SearchScreen/SeacrhScreen';
import EmptyViewComponent from './components/common/EmptyListComponent';
import { searchData } from './api/googleSearch';
// import Error from './components/ErrorScreen/Error';
function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const setSearch = async (term) =>{
    setSearchTerm(term);

    const data = await searchData(term);
    console.log(data);
  }
  return (<>
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home setSearch={setSearch}/>} />
          <Route path="/search" element={<Search searchTerm={searchTerm} />} />
          <Route path="*" element={<EmptyViewComponent />} />
        </Routes>
      </div>
    </BrowserRouter>
  </>
  );
}

export default App;