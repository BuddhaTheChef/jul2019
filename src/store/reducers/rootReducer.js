import authReduer from './authReducer';
import projectReducer from './projectReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    auth: authReduer,
    project: projectReducer
})

export default rootReducer;