import React, { Component } from 'react';
import './index.css';
import Products from './components/Products';
import data from './data.json';

class App extends Component{

  constructor(props) {
    super(props);
    this.state = {
      products: data.products,
      size: "",
      sort: ''
    }
  }
  
  render() {  
    return (
    <div className='grid-container'>
      <header>
        <a href='/'>React Shopping Cart</a>
      </header>
      <main>
        <div className="content">
          <div className="products">
            <Products products={this.state.products}></Products>
          </div>
          <div className="sidebar">
            Cart Items
          </div>
        </div>
      </main>
      <footer>
        All Rights Reserved
      </footer>
    </div>
    );
  }
}

export default App;
