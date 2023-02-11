import './App.css';
import React, { useState } from 'react';
import Home from './components/HomeScreen';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from './components/SearchScreen/SeacrhScreen';
import EmptyViewComponent from './components/common/EmptyListComponent';
// import Error from './components/ErrorScreen/Error';
function App() {
  const [searchTerm, setSearchTerm] = useState('');
  return (<>
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search searchTerm={searchTerm}/>} />
          <Route path="*" element={<EmptyViewComponent />} />
        </Routes>
      </div>
    </BrowserRouter>
  </>
  );
}

export default App;
