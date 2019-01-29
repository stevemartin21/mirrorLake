import {READ_TRAILS, READ_TRAIL} from '../actions/types';

const initialState = {
    trail: null,
    trails: null,
    loading: false
}

export default function(state = initialState, action) {

    switch(action.type) {

        case READ_TRAILS: 
            return {
                ...state,
                trails: action.payload
            }

            case READ_TRAIL: 
            return {
                ...state,
                trail: action.payload
            }
        default:
        return state;
    }
  
}