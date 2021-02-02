import React from 'react'
import formatCurrency from '../../utils/utils'
import '../../index.css';
import {addToCartActions} from '../../actions/cartActions'
import { connect } from 'react-redux';

const Product = (props) => {

        return(
            <li>
                <div className="product">
                    <a href={"#" + props.product._id} onClick={() => props.openModal(props.product)}>
                        <img src={props.product.image} alt={props.product.title}></img>
                        <p>{props.product.title}</p>
                    </a>
                    <div className="product-price">
                        <div>{formatCurrency(props.product.price)}</div>
                        <button className="button primary" onClick={() => props.addToCart(props.product)}>Add to Cart</button>
                    </div>
                </div>
            </li>
        )
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (cartItem) => dispatch(addToCartActions(cartItem))
    }
}
export default connect(null, mapDispatchToProps)(Product)