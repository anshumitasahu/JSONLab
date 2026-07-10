import { useState } from 'react';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Formatter from './Components/JSONFormatter';

function App() {
  return (
    <div className="flex flex-col items-center font-mono min-h-screen bg-background bg-[radial-gradient(circle,#f59e0b22_1px,transparent_3px)] [background-size:24px_24px]">
      <NavBar />
      <Home />
      <Formatter />
    </div>
  )
}

export default App
