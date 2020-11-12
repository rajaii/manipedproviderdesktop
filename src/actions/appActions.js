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

export const ADD_SERVICE_START = 'ADD_SERVICE_START';
export const ADD_SERVICE_SUCCESS = 'ADD_SERVICE_SUCCESS';
export const ADD_SERVICE_FAILURE = 'ADD_SERVICE_FAILURE';


export const addService = (service, body) => dispatch => {
    dispatch({type: ADD_SERVICE_START});
    return axiosWithAuth().post(`http://localhost:4000/api/${service}/`, body)
    .then(res => {
        dispatch({type: ADD_SERVICE_SUCCESS, payload: res.data})
    })
    .catch(err => dispatch({type: ADD_SERVICE_FAILURE, payload: err.response}))
}

// export const FETCH_SERVICES_START = 'FETCH_SERVICES_START';
// export const FETCH_SERVICES_SUCCESS = 'FETCH_SERVICES_SUCCESS';
// export const FETCH_SERVICES_FAILURE = 'FETCH_SERVICES_FAILURE';


export const fetchServices = (service, type) => dispatch => {
    dispatch({type: `FETCH_${type}_START`});
    return axiosWithAuth().get(`http://localhost:4000/api/${service}/`)
    .then(res => {
        dispatch({type: `FETCH_${type}_SUCCESS`, payload: res.data})
    })
    .catch(err => dispatch({type: `FETCH_${type}_FAILURE`, payload: err.response}))
}