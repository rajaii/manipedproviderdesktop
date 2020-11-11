import React from 'react';
import { connect } from 'react-redux';

import { editProfile, fetchServices } from '../../actions/appActions.js';
import AddServicesAndPricing from './AddServicesAndPricing.js';
import ServicesAdded from './ServicesAdded.js';
import './Register.css';





class PreDash extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nails_services: {
                openForm: false,
                openRcpt: false,
                amtSA: []
            },
            hair_services: {
                openRcpt: false,
                openForm: false,
                amtSA: []
            },
            massage_services: {
                openSNPList: false,
                openForm: false,
                amtSA: []
            },
        }
    }

    handleAdd = e => {
        e.preventDefault();
        console.log(e.target.name)
        this.setState({
            [e.target.name]: {
                ...this.state[e.target.name],
                openForm: true,
                openSNPList: false
            }
        })
        
    }


   

    showWidget = widget => {
        widget.open();
    }

    closeSNP = (e, service) => {
        this.setState({
            ...this.state,
            [e.target.name]: {
                ...this.state[e.target.name],
                openForm: false,
                openSNPList: true
            }
        })
        this.props.fetchServices(service);

    }

    render() {

        const userId = localStorage.getItem('uID');
        const photoWidget = window.cloudinary.createUploadWidget({
            cloudName: 'maniped', 
            uploadPreset: 'manipedProvider_preset',
            cropping: true}, (error, result) => { 
              if (!error && result && result.event === "success") { 
                console.log('Done! Here is the image info: ', result.info); 
                console.log(result.info.secure_url)
                /////////////////////////////////////////////////
                const body = {work_img_url_1: result.info.secure_url}
                this.props.editProfile(userId, body);
                //potential error needed to be give to user here if editProfile does not work
                window.confirm('Thank you for adding your photo.  Please continue with your application');
              }
            }
          )


        return (
            <div className='serviceButtons'>
                {/*display the servicesAdded here will need to map the reducer and display here if open RCT is true and ...map()... */}
                <div className='nailsButton'>
                    <button name='nails_services' onClick={this.handleAdd}>Add New Nails Service</button>
                </div>
                
                {this.state.nails_services.openForm && <AddServicesAndPricing close={this.closeSNP} stVal='nails_services' service='nails'/>}
                
                {/*display the servicesAdded here will need to map the reducer and display here if open RCT is true and ...map()... */}
                <div className='hairButton'>
                    <button name='hair_services' onClick={this.handleAdd}>Add New Hair Service</button>
                </div>
                {this.state.hair_services.openForm && <AddServicesAndPricing close={this.closeSNP} stVal='hair_services' service='hair'/>}
            
                {/*display the servicesAdded here will need to map the reducer and display here if open RCT is true and ...map()... */}
                <div className='massageButton'>
                    <button name='massage_services' onClick={this.handleAdd}>Add New Massage Service</button>
                </div>
                {this.state.massage_services.openForm && <AddServicesAndPricing close={this.closeSNP} stVal='massage_services' service='massage'/>}
            
            
            </div>
            
        )
    }
}

const mapStateToProps = state => {
    return {
        
    }
}

export default connect(null, { editProfile })(PreDash);