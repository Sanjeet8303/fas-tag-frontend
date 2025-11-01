import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import Dashboard from './components/Dashboard'
import RechargeHistory from './components/RechargeHistory'
import Wallet from './components/Wallet'
import Offers from './components/Offers'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import F from './components/F'
import R from './components/R'
import W from './components/W'
import O from './components/O'


function App() {


  const [count, setCount] = useState(0)

  return (
    <div>
      {/* <Navbar></Navbar>
      <Dashboard></Dashboard>
      <BrowserRouter></BrowserRouter> */}
      <BrowserRouter>
        <Routes>
          {/* Default route */}
          <Route path="/" element={<Navbar />} />
          {/* Dashboard route */}
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
