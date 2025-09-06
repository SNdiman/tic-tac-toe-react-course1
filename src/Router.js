import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from './pages/Home'

function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/details" element={<Home/>} />
            <Route path="/game-on" element={<Home/>} />

        </Routes>
    
    </BrowserRouter>
  )
}

export default Router
