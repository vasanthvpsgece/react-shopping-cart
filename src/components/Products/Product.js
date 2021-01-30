import React, {Component} from 'react'
import formatCurrency from '../../utils/utils'
import '../../index.css';

class Product extends Component {

    render() {
        return(
            <li>
                <div className="product">
                    <a href={"#" + this.props.product._id}>
                        <img src={this.props.product.image} alt={this.props.product.title}></img>
                        <p>{this.props.product.title}</p>
                    </a>
                    <div className="product-price">
                        <div>{formatCurrency(this.props.product.price)}</div>
                        <button className="button primary" onClick={() => this.props.onAddToCartClick(this.props.product)}>Add to Cart</button>
                    </div>
                </div>
            </li>
        )
    }
}

export default Product