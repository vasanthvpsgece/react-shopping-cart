import React, { useEffect } from 'react'
import Product from './Product';
import Fade from 'react-reveal/Fade'
import '../../index.css';
import {fetchProductsActions} from '../../actions/productActions'
import {openModal, closeModal} from '../../actions/modalActions'
import { connect } from 'react-redux';
import ModalDetails from '../ModalDetails/ModalDetails'

import Modal from 'react-modal'

const Products = ({fetchProducts, ...props}) => {

        useEffect(() => {
            fetchProducts();
        }, [fetchProducts])

        return (
            <React.Fragment>
                <Fade bottom>
                    <ul className="products">
                        {
                            props.products ?
                            props.products.map(product => (
                            <Product key={product._id} product={product} openModal={props.openModal} /> )):
                            <div>Loading ...</div>
                        }
                    </ul>
                </Fade>
                <Modal isOpen={props.isModalOpen} onRequestClose={props.closeModal}>
                    <ModalDetails />
                </Modal>
            </React.Fragment>
        )
}

const mapStateToProps = (state) => {
    return {
        products: state.productsStore.products,
        modalProduct: state.modalStore.product,
        isModalOpen: state.modalStore.isOpen
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchProducts: () => dispatch(fetchProductsActions()),
        openModal: (product) => dispatch(openModal(product)),
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);