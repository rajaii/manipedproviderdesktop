import React from 'react';

import '../Nav.css';



function Showcase(props) {

    return (
        <div className='showcase'>
            <h1>These are your work images that your clients will see in your profile:</h1>
            {props.usersInfo.work_image_url_1 != null && <PhotoDisplay usersInfo={props.usersInfo} num='1'/>}
           
           
            {props.usersInfo.work_image_url_2 != null && <PhotoDisplay usersInfo={props.usersInfo} num='2'/>}

            {props.usersInfo.work_image_url_3 != null && <PhotoDisplay usersInfo={props.usersInfo} num='3'/>}

            {props.usersInfo.work_image_url_4 != null && <PhotoDisplay usersInfo={props.usersInfo} num='4'/>}

            {props.usersInfo.work_image_url_5 != null && <PhotoDisplay usersInfo={props.usersInfo} num='5'/>}

            {props.usersInfo.work_image_url_6 != null && <PhotoDisplay usersInfo={props.usersInfo} num='6'/>}

            {props.usersInfo.work_image_url_7 != null && <PhotoDisplay usersInfo={props.usersInfo} num='7'/>}

            {props.usersInfo.work_image_url_8 != null && <PhotoDisplay usersInfo={props.usersInfo} num='8'/>}

          

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

export default Showcase;