import React from 'react'
import Login from './components/Login/Login'
import Routess from './routes/Routes'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Restaurants from './pages/Restaurants'
import Home from './pages/Home'
import Biryani from './pages/Biryani'
import CartPage from './pages/CartPage'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Routess />} >
            <Route index element={<Home />} />
            <Route path='cart' element={<CartPage/>} />
            <Route path="home" element={<Home />} />
            <Route path='home/biryani' element={<Biryani />} />
            <Route path='biryani' element={<Biryani />} />
            <Route path='restaurant' element={<Restaurants />} />
          </Route>
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
