import { useState } from 'react';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Formatter from './Components/JSONFormatter';

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <Formatter />
    </>
  )
}

export default App
