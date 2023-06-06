import React, { useState } from 'react';
import { connect } from 'react-redux';

import { editProfile } from '../../actions/appActions.js';

function NameImg (props) {
    const [ name, setName ] = useState('');
    
    function handleChange(e) {
        setName(e.target.value)
    }

    function handleSubmit(e, n) {
        e.preventDefault();
        let id = localStorage.getItem('uID');
        let body;
        if (n === '1') {
            body = {work_image_url_1_name: name}
        } else if (n === '2') {
            body = {work_image_url_2_name: name}
        } else if (n === '3') {
            body = {work_image_url_3_name: name}
        } else if (n === '4') {
            body = {work_image_url_4_name: name}
        } else if (n === '5') {
            body = {work_image_url_5_name: name}
        } else if (n === '6') {
            body = {work_image_url_6_name: name}
        } else if (n === '7') {
            body = {work_image_url_7_name: name}
        } else {
            body = {work_image_url_8_name: name}
        }


        props.editProfile(id, body);
    }
     
    return (
        <form type='submit' onSubmit={(e) => handleSubmit(e, props.num)}>
            <input
            value={name}
            onChange={handleChange}
            placeholder='Enter the pictures name'
            />
            <button>Set Name</button>
        </form>
    )
}

export default connect(null, { editProfile })(NameImg);