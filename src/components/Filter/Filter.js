import React, {Component} from 'react';

class Filter extends Component {

    render() {
        return(
        <div className="filter">
            <div className="filter-result">
                {this.props.count} Products
            </div>
            <div className="filter-sort">
                Order By {" "}
                <select onChange={this.props.onSortChangeHandler}>
                    <option>Latest</option>
                    <option value="lowest">Lowest</option>
                    <option value="highest">Highest</option>
                </select>
            </div>
            <div>
                Filter By {""}
                <select onChange={this.props.onFilterChangeHandler}>
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
}

export default Filter;