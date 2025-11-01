import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import F from './components/DasboardRoot'
import R from './components/RechargeRoot'
import W from './components/WalletRoot'
import O from './components/OfferRoot'


function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Navbar />} />
          <Route path="/dashboard" element={<F />} />
          <Route path='/rechargehistory' element={<R />}></Route>
          <Route path='/wallet' element={<W />}></Route>
          <Route path='/offers' element={<O />}></Route>

        </Routes>
      </BrowserRouter>



    </div>
  )
}

export default App
