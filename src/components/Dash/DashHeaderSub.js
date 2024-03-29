import React, {useEffect, useState} from 'react';
import { withRouter } from 'react-router-dom';

import { Profile } from './Profile.js';
import Showcase from './Showcase.js';
import AddServices from './AddServices.js';
import '../../components/Nav.css';


function DashHeaderSub(props) {
    const [state, setState] = useState({
        profile: false,
        showcase: false,
        services: false
    })

    function handleServiceClick () {
        setState({
            services: !state.services
        })
    }

    function handleProfileClick () {
        setState({
            profile: !state.profile
        })
        console.log(state.profile)
    }

    function handleShowcaseClick () {
        setState({
            showcase: !state.showcase
        })
    }


    return (
        <div>

            <div className='dashSub'>
                <p onClick={handleProfileClick} className='butn'>Profile</p>
                <p className='butn'>Add Bank Info</p>
                <p onClick={handleServiceClick} className='butn'>Add Services</p>
                <p onClick={handleShowcaseClick} className='butn'>Showcase</p>
            </div>

            {state.profile && <Profile usersInfo={props.usersInfo} />}
            {state.showcase && <Showcase usersInfo={props.usersInfo}/>}
            {state.services && <AddServices/>}

        </div>
    )
}

const ThisComponent = withRouter(DashHeaderSub);

export default ThisComponent;

