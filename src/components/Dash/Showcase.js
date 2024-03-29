import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { editProfile } from '../../actions/appActions.js';
import NameImg from './NameImg.js';

import '../Nav.css';


// make button to change pic which is linked to the widget for that pic
    //DEBUG WEIRD BEHAVIOR HERE

//make component to change name of photos and wire it to predash and showcase 

function Showcase(props) {

  const [ nBool1, setNBool1 ] = useState(false)
  const [ nBool2, setNBool2 ] = useState(false)
  const [ nBool3, setNBool3 ] = useState(false)
  const [ nBool4, setNBool4 ] = useState(false)
  const [ nBool5, setNBool5 ] = useState(false)
  const [ nBool6, setNBool6 ] = useState(false)
  const [ nBool7, setNBool7 ] = useState(false)
  const [ nBool8, setNBool8 ] = useState(false)

  function renderNameForm (n) {
    if (n === 1) {
      setNBool1(!nBool1)
    } else if (n === 2) {
      setNBool2(!nBool2)
    } else if (n === 3) {
      setNBool3(!nBool3)
    }else if (n === 4) {
      setNBool4(!nBool4)
    }else if (n === 5) {
      setNBool5(!nBool5)
    }else if (n === 6) {
      setNBool6(!nBool6)
    }else if (n === 7) {
      setNBool7(!nBool7)
    }else if (n === 8) {
      setNBool8(!nBool8)
    }
  }

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
            <div className='imgCont'>
                
                <PhotoDisplay usersInfo={props.usersInfo} num='1'/>
                <button onClick={() => showWidget(photo1Widget)} className="cloudinary-button">Change Photo</button>
                <button onClick={() => renderNameForm(1)}>Change Name</button>
                {nBool1 && <NameImg num='1' />}
            </div>
            )
            }
           
           
            {props.usersInfo.work_image_url_2 != null &&
            (
                <div className='imgCont'>
                    
                    <PhotoDisplay usersInfo={props.usersInfo} num='2'/>
                    <button onClick={() => showWidget(photo2Widget)} className="cloudinary-button">Change Photo</button>
                    <button onClick={() => renderNameForm(2)}>Change Name</button>
                    {nBool2 && <NameImg num='2' />}
                </div>
                )
            }

            {props.usersInfo.work_image_url_3 != null &&(
            <div className='imgCont'>
                
                <PhotoDisplay usersInfo={props.usersInfo} num='3'/>
                <button onClick={() => showWidget(photo3Widget)} className="cloudinary-button">Change Photo</button>
                <button onClick={() => renderNameForm(3)}>Change Name</button>
                {nBool3 && <NameImg num='3' />}
            </div>
            )
            }

            {props.usersInfo.work_image_url_4 != null &&
            (
                <div className='imgCont'>
                    
                    <PhotoDisplay usersInfo={props.usersInfo} num='4'/>
                    <button onClick={() => showWidget(photo4Widget)} className="cloudinary-button">Change Photo</button>
                    <button onClick={() => renderNameForm(4)}>Change Name</button>
                    {nBool4 && <NameImg num='4' />}
                </div>
                )
            }

            {props.usersInfo.work_image_url_5 != null &&(
            <div className='imgCont'>
                
                <PhotoDisplay usersInfo={props.usersInfo} num='5'/>
                <button onClick={() => showWidget(photo5Widget)} className="cloudinary-button">Change Photo</button>
                <button onClick={() => renderNameForm(5)}>Change Name</button>
                {nBool5 && <NameImg num='5' />}
            </div>
            )
            }

            {props.usersInfo.work_image_url_6 != null &&(
            <div className='imgCont'>
                
                <PhotoDisplay usersInfo={props.usersInfo} num='6'/>
                <button onClick={() => showWidget(photo6Widget)} className="cloudinary-button">Change Photo</button>
                <button onClick={() => renderNameForm(6)}>Change Name</button>
                {nBool6 && <NameImg num='6' />}
            </div>
            )
            }

            {props.usersInfo.work_image_url_7 != null && (
            <div className='imgCont'>
                
                <PhotoDisplay usersInfo={props.usersInfo} num='7'/>
                <button onClick={() => showWidget(photo7Widget)} className="cloudinary-button">Change Photo</button>
                <button onClick={() => renderNameForm(7)}>Change Name</button>
                {nBool7 && <NameImg num='7' />}
            </div>
            )
            }

            {props.usersInfo.work_image_url_8 != null && (
            <div className='imgCont'>
                
                <PhotoDisplay usersInfo={props.usersInfo} num='8'/>
                <button onClick={() => showWidget(photo8Widget)} className="cloudinary-button">Change Photo</button>
                <button onClick={() => renderNameForm(8)}>Change Name</button>
                {nBool8 && <NameImg num='8' />}
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
            <div className='imgCont'>
                <p>Name of image: {eval(`props.usersInfo.work_image_url_${props.num}_name`)}</p> 
                <img className="workImg" src={eval(`props.usersInfo.work_image_url_${props.num}`)}/>
            </div>
    )
}

const ThisComponent = withRouter(Showcase)

export default connect(null, { editProfile })(ThisComponent);