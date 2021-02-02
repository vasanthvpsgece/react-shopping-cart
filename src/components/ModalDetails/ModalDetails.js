import React from 'react'
import { connect } from 'react-redux'
import Zoom from 'react-reveal/Zoom'
import formatCurrency from '../../utils/utils'
import {addToCartActions} from '../../actions/cartActions'
import {closeModal} from '../../actions/modalActions'

const ModalDetails = (props) => {
    return (
        <Zoom>
            <button className='close-modal' onClick={props.closeModal}>X</button>
             <div className='product-details'>
                <img src={props.modalProduct.image} alt={props.modalProduct.title}></img>
                <div className='product-details-description'>
                    <p><strong>{props.modalProduct.title}</strong></p>
                    <p>{props.modalProduct.description}</p>
                    <p>
                        Available Sizes:{" "}
                        {props.modalProduct.availableSizes.map(size => {
                            return (
                                <span>
                                    {" "}<button className="button">{size}</button>
                                </span>
                            )
                        })}
                    </p>
                    <p>
                        <div className='product-price'>
                            {formatCurrency(props.modalProduct.price)}
                            <button className='button primary' onClick={() => {
                                props.addToCart(props.modalProduct);
                                props.closeModal();
                            }}>Add to Cart</button>
                        </div>
                    </p>
                </div>
            </div>
        </Zoom>
    )
}

const mapStateToProps = (state) => {
    return {
        modalProduct: state.modalStore.product
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (product) => dispatch(addToCartActions(product)),
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalDetails);