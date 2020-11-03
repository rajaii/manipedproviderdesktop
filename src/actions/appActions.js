import axios from 'axios';
import axiosWithAuth from './axiosWithAuth.js';

export const EDIT_PROFILE_START = 'EDIT_PROFILE_START';
export const EDIT_PROFILE_SUCCESS = 'EDIT_PROFILE_SUCCESS';
export const EDIT_PROFILE_FAILURE = 'EDIT_PROFILE_FAILURE';

export const editProfile = (id, body) => dispatch => {
    dispatch({type: EDIT_PROFILE_START});
    return axiosWithAuth().put(`http://localhost:4000/api/providers/${id}`, body)
    .then(res => {
        dispatch({type: EDIT_PROFILE_SUCCESS, payload: res.data})
    })
    .catch(err => dispatch({type: EDIT_PROFILE_FAILURE, payload: err.response}))

}