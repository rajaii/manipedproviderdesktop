import React from 'react';
import { connect } from 'react-redux';
import * as yup from 'yup';

import { editProfile } from '../../actions/appActions.js'; 
import './Register.css';

let applicationSchema = yup.object().shape({
    address: yup.string().required('Address is required'),
    header: yup.string().required('Header is required'),
    about_me: yup.string().required('About me is required'),
  });

class SecondSignupPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            address: '',
            header: '',
            about_me: '',
            validationError: {inner: []}
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = e => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        })
    }

   async handleSubmit (e) {
        e.preventDefault();
        const body = {
            address: this.state.address,
            header: this.state.header,
            about_me: this.state.about_me
        };
        applicationSchema.validate(this.state, {abortEarly: false})
        .then(async r => {
            if (r) {
                const id = localStorage.getItem('uID');
                this.props.editProfile(id, body);
                this.setState({
                    address: '',
                    header: '',
                    about_me: ''
                });
                window.confirm('Thank you for signing up to be a maniPed pro.  Now you can add your services and pricing and also a portfolio of your work pictures for your profile.');
                this.props.history.push('/predash');
            }
        })
        .catch(err => {
            this.setState({
                validationError: err
            })
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
                const body = {profile_img_url: result.info.secure_url}
                this.props.editProfile(userId, body);
                //potential error needed to be give to user here if editProfile does not work
                window.confirm('Thank you for adding your photo.  Please continue with your application');
              }
            }
          )

          const dLWidget = window.cloudinary.createUploadWidget({
            cloudName: 'maniped', 
            uploadPreset: 'manipedProvider_preset',
            cropping: true}, (error, result) => { 
              if (!error && result && result.event === "success") { 
                console.log('Done! Here is the image info: ', result.info); 
                console.log(result.info.secure_url)
                const body = {identification: result.info.secure_url}
                this.props.editProfile(userId, body);
                //potential error needed to be give to user here if editProfile does not work
                window.confirm('Thank you for adding your identification.  Please continue with your application');
              }
            }
          )

          const credsWidget = window.cloudinary.createUploadWidget({
            cloudName: 'maniped', 
            uploadPreset: 'manipedProvider_preset',
            cropping: true}, (error, result) => { 
              if (!error && result && result.event === "success") { 
                console.log('Done! Here is the image info: ', result.info); 
                console.log(result.info.secure_url)
                const body = {certification: result.info.secure_url}
                this.props.editProfile(userId, body);
                //potential error needed to be give to user here if editProfile does not work
                window.confirm('Thank you for adding your certification.  Please continue with your application');
              }
            }
          )

        return (
            
            <div>

<div className='cloudWrap'>
                <div className='photoWrap'>

                
                <div>
                    <p>Please upload a professional photo:</p>
                    <button onClick={() => this.showWidget(photoWidget)} className="cloudinary-button">Upload Photo</button>
                </div>


                </div>


                <div className='photoWrap'>

                <div>
                <p>Please upload a photo identification (driver's license, photo id, or passport):</p>
                <button onClick={() => this.showWidget(dLWidget)} className="cloudinary-button">Upload ID</button>
                </div>


                </div>

                <div className='photoWrap'>
                <div>
                <p>Please upload a photo of your respective certification:</p>
                <button onClick={() => this.showWidget(credsWidget)} className="cloudinary-button">Upload Certification</button>
                </div>


                </div>
            </div> 

                
                <form className='formCont' type='submit' onSubmit={this.handleSubmit}>
            <h1 className="welcome">Please continue with your application and finish your profile here:</h1>
           
                <label>Enter your address here:</label>
                <input 
                type='text'
                name='address'
                value={this.state.address}
                placeholder='address'
                onChange={this.handleChange}
                />
                {this.state.validationError.inner != undefined && this.state.validationError.inner.filter(i => i.message === "Address is required").length > 0 ?  <div className="ErrorB">ADDRESS IS REQUIRED RE-ENTER AND CLICK SUBMIT</div> : null}
                
                <label>Enter your profile header here:</label>
                <input 
                type='text'
                name='header'
                value={this.state.header}
                placeholder='header'
                onChange={this.handleChange}
                />
                {this.state.validationError.inner != undefined && this.state.validationError.inner.filter(i => i.message === "Header is required").length > 0 ?  <div className="ErrorB">HEADER IS REQUIRED RE-ENTER AND CLICK SUBMIT</div> : null}
                
               
                 <label>Describe yourself/your work for your clients:</label>
                <textarea 
                type='text'
                name='about_me'
                value={this.state.about_me}
                placeholder='describe yourself'
                onChange={this.handleChange}
                rows='10'
                cols='50'
                /> 
                 {this.state.validationError.inner != undefined && this.state.validationError.inner.filter(i => i.message === "About me is required").length > 0 ?  <div className="ErrorB">ABOUT ME IS REQUIRED RE-ENTER AND CLICK SUBMIT</div> : null}
                  
                <button onClick={this.handleSubmit}>Submit</button>
            </form>

           
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        usersInfo: state.providerUserInfoReducer.usersInfo
    }
}

export default connect(mapStateToProps, { editProfile })(SecondSignupPage);