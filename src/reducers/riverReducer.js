import {READ_RIVERS, READ_RIVER} from '../actions/types';

const initialState = {
    river: null,
    rivers: null,
    loading: false
}

export default function(state = initialState, action) {

    switch(action.type) {

        case READ_RIVERS: 
            return {
                ...state,
                rivers: action.payload
            }

            case READ_RIVER: 
            return {
                ...state,
                river: action.payload
            }
        default:
        return state;
    }
  
}   