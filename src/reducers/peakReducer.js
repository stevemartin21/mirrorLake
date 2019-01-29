import {READ_PEAKS, READ_PEAK} from '../actions/types';

const initialState = {
    peak: null,
    peaks: null,
    loading: false
}

export default function(state = initialState, action) {

    switch(action.type) {

        case READ_PEAKS: 
            return {
                ...state,
                peaks: action.payload
            }

            case READ_PEAK: 
            return {
                ...state,
                peak: action.payload
            }
        default:
        return state;
    }
  
}