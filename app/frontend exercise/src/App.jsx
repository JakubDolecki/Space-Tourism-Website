import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { HashRouter, Route, Routes } from "react-router-dom";
import './App.css'
import { HomePage } from './components/HomePage';

function App() {
  return (
   <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
      </Routes>
   </HashRouter>
  )
}

export default App
