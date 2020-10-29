import React from 'react';
import { connect } from 'react-redux';

import './Register.css';

class SecondSignupPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    handleChange = e => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        })
    }

    showWidget = widget => {
        widget.open();
    }

    render() {
        const userId = localStorage.getItem('uID');
        const widget = window.cloudinary.createUploadWidget({
            cloudName: 'maniped', 
            uploadPreset: 'manipedProvider_preset',
            cropping: true}, (error, result) => { 
              if (!error && result && result.event === "success") { 
                console.log('Done! Here is the image info: ', result.info); 
                console.log(result.info.secure_url)
                const body = {profile_img_url: result.info.secure_url}
                // this.props.editProfile(userId, body);
              }
            }
          )
        return (
            <div>
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
                
                <label>Enter your profile header here:</label>
                <input 
                type='text'
                name='header'
                value={this.state.header}
                placeholder='header'
                onChange={this.handleChange}
                />
               
                 <label>Describe yourself/your work for your clients:</label>
                <textarea 
                type='text'
                name='about me'
                value={this.state.about_me}
                placeholder='describe yourself'
                onChange={this.handleChange}
                rows='10'
                cols='50'
                />

               
               <div className='photoWrap'>

                    <div>
                        <p>Please upload a professional photo:</p>
                        <button onClick={() => this.showWidget(widget)} className="cloudinary-button">Upload Photo</button>
                    </div>

                    
            </div>
                
            <div className='photoWrap'>

            <div>
                <p>Please upload a photo identification (driver's license, photo id, or passport):</p>
                <button onClick={() => this.showWidget(widget)} className="cloudinary-button">Upload ID</button>
            </div>

            
            </div>

            <div>
            <div>
                <p>Please upload a photo of your respective certification:</p>
                <button onClick={() => this.showWidget(widget)} className="cloudinary-button">Upload Certification</button>
            </div>

            
            </div> 
            
                
            
            </form>
            </div>
        )
    }
}

export default SecondSignupPage;