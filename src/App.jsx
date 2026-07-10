import { useState } from 'react';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Formatter from './Components/JSONFormatter';

function App() {
  return (
    <div className="flex flex-col items-center">
      <NavBar />
      <Home />
      <Formatter />
    </div>
  )
}

export default App
