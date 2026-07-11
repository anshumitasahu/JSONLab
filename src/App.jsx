import { useState } from 'react';
import Formatter from './Components/JSONFormatter';

function App() {
  return (
    <div className="min-h-screen bg-black bg-[radial-gradient(circle,rgba(255,255,255,0.08)_2px,transparent_2px)] bg-[length:20px_20px] font-base flex flex-col items-center justify-center w-full h-full dot-grid p-10">
      <Formatter />
    </div>
  )
}

export default App
