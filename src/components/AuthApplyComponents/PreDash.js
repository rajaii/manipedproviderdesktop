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
            },
        }
        this.closeSNP = this.closeSNP.bind(this);
    }

    
    handleAdd = e => {
        e.preventDefault();
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

  async  closeSNP (service, type, e) {
        await this.props.fetchServices(service, type);
        console.log('here',this.props.nailsServices)
        this.setState({
            ...this.state,
            [e.target.name]: {
                ...this.state[e.target.name],
                openForm: false,
                openSNPList: true
            }
        })
        

    }

    render() {

        const userId = localStorage.getItem('uID');
        const photo1Widget = window.cloudinary.createUploadWidget({
            cloudName: 'maniped', 
            uploadPreset: 'manipedProvider_preset',
            cropping: true}, (error, result) => { 
              if (!error && result && result.event === "success") { 
                console.log('Done! Here is the image info: ', result.info); 
                console.log(result.info.secure_url)
                /////////////////////////////////////////////////
                const body = {work_image_url_1: result.info.secure_url}
                this.props.editProfile(userId, body);
                //potential error needed to be give to user here if editProfile does not work
                window.confirm('Thank you for adding your portfolio photo.  Please continue with your application');
              }
            }
          )

          const photo2Widget = window.cloudinary.createUploadWidget({
            cloudName: 'maniped', 
            uploadPreset: 'manipedProvider_preset',
            cropping: true}, (error, result) => { 
              if (!error && result && result.event === "success") { 
                console.log('Done! Here is the image info: ', result.info); 
                console.log(result.info.secure_url)
                /////////////////////////////////////////////////
                const body = {work_image_url_2: result.info.secure_url}
                this.props.editProfile(userId, body);
                //potential error needed to be give to user here if editProfile does not work
                window.confirm('Thank you for adding your portfolio photo.  Please continue with your application');
              }
            }
          )

          const photo3Widget = window.cloudinary.createUploadWidget({
            cloudName: 'maniped', 
            uploadPreset: 'manipedProvider_preset',
            cropping: true}, (error, result) => { 
              if (!error && result && result.event === "success") { 
                console.log('Done! Here is the image info: ', result.info); 
                console.log(result.info.secure_url)
                /////////////////////////////////////////////////
                const body = {work_image_url_3: result.info.secure_url}
                this.props.editProfile(userId, body);
                //potential error needed to be give to user here if editProfile does not work
                window.confirm('Thank you for adding your portfolio photo.  Please continue with your application');
              }
            }
          )

          const photo4Widget = window.cloudinary.createUploadWidget({
            cloudName: 'maniped', 
            uploadPreset: 'manipedProvider_preset',
            cropping: true}, (error, result) => { 
              if (!error && result && result.event === "success") { 
                console.log('Done! Here is the image info: ', result.info); 
                console.log(result.info.secure_url)
                /////////////////////////////////////////////////
                const body = {work_image_url_4: result.info.secure_url}
                this.props.editProfile(userId, body);
                //potential error needed to be give to user here if editProfile does not work
                window.confirm('Thank you for adding your portfolio photo.  Please continue with your application');
              }
            }
          )

          const photo5Widget = window.cloudinary.createUploadWidget({
            cloudName: 'maniped', 
            uploadPreset: 'manipedProvider_preset',
            cropping: true}, (error, result) => { 
              if (!error && result && result.event === "success") { 
                console.log('Done! Here is the image info: ', result.info); 
                console.log(result.info.secure_url)
                /////////////////////////////////////////////////
                const body = {work_image_url_5: result.info.secure_url}
                this.props.editProfile(userId, body);
                //potential error needed to be give to user here if editProfile does not work
                window.confirm('Thank you for adding your portfolio photo.  Please continue with your application');
              }
            }
          )

          const photo6Widget = window.cloudinary.createUploadWidget({
            cloudName: 'maniped', 
            uploadPreset: 'manipedProvider_preset',
            cropping: true}, (error, result) => { 
              if (!error && result && result.event === "success") { 
                console.log('Done! Here is the image info: ', result.info); 
                console.log(result.info.secure_url)
                /////////////////////////////////////////////////
                const body = {work_image_url_6: result.info.secure_url}
                this.props.editProfile(userId, body);
                //potential error needed to be give to user here if editProfile does not work
                window.confirm('Thank you for adding your portfolio photo.  Please continue with your application');
              }
            }
          )

          const photo7Widget = window.cloudinary.createUploadWidget({
            cloudName: 'maniped', 
            uploadPreset: 'manipedProvider_preset',
            cropping: true}, (error, result) => { 
              if (!error && result && result.event === "success") { 
                console.log('Done! Here is the image info: ', result.info); 
                console.log(result.info.secure_url)
                /////////////////////////////////////////////////
                const body = {work_image_url_7: result.info.secure_url}
                this.props.editProfile(userId, body);
                //potential error needed to be give to user here if editProfile does not work
                window.confirm('Thank you for adding your portfolio photo.  Please continue with your application');
              }
            }
          )

          const photo8Widget = window.cloudinary.createUploadWidget({
            cloudName: 'maniped', 
            uploadPreset: 'manipedProvider_preset',
            cropping: true}, (error, result) => { 
              if (!error && result && result.event === "success") { 
                console.log('Done! Here is the image info: ', result.info); 
                console.log(result.info.secure_url)
                /////////////////////////////////////////////////
                const body = {work_image_url_8: result.info.secure_url}
                this.props.editProfile(userId, body);
                //potential error needed to be give to user here if editProfile does not work
                window.confirm('Thank you for adding your portfolio photo.  Please continue with your application');
              }
            }
          )


        return (
            <div className='serviceButtons'>
                <h1>Here you can add specifics on your nail, hair, and massage services offered:</h1>
                {this.state.nails_services.openSNPList &&  this.props.nailsServices.map(n => {
                   return <ServicesAdded type="nails service" service={n.service} price={n.price}/>
                })}
                <div className='nailsButton'>
                    <button name='nails_services' onClick={this.handleAdd}>Add New Nails Service</button>
                </div>
                
                {this.state.nails_services.openForm && <AddServicesAndPricing close={this.closeSNP} stVal='nails_services' service='nails'/>}
                
                {this.state.hair_services.openSNPList && this.props.hairServices.map(h => {
                   return <ServicesAdded type='hair service' service={h.service} price={h.price}/>
                })}
                <div className='hairButton'>
                    <button name='hair_services' onClick={this.handleAdd}>Add New Hair Service</button>
                </div>
                {this.state.hair_services.openForm && <AddServicesAndPricing close={this.closeSNP} stVal='hair_services' service='hair'/>}
            
                {this.state.massage_services.openSNPList && this.props.massageServices.map(m => {
                   return <ServicesAdded type='massage service' service={m.service} price={m.price}/>
                })}
                <div className='massageButton'>
                    <button name='massage_services' onClick={this.handleAdd}>Add New Massage Service</button>
                </div>
                {this.state.massage_services.openForm && <AddServicesAndPricing close={this.closeSNP} stVal='massage_services' service='massage'/>}
                
                <div>
                    <h1>You can upload a portfolio of up to 8 photos of your work:</h1>
                    <p>Portfolio photo 1:</p>
                    <button onClick={() => this.showWidget(photo1Widget)} className="cloudinary-button">Upload Photo</button>

                    <p>Portfolio photo 2:</p>
                    <button onClick={() => this.showWidget(photo2Widget)} className="cloudinary-button">Upload Photo</button>

                    <p>Portfolio photo 3:</p>
                    <button onClick={() => this.showWidget(photo3Widget)} className="cloudinary-button">Upload Photo</button>

                    <p>Portfolio photo 4:</p>
                    <button onClick={() => this.showWidget(photo4Widget)} className="cloudinary-button">Upload Photo</button>

                    <p>Portfolio photo 5:</p>
                    <button onClick={() => this.showWidget(photo5Widget)} className="cloudinary-button">Upload Photo</button>

                    <p>Portfolio photo 6:</p>
                    <button onClick={() => this.showWidget(photo6Widget)} className="cloudinary-button">Upload Photo</button>

                    <p>Portfolio photo 7:</p>
                    <button onClick={() => this.showWidget(photo7Widget)} className="cloudinary-button">Upload Photo</button>

                    <p>Portfolio photo 8:</p>
                    <button onClick={() => this.showWidget(photo8Widget)} className="cloudinary-button">Upload Photo</button>
                </div>
            
            </div>
            
        )
    }
}

const mapStateToProps = state => {
    return {
        nailsServices: state.servicesAndPricingReducer.nailsServices,
        hairServices: state.servicesAndPricingReducer.hairServices,
        massageServices: state.servicesAndPricingReducer.massageServices
    }
}

export default connect(mapStateToProps, { editProfile, fetchServices })(PreDash);