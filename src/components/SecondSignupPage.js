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
        widget.open()
    }

    render() {
        const userId = localStorage.getItem('uID');
        const widget = window.cloudinary.createUploadWidget({
            cloudName: 'maniped', 
            uploadPreset: 'maniped_preset',
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
                name='first_name'
                value={this.state.first_name}
                placeholder='first name'
                onChange={this.handleChange}
                />
                
                <label>Enter your profile header here:</label>
                <input 
                type='text'
                name='last_name'
                value={this.state.last_name}
                placeholder='last name'
                onChange={this.handleChange}
                />
               
                 <label>Describe yourself/your work for your clients:</label>
                <textarea 
                type='text'
                name='username'
                value={this.state.username}
                placeholder='username'
                onChange={this.handleChange}
                rows='10'
                cols='50'
                />
               
               <div className='photoWrap'>

                    <div>
                        <p>Photo:</p>
                        <button onClick={() => this.showWidget(widget)} className="cloudinary-button">Upload Photo</button>
                    </div>

                    <img className='editProfileImg' src={`${this.props.profile_img_url}`} />
            </div>
                
                <button>Submit</button>
                {this.props.registering === true ? <div className='lds-hourglass'>Registering...</div> : null}
            
            </form>
            </div>
        )
    }
}

export default SecondSignupPage;