import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import lakeReducer from './lakeReducer';

export default combineReducers({
    auth: authReducer,
    errors: errorReducer,
    lake: lakeReducer
})