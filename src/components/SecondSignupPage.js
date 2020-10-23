import React from 'react';
import { connect } from 'react-redux';

import './Register.css';

class SecondSignupPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <form className='formCont' type='submit' onSubmit={this.handleSubmit}>
            <h1 className="welcome">Please continue with your application</h1>
           
                <label>Enter your address here:</label>
                <input 
                type='text'
                name='first_name'
                value={this.state.first_name}
                placeholder='first name'
                onChange={this.handleChange}
                />
                
                <label>Enter your profile header here:</label>
                <input 
                type='text'
                name='last_name'
                value={this.state.last_name}
                placeholder='last name'
                onChange={this.handleChange}
                />
               
                 <label>Describe yourself for your future clients:</label>
                <textarea 
                type='text'
                name='username'
                value={this.state.username}
                placeholder='username'
                onChange={this.handleChange}
                rows='10'
                cols='50'
                />
                <h3>Here You will be entering your pricing and services for nails.</h3>
               
                 <label>Enter your nails service:</label>
                <input 
                type='text'
                name='email'
                value={this.state.email}
                placeholder='email'
                onChange={this.handleChange}
                />
                
                 <label>Enter your desired pricing for hair services:</label>
                <input 
                type='text'
                name='phone_number'
                value={this.state.phone_number}
                placeholder='phone number'
                onChange={this.handleChange}
                />
                 
                <label>Enter your desired pricing forhere:</label>
                <input 
                type='text'
                name='zipcode'
                value={this.state.zipcode}
                placeholder='zipcode'
                onChange={this.handleChange}
                />
                 <label>Enter password here:</label>
                 <p className='p'>Must have at least 8 1 upper case letter, at least 1 lower case letter, at least 1 number, and at least 1 special character:</p>
                
                <input 
                type='password'
                name='password'
                value={this.state.password}
                placeholder='password'
                onChange={this.handleChange}
                />
               
                 <label>Verify password here:</label>
                <input 
                type='password'
                name='verifyPassword'
                value={this.state.verifyPassword}
                placeholder='verify password'
                onChange={this.handleChange}
                />
                
                <button>Sign Up</button>
                {this.props.registering === true ? <div className='lds-hourglass'>Registering...</div> : null}
            
            </form>
            </div>
        )
    }
}

export default SecondSignupPage;