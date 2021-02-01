import React from 'react'
import formatCurrency from '../../utils/utils'
import Fade from 'react-reveal/Fade'
import { remFromCartActions, proceedToOrder } from '../../actions/cartActions'
import { connect } from 'react-redux';

const CartItems = ({cartItemsList, remItemFromCart, proceedOrder}) => {

        let total = null;
        let button = null

        const cartItems = cartItemsList.map(cartItem => {
            return (<li key={cartItem._id}>
                        <div>
                            <img src={cartItem.image} alt={cartItem.title} />
                        </div>
                        <div className="right">
                            <div>{cartItem.title}</div>
                            <div>{formatCurrency(cartItem.price)} X {cartItem.count} </div>
                            <button onClick={() => remItemFromCart(cartItem._id)}>Remove</button>
                        </div>
                    </li>)
        })

        if(cartItemsList.length > 0) {
            total = "Total: " + formatCurrency(cartItemsList.reduce((acc, cur) => acc + (cur.count * cur.price),0))
            button = <button className="button primary" onClick={proceedOrder}>Proceed</button>;
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

const mapStateToProps = (state) => {
    return{
        cartItemsList: state.cartItemsStore.cartItems
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        remItemFromCart: (_id) => dispatch(remFromCartActions(_id)),
        proceedOrder: () => dispatch(proceedToOrder())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartItems);