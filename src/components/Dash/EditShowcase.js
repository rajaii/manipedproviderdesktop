import React, { useState } from 'react';
import { connect } from 'react-redux';

import { editProfile, fetchServices } from '../../actions/appActions.js';
import AddServicesAndPricing from './AddServicesAndPricing.js';
import ServicesAdded from './ServicesAdded.js';
import './Register.css';

//component to allow providers to edit/change and remove pics from their showcase

function EditShowcase(props) {

    return (
        <div>
            Showcase
        </div>
    )
}

export default connect(null, { editProfile })(showcase);