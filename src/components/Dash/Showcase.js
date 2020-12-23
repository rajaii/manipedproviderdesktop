import React from 'react';
import { connect } from 'react-redux'; 

function Showcase(props) {

    return (
        <div>
            <h1>These are your work images that your clients will see in your profile.</h1>
            {props.usersInfo.work_img_url_1 != null &&
            <div>
                <p>Name of image: {/*props.something*/}</p> <button>Add name to image</button>
                <img src={props.usersInfo.work_img_url_1}/>
            </div>}
            {props.usersInfo.work_img_url_2 != null &&
            <div>
                <p>Name of image: {/*props.something*/}</p> <button>Add name to image</button>
                <img src={props.usersInfo.work_img_url_2}/>
            </div>}
            {props.usersInfo.work_img_url_3 != null &&
            <div>
                <p>Name of image: {/*props.something*/}</p> <button>Add name to image</button>
                <img src={props.usersInfo.work_img_url_3}/>
            </div>}
            {props.usersInfo.work_img_url_4 != null &&
            <div>
                <p>Name of image: {/*props.something*/}</p> <button>Add name to image</button>
                <img src={props.usersInfo.work_img_url_4}/>
            </div>}
            {props.usersInfo.work_img_url_5 != null &&
            <div>
                <p>Name of image: {/*props.something*/}</p> <button>Add name to image</button>
                <img src={props.usersInfo.work_img_url_5}/>
            </div>}
            {props.usersInfo.work_img_url_6 != null &&
            <div>
                <p>Name of image: {/*props.something*/}</p> <button>Add name to image</button>
                <img src={props.usersInfo.work_img_url_6}/>
            </div>}
            {props.usersInfo.work_img_url_7 != null &&
            <div>
                <p>Name of image: {/*props.something*/}</p> <button>Add name to image</button>
                <img src={props.usersInfo.work_img_url_7}/>
            </div>}
            {props.usersInfo.work_img_url_8 != null &&
            <div>
                <p>Name of image: {/*props.something*/}</p> <button>Add name to image</button>
                <img src={props.usersInfo.work_img_url_8}/>
            </div>}

        </div>
    )
}

export default connect(Showcase);