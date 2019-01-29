import {READ_CAMPGROUNDS, READ_CAMPGROUND} from '../actions/types';

const initialState = {
    campground: null,
    campgrounds: null,
    loading: false
}

export default function(state = initialState, action) {

    switch(action.type) {

        case READ_CAMPGROUNDS: 
            return {
                ...state,
                campground: action.payload
            }

            case READ_CAMPGROUND: 
            return {
                ...state,
                campground: action.payload
            }
        default:
        return state;
    }
  
}