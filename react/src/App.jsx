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
import Cart from './components/Cart'
import Weather from './components/Weather'
import UserStatus from './components/UserStatus'



const ValidPassword = () => <h1>Valid Password</h1>
const InvalidPassword = () => <h1>Invalid Password</h1>

const Password = ({ isValid }) => isValid ? <ValidPassword /> : <InvalidPassword />;

const App = () => {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
      <ProductInfo />
      <Add />
      <Person name="bijay" age={22} />
      <Product name="Iphoen" price={2000} />

      <Card>
        <h1>my card</h1>
        <p>this is some content for card 1</p>
      </Card>

      <Password isValid={true} />
      <Cart />
      <Weather />
      <UserStatus/>

    </div>
  )
}

export default App