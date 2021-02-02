import React, { useMemo } from 'react';
import { connect } from 'react-redux';
import Contact from '../Contact/Contact';
import CartItems from './CartItems';

const Cart = ({cartItems, showContactForm}) => {

        let cartHeader = <div className="cart cart-header">No Items in the Cart</div>;

        if(cartItems.length !== 0) {
             cartHeader = <div className="cart cart-header">You have {cartItems.length} Items</div>
        }

        let contactForm = useMemo(() => {
            return (
                <Contact />
            )
        }, [])

        return(
            <div className="cart">
                {cartHeader}
                <CartItems />
                {showContactForm && contactForm}
            </div>
        )
}

const mapStateToProps = (state) => {
    return{
        cartItems: state.cartItemsStore.cartItems,
        showContactForm: state.cartItemsStore.showContactForm
    }
}
export default connect(mapStateToProps)(Cart);