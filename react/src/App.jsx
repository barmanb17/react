import React from 'react'
import Home from "./pages/Home.jsx"
import Image from "./pages/Image.jsx"
import Resume from "./pages/Resume.jsx"
import Writer from "./pages/Writer.jsx"
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path= "image" element={<Image/>} />
      <Route path="/resume" element={<Resume/>}/>
      <Route path="/writer" element={<Writer/>}/>
    </Routes>
  )
}

export default App