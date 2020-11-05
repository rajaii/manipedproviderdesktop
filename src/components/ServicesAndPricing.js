import React, { useState } from 'react';
import { connect } from 'react-redux';
import { editProfile } from '../actions/appActions';

function ServicesAndPricing (props) {
    const [ service, setService ] = useState('');
    const [ price, setPrice ] = useState('');


    function handleSubmit () {

    }

    return (
        <div className='sPWrap'>
            <form type='submit' onSubmit={handleSubmit}>
                <label>Add the specific {`${props.service}`} service type here: </label>
                <input 
                type='text'
                onChange={(e) => setService(e.target.value)}
                value={service}
                name='service'
                placeholder='enter service'
                />
                <button onSubmit={handleSubmit}>Add Service</button>
                <label>Add the {`${props.service}`} service's pricing here (must be of the form $100.00 ie dollar sign, dollar value, period, cents): </label>
                <input 
                type='text'
                onChange={(e) => setPrice(e.target.value)}
                value={price}
                name='price'
                placeholder='enter price'
                />
                <button onSubmit={handleSubmit}>Add price</button>
            </form>        
        </div>
    )
}

export default connect(null, editProfile)(ServicesAndPricing);