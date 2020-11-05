import React from 'react';
import { connect } from 'react-redux';
import * as yup from 'yup';

import ServicesAndPricing from './ServicesAndPricing.js';
import './Register.css';

class PreDash extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nails_services: [],
            hair_service: [],
            massage_service: []
        }
    }

    handleAdd = e => {
        this.setState({
            ...this.state,
            [e.target.name]: [...this.state[e.target.name], null]
        })
    
    }

    render() {
        return (
            <div>
                <div className='nailsButton'>
                    <button name='nails_services' onClick={this.handleAdd}>Add New Nails Service</button>
                </div>
                {this.state.nails_services.map(i => {
                    console.log('hellp')
                    return <ServicesAndPricing />
                })}
                <div>
                    
                </div>
            </div>
            
        )
    }
}

export default PreDash;