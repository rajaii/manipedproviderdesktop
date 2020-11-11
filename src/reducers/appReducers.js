import { EDIT_PROFILE_START, EDIT_PROFILE_SUCCESS, EDIT_PROFILE_FAILURE, ADD_SERVICE_START, ADD_SERVICE_SUCCESS, ADD_SERVICE_FAILURE,
FETCH_SERVICES_START, FETCH_SERVICES_SUCCESS, FETCH_SERVICES_FAILURE } from '../actions/appActions.js';

const providerUserInfoInitialState = {
    fetchingUserInfo: false,
    fetchingUsersInfo: false,
    editingProfile: false,
    usersInfo: null,
    error: null,
    
}

const servicesAndPricingInitialState = {
    addingService: false,
    fetchingServices: false,
    service: null,
    services: null,
    error: null
} 



export function providerUserInfoReducer (state=providerUserInfoInitialState, action) {
    switch (action.type) {
        case EDIT_PROFILE_START:
            return {
                ...state,
                fetchingUserInfo: true,
            }
        case EDIT_PROFILE_SUCCESS:
            return {
                ...state,
                fetchingUserInfo: false,
                usersInfo: action.payload
            }
        case EDIT_PROFILE_FAILURE:
            return {
                ...state,
                fetchingUserInfo: false,
                error: action.payload
            } 
        default:
            return state;
    }
}

export function servicesAndPricingReducer (state=servicesAndPricingInitialState, action) {
    switch (action.type) {
        case ADD_SERVICE_START:
            return {
                ...state,
                addingService: true,
            }
        case ADD_SERVICE_SUCCESS:
            return {
                ...state,
                addingService: false,
                service: action.payload
            }
        case ADD_SERVICE_FAILURE:
            return {
                ...state,
                addingService: false,
                error: action.payload
            } 
        case FETCH_SERVICES_START:
            return {
                ...state, 
                fetchingServices: true
            }
        case FETCH_SERVICES_SUCCESS:
            return {
                ...state,
                fetchingServices: false,
                services: action.payload,
            }
        case FETCH_SERVICES_FAILURE:
            return {
                ...state,
                fetchingServices: false,
                error: action.payload
            }
        default:
            return state;
    }
}