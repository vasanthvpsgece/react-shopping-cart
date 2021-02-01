import React, { useEffect } from 'react'
import Product from './Product';
import Fade from 'react-reveal/Fade'
import '../../index.css';
import {fetchProductsActions} from '../../actions/productActions'
import { connect } from 'react-redux';

const Products = ({fetchProducts, ...props}) => {

        useEffect(() => {
            fetchProducts();
        }, [fetchProducts])

        return (
            <Fade bottom>
                <ul className="products">
                    {
                        props.products ?
                        props.products.map(product => (
                        <Product key={product._id} product={product} /> )):
                        <div>Loading ...</div>
                    }
                </ul>
            </Fade>
        )
}

const mapStateToProps = (state) => {
    return {
        products: state.productsStore.products
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchProducts: () => dispatch(fetchProductsActions()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);