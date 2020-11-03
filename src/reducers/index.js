import { combineReducers } from "redux";

import { loginReducer, regsiterReducer, } from './authReducer.js';
import { providerUserInfoReducer}  from './appReducers.js';



const rootReducer = combineReducers({
    loginReducer,
    regsiterReducer,
    providerUserInfoReducer
});

export default rootReducer;