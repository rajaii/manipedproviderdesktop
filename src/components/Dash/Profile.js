import React from 'react';

export function Profile(props) {

    return (
        <div>
            <img src={props.profile_img_url}/>
            <h1>Name: {props.usersInfo.first_name} {props.usersInfo.last_name}</h1>
            <p>Username: {props.username}</p>
            <p>Email: {props.email}</p>
            <p>Phone number: {props.phone_number}</p>
            <p>Zipcode: {props.zipcode}</p>
            <p>Address: {props.address}</p>
            <p>Header: {props.header}</p>
            <p>About Me: {props.about_me}</p>

        </div>
    )
}