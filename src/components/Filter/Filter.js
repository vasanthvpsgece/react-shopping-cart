import React from 'react';
import { connect } from 'react-redux';
import { filterProductsActions, sortProductsActions } from '../../actions/productActions';

const Filter = ({products, sortProducts, filterProducts}) => {

        return(
        <div className="filter">
            <div className="filter-result">
                {products && products.length} Products
            </div>
            <div className="filter-sort">
                Order By {" "}
                <select onChange={(event) => sortProducts(event.target.value)}>
                    <option>Latest</option>
                    <option value="lowest">Lowest</option>
                    <option value="highest">Highest</option>
                </select>
            </div>
            <div>
                Filter By {""}
                <select onChange={(event) => filterProducts(event.target.value)} >
                    <option value="">ALL</option>
                    <option value="XS">XS</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                    <option value="XLL">XXL</option>
                </select>
            </div>
        </div>)
}

const mapStateToProps = (state) => {
    return {
        products: state.productsStore.products
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        filterProducts: (eventValue) => dispatch(filterProductsActions(eventValue)),
        sortProducts: (eventValue) => dispatch(sortProductsActions(eventValue))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Filter);