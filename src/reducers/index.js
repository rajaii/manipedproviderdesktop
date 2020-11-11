import { combineReducers } from "redux";

import { loginReducer, regsiterReducer, } from './authReducer.js';
import { providerUserInfoReducer, servicesAndPricingReducer}  from './appReducers.js';



const rootReducer = combineReducers({
    loginReducer,
    regsiterReducer,
    providerUserInfoReducer,
    servicesAndPricingReducer
});

export default rootReducer;