import React, {useState} from 'react'
import Nav from './component/Nav'
import { BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Video from './pages/Video'
import Signup from './pages/Signin'
import Login from './pages/Login'



const App= () => {
const [side,setSide]= useState(true)
  return (
    <>
      <Router>
        <Nav setSide={setSide} />
        <Routes>
          <Route path='/home' element={<Home side={side} />} />
          <Route path='/home/video/:categoryId/:id' element={<Video />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/' element={<Login />} />
        </Routes>
        </Router>
      
    </>
  )
}

export default App
