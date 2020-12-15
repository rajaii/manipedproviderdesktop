import { EDIT_PROFILE_START, EDIT_PROFILE_SUCCESS, EDIT_PROFILE_FAILURE, ADD_SERVICE_START, ADD_SERVICE_SUCCESS, ADD_SERVICE_FAILURE, FETCH_PROFILE_START,
    FETCH_PROFILE_SUCCESS, FETCH_PROFILE_FAILURE } from '../actions/appActions.js';

const providerUserInfoInitialState = {
    fetchingUserInfo: false,
    editingProfile: false,
    usersInfo: null,
    error: null,
    
}

const servicesAndPricingInitialState = {
    addingService: false,
    fetchingNailsServices: false,
    fetchingHairServices: false,
    fetchingMassageServices: false,
    service: null,
    nailsServices: null,
    hairServices: null,
    massageServices: null,
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
        case FETCH_PROFILE_START:
            return {
                ...state,
                fetchingUserInfo: true,
            }
        case FETCH_PROFILE_SUCCESS:
            return {
                ...state,
                fetchingUserInfo: false,
                usersInfo: action.payload
            }
        case FETCH_PROFILE_FAILURE:
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
        case 'FETCH_NAILS_SERVICES_START':
            return {
                ...state, 
                fetchingNailsServices: true
            }
        case 'FETCH_NAILS_SERVICES_SUCCESS':
            return {
                ...state,
                fetchingNailsServices: false,
                nailsServices: action.payload,
            }
        case 'FETCH_NAILS_SERVICES_FAILURE':
            return {
                ...state,
                fetchingNailsServices: false,
                error: action.payload
            }
        case 'FETCH_HAIR_SERVICES_START':
            return {
                ...state, 
                fetchingHairServices: true
            }
        case 'FETCH_HAIR_SERVICES_SUCCESS':
            return {
                ...state,
                fetchingHairServices: false,
                hairServices: action.payload,
            }
        case 'FETCH_HAIR_SERVICES_FAILURE':
            return {
                ...state,
                fetchingHairServices: false,
                error: action.payload
            }
        case 'FETCH_MASSAGE_SERVICES_START':
            return {
                ...state, 
                fetchingMassageServices: true
            }
        case 'FETCH_MASSAGE_SERVICES_SUCCESS':
            return {
                ...state,
                fetchingMassageServices: false,
                massageServices: action.payload,
            }
        case 'FETCH_MASSAGE_SERVICES_FAILURE':
            return {
                ...state,
                fetchingMassageServices: false,
                error: action.payload
            }
        default:
            return state;
    }
}