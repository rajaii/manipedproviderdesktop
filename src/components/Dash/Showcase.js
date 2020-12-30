import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { editProfile } from '../../actions/appActions.js';

import '../Nav.css';


// make button to change pic which is linked to the widget for that pic
    //DEBUG WEIRD BEHAVIOR HERE

//make component to change name of photos and wire it to predash and showcase 

function Showcase(props) {

    const userId = localStorage.getItem('uID');

    function showWidget(widget) {
        widget.open();
    }

    
    const photo1Widget = window.cloudinary.createUploadWidget({
        cloudName: 'maniped', 
        uploadPreset: 'manipedProvider_preset',
        cropping: true}, (error, result) => { 
          if (!error && result && result.event === "success") { 
            console.log('Done! Here is the image info: ', result.info); 
            console.log(result.info.secure_url)
            /////////////////////////////////////////////////
            const body = {work_image_url_1: result.info.secure_url}
            props.editProfile(userId, body);
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
            props.editProfile(userId, body);
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
            props.editProfile(userId, body);
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
            props.editProfile(userId, body);
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
            props.editProfile(userId, body);
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
            props.editProfile(userId, body);
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
            props.editProfile(userId, body);
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
            props.editProfile(userId, body);
            //potential error needed to be give to user here if editProfile does not work
            window.confirm('Thank you for adding your portfolio photo.  Please continue with your application');
          }
        }
      )

    function editPhotos () {
        props.history.push('predash');
    }

    return (
        <div className='showcase'>
            <h1>These are your work images that your clients will see in your profile:</h1>
            {props.usersInfo.work_image_url_1 != null && 
            (
            <div>
                
                <PhotoDisplay usersInfo={props.usersInfo} num='1'/>
                <button onClick={() => showWidget(photo1Widget)} className="cloudinary-button">Change Photo</button>
                <button>Change Name</button>
            </div>
            )
            }
           
           
            {props.usersInfo.work_image_url_2 != null &&
            (
                <div>
                    
                    <PhotoDisplay usersInfo={props.usersInfo} num='2'/>
                    <button onClick={() => showWidget(photo2Widget)} className="cloudinary-button">Change Photo</button>
                    <button>Change Name</button>
                </div>
                )
            }

            {props.usersInfo.work_image_url_3 != null &&(
            <div>
                
                <PhotoDisplay usersInfo={props.usersInfo} num='3'/>
                <button onClick={() => showWidget(photo3Widget)} className="cloudinary-button">Change Photo</button>
                <button>Change Name</button>
            </div>
            )
            }

            {props.usersInfo.work_image_url_4 != null &&
            (
                <div>
                    
                    <PhotoDisplay usersInfo={props.usersInfo} num='4'/>
                    <button onClick={() => showWidget(photo4Widget)} className="cloudinary-button">Change Photo</button>
                    <button>Change Name</button>
                </div>
                )
            }

            {props.usersInfo.work_image_url_5 != null &&(
            <div>
                
                <PhotoDisplay usersInfo={props.usersInfo} num='5'/>
                <button onClick={() => showWidget(photo5Widget)} className="cloudinary-button">Change Photo</button>
                <button>Change Name</button>
            </div>
            )
            }

            {props.usersInfo.work_image_url_6 != null &&(
            <div>
                
                <PhotoDisplay usersInfo={props.usersInfo} num='6'/>
                <button onClick={() => showWidget(photo6Widget)} className="cloudinary-button">Change Photo</button>
                <button>Change Name</button>
            </div>
            )
            }

            {props.usersInfo.work_image_url_7 != null && (
            <div>
                
                <PhotoDisplay usersInfo={props.usersInfo} num='7'/>
                <button onClick={() => showWidget(photo7Widget)} className="cloudinary-button">Change Photo</button>
                <button>Change Name</button>
            </div>
            )
            }

            {props.usersInfo.work_image_url_8 != null && (
            <div>
                
                <PhotoDisplay usersInfo={props.usersInfo} num='8'/>
                <button onClick={() => showWidget(photo8Widget)} className="cloudinary-button">Change Photo</button>
                <button>Change Name</button>
            </div>
            )
            }

            {props.usersInfo.work_image_url_1 === null && props.usersInfo.work_image_url_2 === null && props.usersInfo.work_image_url_3 === null &&
            props.usersInfo.work_image_url_4 === null && props.usersInfo.work_image_url_5 === null && props.usersInfo.work_image_url_6 === null &&
            props.usersInfo.work_image_url_7 === null && props.usersInfo.work_image_url_8 === null && <button onClick={editPhotos}>Add/Change Photos</button>}

          

        </div>
    )
}

function PhotoDisplay(props) {
    return (
            <div>
                <p>Name of image: {eval(`props.usersInfo.work_image_url_${props.num}_name`)}</p> 
                <img src={eval(`props.usersInfo.work_image_url_${props.num}`)}/>
            </div>
    )
}

const ThisComponent = withRouter(Showcase)

export default connect(null, { editProfile })(ThisComponent);