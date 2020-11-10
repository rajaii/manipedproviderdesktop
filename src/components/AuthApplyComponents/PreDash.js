import React from 'react';
import { connect } from 'react-redux';


import AddServicesAndPricing from './AddServicesAndPricing.js';
import ServicesAdded from './ServicesAdded.js';
import './Register.css';
//What:
//want only 1 addsnp to show up when they click the respective add service button
//when they click dismiss it close that and set the state of those inputs to ''
//when they close those the predash runs a get to the services and price where provider_id === uID:
//map through ^ and display a ServicesAdded component for each above the respective AddServicesAndPricing component so provider can see what is added




class PreDash extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nails_services: {
                openForm: false,
                openRcpt: false,
                amtSNP: []
            },
            hair_services: {
                openRcpt: false,
                openForm: false,
                amtSNP: []
            },
            massage_services: {
                openRcpt: false,
                openForm: false,
                amtSNP: []
            },
        }
    }

    handleAdd = e => {
        this.setState({
            [e.target.name]: {
                ...this.state[e.target.name],
                openForm: true
            }
        })
    }

   

    showWidget = widget => {
        widget.open();
    }

    closeSNP = e => {
        this.setState({
            ...this.state,
            [e.target.name]: {
                ...this.state[e.target.name],
                openForm: false
            }
        })
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
                <div className='nailsButton'>
                    <button name='nails_services' onClick={this.handleAdd}>Add New Nails Service</button>
                </div>
                {this.state.nails_services.openForm && <AddServicesAndPricing close={this.closeSNP} stVal='nails_services' service='nails'/>}
                

                <div className='hairButton'>
                    <button name='hair_services' onClick={this.handleAdd}>Add New Hair Service</button>
                </div>
                {this.state.hair_services.openForm && <AddServicesAndPricing close={this.closeSNP} stVal='hair_services' service='hair'/>}
            
            
                <div className='massageButton'>
                    <button name='massage_services' onClick={this.handleAdd}>Add New Massage Service</button>
                </div>
                {this.state.massage_services.openForm && <AddServicesAndPricing close={this.closeSNP} stVal='massage_services' service='massage'/>}
            
            
            </div>
            
        )
    }
}

export default PreDash;