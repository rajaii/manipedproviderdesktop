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
            hair_services: [],
            massage_services: []
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
            <div className='serviceButtons'>
                <div className='nailsButton'>
                    <button name='nails_services' onClick={this.handleAdd}>Add New Nails Service</button>
                </div>
                {this.state.nails_services.map(i => {
                    console.log('hellp')
                    return <ServicesAndPricing />
                })}
                

                <div className='hairButton'>
                    <button name='hair_services' onClick={this.handleAdd}>Add New Hair Service</button>
                </div>
                {this.state.hair_services.map(i => {
                    
                    return <ServicesAndPricing />
                })}
                

                <div className='massageButton'>
                    <button name='massage_services' onClick={this.handleAdd}>Add New Massage Service</button>
                </div>
                {this.state.massage_services.map(i => {
                    
                    return <ServicesAndPricing />
                })}
                
                    
            
            </div>
            
        )
    }
}

export default PreDash;