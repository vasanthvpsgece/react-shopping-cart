import React, {Component} from 'react'
import Fade from 'react-reveal/Fade'

class Contact extends Component {

    state = {
        name: '',
        email: '',
        address: ''
    }

    inputChangeHandler = (event) => {
        this.setState({[event.target.name]: [event.target.name]})
    }

    render() {
        return(
            <Fade right cascade>
            <div>
                <form className='form-container'>
                    <div>
                        <label>Email: </label>
                        <input name="email" type="email" required onChange={this.inputChangeHandler}></input>
                    </div>
                    <div>
                        <label>Name: </label>
                        <input name="name" type="name" required onChange={this.inputChangeHandler}></input>
                    </div>
                    <div>
                        <label>Address: </label>
                        <input name="address" type="address" required onChange={this.inputChangeHandler}></input>
                    </div>
                    <button type="submit" className="button primary" onClick={this.props.onCheckout}>Checkout</button>
                </form>
            </div>
            </Fade>
        )
    }
}

export default Contact;