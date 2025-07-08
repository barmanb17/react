import React from 'react'
import Greet from './components/Greet'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import ProductInfo from './components/ProductInfo'
import Add from './components/Add'
import Person from './components/Person'
import Product from './components/Product'
import Card from './components/Card'

const App = () => {
  return (
    <div>
      <Header/>
      <Main/>
      <Footer/>
      <ProductInfo/>
      <Add/>
      <Person name="bijay" age={22}/>
      <Product name="Iphoen" price={2000}/>

       <Card>
        <h1>my card</h1>
        <p>this is some content for card 1</p>
         </Card>
      
    </div>
  )
}

export default App