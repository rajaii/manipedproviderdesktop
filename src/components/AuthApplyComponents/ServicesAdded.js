import React from 'react';

import './Register.css'

function ServicesAdded (props) {
    return (
        <div className='sAWrap'>
            <h1 className='innerSA'>You have added the {props.type}:</h1>
            <p className='innerSA'>Service: {props.service}</p>
            <p className='innerSA'>Price: {props.price}</p>
        </div>
    )
}

export default ServicesAdded;