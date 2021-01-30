import React, {Component} from 'react';
import CartItems from './CartItems';

class Cart extends Component {

    render() {
        let cartHeader = <div className="cart cart-header">No Items in the Cart</div>;

        if(this.props.cartItems.length !== 0) {
             cartHeader = <div className="cart cart-header">You have {this.props.cartItems.length} Items</div>
        }

        return(
            <div className="cart">
                {cartHeader}
                <CartItems cartItems={this.props.cartItems} onRemoveClick={this.props.onRemoveClick} />
            </div>
        )
    }
}

export default Cart;