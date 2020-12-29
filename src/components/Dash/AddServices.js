import React, { useState } from 'react';
import { connect } from 'react-redux';

import { fetchServices } from '../../actions/appActions.js';
import AddServicesAndPricing from './AddServicesAndPricing.js';
import ServicesAdded from './ServicesAdded.js';
import './Register.css';

//component to Add services will route from Dash in case provider wants to add more services

function AddServices() {
    const [ state, setState ] = useState({
        nails_services: {
            openForm: false,
            openSNPList: false,
            amtSA: []
        },
        hair_services: {
            openSNPList: false,
            openForm: false,
            amtSA: []
        },
        massage_services: {
            openSNPList: false,
            openForm: false,
            amtSA: []
        }
    })

    return (
        <div>

        </div>
    )

}

export default connect(null, { addService })(AddServices);