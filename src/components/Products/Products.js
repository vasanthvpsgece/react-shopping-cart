import React, { Component } from 'react'
import Product from './Product';
import '../../index.css';

class Products extends Component {
    render() {
        return (
            <React.Fragment>
                <ul className="products">
                    {this.props.products.map(product => (
                        <Product key={product._id} product={product} />
                    ))}
                </ul>
            </React.Fragment>
        )
    }

}

export default Products;