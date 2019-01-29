import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import lakeReducer from './lakeReducer';
import attractionReducer from './attractionReducer';
import campgroundReducer from './campgroundReducer';
import peakReducer from './peakReducer';
import riverReducer from './riverReducer';
import trailReducer from './trailReducer';


export default combineReducers({
    auth: authReducer,
    errors: errorReducer,
    lake: lakeReducer,
    attraction: attractionReducer,
    campground: campgroundReducer,
    peak: peakReducer,
    river: riverReducer,
    trail: trailReducer
})