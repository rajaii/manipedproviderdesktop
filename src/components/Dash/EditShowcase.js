import React, { useState } from 'react';
import { connect } from 'react-redux';

import { editProfile } from '../../actions/appActions.js';
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