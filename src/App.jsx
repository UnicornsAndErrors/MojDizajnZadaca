import React, {useState, useEffect} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
import NasaFotka from "./components/NasaFotka";
import "./App.css"

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
         <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/nasafotka" element={<NasaFotka/>}/>
         </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App