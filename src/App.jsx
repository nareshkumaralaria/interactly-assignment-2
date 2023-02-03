import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Share from './components/Share';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/share/:id' element={<Share />} />
      </Routes>
    </Router>
  )
}

export default App
