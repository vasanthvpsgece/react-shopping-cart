import React, { Component } from 'react';
import './index.css';
import Products from './components/Products/Products';
import data from './data.json';
import Filter from './components/Filter/Filter';

class App extends Component{

  constructor(props) {
    super(props);
    this.state = {
      products: data.products,
      size: "",
      sort: ''
    }
  }
  
  filterChangeHandler = (event) => {
    console.log(event.target.value)
    if(event.target.value === "") {
      this.setState({size: event.target.value, products: data.products})
    } else {
      const filteredProducts = data.products.filter(product => product.availableSizes.indexOf(event.target.value) >= 0);
      this.setState({size: event.target.value, products: filteredProducts});
    }
  }

  sortChangeHandler = (event) => {

    const sortedProducts = this.state.products.slice().sort((a,b) => {
      if(event.target.value === 'lowest') {
        return a.price > b.price? 1 : -1
      } else if(event.target.value === 'highest') {
        return a.price > b.price? -1 : 1
      }
      return 0
    })

    this.setState({products: sortedProducts})
  }

  render() {  
    return (
    <div className='grid-container'>
      <header>
        <a href='/'>React Shopping Cart</a>
      </header>
      <main>
        <div className="content">
          <div className="productsDiv">
            <Filter 
              count={this.state.products.length} 
              onFilterChangeHandler={this.filterChangeHandler}
              onSortChangeHandler={this.sortChangeHandler}
            />
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
