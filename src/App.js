import React from 'react';
import './index.css';
import Products from './components/Products/Products';
import Filter from './components/Filter/Filter';
import Cart from './components/Cart/Cart'

const Footer = () => {
  return (
    <footer>
        All Rights Reserved
    </footer>
  )
}

const Header = () => {
  return (
    <header>
      <a href='/'>React Shopping Cart</a>
    </header>
  )
}

const App = () => {

    return (
    <div className='grid-container'>
      <Header />
      <main>
        <div className="content">
          <div className="productsDiv">
            <Filter />
            <Products />
          </div>
          <div className="sidebar">
            <Cart />
          </div>
        </div>
      </main>
      <Footer />
    </div>
    );
}

export default App;
