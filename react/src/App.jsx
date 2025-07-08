import React from 'react'
import Greet from './components/Greet'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import ProductInfo from './components/ProductInfo'
import Add from './components/Add'

const App = () => {
  return (
    <div>
      <Header/>
      <Main/>
      <Footer/>
      <ProductInfo/>
      <Add/>
      
    </div>
  )
}

export default App