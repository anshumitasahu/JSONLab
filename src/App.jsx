import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Formatter from './Components/JSONFormatter';

function App() {
  return (
    <div className="flex flex-col items-center font-mono min-h-screen bg-background bg-[radial-gradient(circle,#f59e0b22_2px,transparent_1px)] [background-size:24px_24px] font-base">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/JSONFormatter" element={<Formatter />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
