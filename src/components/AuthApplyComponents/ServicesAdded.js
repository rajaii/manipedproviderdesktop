import React from 'react';

function ServicesAdded (props) {
    return (
        <div>
            <h1>You have added the service:</h1>
            <p>Service: {props.service}</p>
            <p>Price: {props.price}</p>
        </div>
    )
}

export default ServicesAdded;