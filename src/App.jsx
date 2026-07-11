import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Formatter from './Components/JSONFormatter';

function App() {
  return (
    <div className="font-mono min-h-screen bg-hero bg-[radial-gradient(circle,#f59e0b22_2px,transparent_1px)] [background-size:24px_24px] font-base">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/JSONFormatter" element={
            <div className="flex justify-center items-center py-10 w-full">
              <Formatter />
            </div>
          } />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
