import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import {DashHeaderSub} from './DashHeaderSub.js';
import { fetchProfile } from '../../actions/appActions.js';
import { logout } from '../../actions/authActions.js';
import '../Nav.css';

class DashHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    componentDidMount() {
        let userId = localStorage.getItem('uID')
        this.props.fetchProfile(userId);
    }

    handleLogout = e => {
        e.preventDefault();
        this.props.logout();
        this.props.history.push('/');
        
    }


    render() {
        return (
        <div>
            <div className='search' id='sticky'>
                <div>

                    <div className='frontFlex'>

                        {/* <img src='./logo.png'/>
                        <p> | </p> */}

                        <p className='p2'>maniPed</p>
                        
                    </div>
                    
                </div>
                    
                <div className='midFlex'>
                    <p className='p2'>Welcome {this.props.userInfo && this.props.userInfo.username}</p>
                </div>
            
                <div className='newNavFlex'>

                    
                    <p onClick={this.handleLogout} className='logout'>Logout</p>
                    

                </div>
            </div>
            
            <div>
                <DashHeaderSub/>
            </div>
            

        </div>
        )
        
    }
}

const mapStateToProps = state => {
    return {
        userInfo: state.providerUserInfoReducer.usersInfo,
        isLoggedIn: state.loginReducer.isLoggedIn,
    }
}
const ThisComponent = withRouter(DashHeader);

export default connect(mapStateToProps, { fetchProfile, logout })(ThisComponent);