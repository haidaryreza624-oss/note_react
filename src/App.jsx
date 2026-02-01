import React from 'react'
import Appbar from './components/Appbar'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'

import Createpage from './pages/Createpage'


function App() {
  return (
    <div>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/add' element={<Createpage />} />
      </Routes>


    </div>
  )
}

export default App
