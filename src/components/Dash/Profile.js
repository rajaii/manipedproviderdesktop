import React from 'react';

export function Profile(props) {

    return (
        <div>
            <img src={props.usersInfo.profile_img_url}/>
            <h1>Name: {props.usersInfo.first_name} {props.usersInfo.last_name}</h1>
            <p>Username: {props.usersInfo.username}</p>
            <p>Email: {props.usersInfo.email}</p>
            <p>Phone number: {props.usersInfo.phone_number}</p>
            <p>Zipcode: {props.usersInfo.zipcode}</p>
            <p>Address: {props.usersInfo.address}</p>
            <p>Header: {props.usersInfo.header}</p>
            <p>About Me: {props.usersInfo.about_me}</p>

        </div>
    )
}