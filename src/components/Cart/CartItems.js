import React, { Component } from 'react'
import formatCurrency from '../../utils/utils'
import Fade from 'react-reveal/Fade'

class CartItems extends Component {

    render() {
        let total = null;
        let button = null

        const cartItems = this.props.cartItems.map(cartItem => {
            return (<li key={cartItem._id}>
                        <div>
                            <img src={cartItem.image} alt={cartItem.title} />
                        </div>
                        <div className="right">
                            <div>{cartItem.title}</div>
                            <div>{formatCurrency(cartItem.price)} X {cartItem.count} </div>
                            <button onClick={() => this.props.onRemoveClick(cartItem)}>Remove</button>
                        </div>
                    </li>)
        })

        if(this.props.cartItems.length > 0) {
            total = "Total: " + formatCurrency(this.props.cartItems.reduce((acc, cur) => acc + (cur.count * cur.price),0))
            button = <button className="button primary" onClick={this.props.onProceedOrder}>Proceed</button>;
        }

        return(
            <React.Fragment>
                <div className="cart-items">
                    <Fade left cascade>
                    <ul>
                        {cartItems}
                    </ul>
                    </Fade>
                </div>
                <div className="total">
                    <div>{total}</div>
                    {button}
                </div>
            </React.Fragment>
        )
    }
}

export default CartItems;