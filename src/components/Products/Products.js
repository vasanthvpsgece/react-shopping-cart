import React, { Component } from 'react'
import Product from './Product';
import Fade from 'react-reveal/Fade'
import '../../index.css';

class Products extends Component {
    render() {
        return (
            <Fade bottom>
                <ul className="products">
                    {this.props.products.map(product => (
                        <Product key={product._id} product={product} onAddToCartClick={this.props.onAddToCartClick} />
                    ))}
                </ul>
            </Fade>
        )
    }

}

export default Products;