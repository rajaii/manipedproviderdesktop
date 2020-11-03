import { EDIT_PROFILE_START, EDIT_PROFILE_SUCCESS, EDIT_PROFILE_FAILURE } from '../actions/appActions.js';

const providerUserInfoInitialState = {
    fetchingUserInfo: false,
    fetchingUsersInfo: false,
    editingProfile: false,
    usersInfo: null,
    error: null,
    
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