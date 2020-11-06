import React from 'react';
import { connect } from 'react-redux';


import ServicesAndPricing from './ServicesAndPricing.js';
import './Register.css';

class PreDash extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nails_services: {
                open: false,
                amtSNP: []
            },
            hair_services: {
                open: false,
                amtSNP: []
            },
            massage_services: {
                open: false,
                amtSNP: []
            },
        }
    }

    handleAdd = e => {
        //[false, [null,]],
        this.setState({
            ...this.state,
            [e.target.name]:{
                ...this.state[e.target.name],
                amtSNP: [...this.state[e.target.name].amtSNP, null]
            } 
        })
    
    }

    showWidget = widget => {
        widget.open();
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
                {this.state.nails_services.amtSNP.map(i => {
                    
                    return <ServicesAndPricing service='nails'/>
                })}
                

                <div className='hairButton'>
                    <button name='hair_services' onClick={this.handleAdd}>Add New Hair Service</button>
                </div>
                {this.state.hair_services.amtSNP.map(i => {
                    
                    return <ServicesAndPricing service='hair'/>
                })}
                

                <div className='massageButton'>
                    <button name='massage_services' onClick={this.handleAdd}>Add New Massage Service</button>
                </div>
                {this.state.massage_services.amtSNP.map(i => {
                    
                    return <ServicesAndPricing service='massage'/>
                })}
                
                    
            
            </div>
            
        )
    }
}

export default PreDash;