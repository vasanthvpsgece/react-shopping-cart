import React, { Component } from 'react';
import './index.css';
import Products from './components/Products/Products';
import data from './data.json';
import Filter from './components/Filter/Filter';
import Cart from './components/Cart/Cart'

class App extends Component{

  constructor(props) {
    super(props);
    this.state = {
      products: data.products,
      size: "",
      sort: '',
      cartItems: []
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

  addToCartClickHandler = (product) => {
      let cartItems = this.state.cartItems.slice();
      let alreadyExists = false;

      cartItems = cartItems.map(cartItem => {
        if(cartItem._id === product._id) {
          alreadyExists = true;
          return ({...cartItem, count: cartItem.count+1})
        }
        return cartItem;
      })

      if(!alreadyExists) {
        cartItems.push({...product, count: 1})
      }

      this.setState({cartItems: cartItems})
  }

  removeClickHandler = (product) => {
    let dupCartItems = this.state.cartItems.slice();

    dupCartItems = dupCartItems.map(cartItem => {
      if(cartItem._id === product._id) {
          return({...cartItem, count: cartItem.count-1})
      }
      return cartItem;
    }).filter(cartItem => cartItem.count > 0)

    this.setState({cartItems: dupCartItems})   
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
            <Products products={this.state.products} onAddToCartClick={this.addToCartClickHandler}></Products>
          </div>
          <div className="sidebar">
            <Cart cartItems={this.state.cartItems} onRemoveClick={this.removeClickHandler} />
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
