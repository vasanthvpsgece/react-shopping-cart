import React, { useState } from 'react'
import Fade from 'react-reveal/Fade'

const Contact = (props) => {

    const [name, setStateName] = useState('');
    const [email, setStateEmail] = useState('');
    const [address, setStateAddress] = useState('');

    const inputChangeHandler = (event) => {
        if(event.target.name === "name") {
            setStateName(event.target.value)
        }
        if(event.target.name === "email") {
            setStateEmail(event.target.value)
        }
        if(event.target.name === "address") {
            setStateAddress(event.target.value)
        }
    }

    console.log('form rendered')

        return(
            <Fade right cascade>
            <div>
                <form className='form-container'>
                    <div>
                        <label>Email: </label>
                        <input name="email" type="email" required onChange={inputChangeHandler} value={email}></input>
                    </div>
                    <div>
                        <label>Name: </label>
                        <input name="name" type="name" required onChange={inputChangeHandler} value={name}></input>
                    </div>
                    <div>
                        <label>Address: </label>
                        <input name="address" type="address" required onChange={inputChangeHandler} value={address}></input>
                    </div>
                    <button type="submit" className="button primary">Checkout</button>
                </form>
            </div>
            </Fade>
        )
}

export default Contact;