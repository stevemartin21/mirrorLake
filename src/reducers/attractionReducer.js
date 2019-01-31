import {READ_ATTRACTIONS, READ_ATTRACTION} from '../actions/types';

const initialState = {
    attraction: null,
    attractions: null,
    loading: false
}

export default function(state = initialState, action) {

    switch(action.type) {

        case READ_ATTRACTIONS: 
            return {
                ...state,
                attractions: action.payload
            }

            case READ_ATTRACTION: 
            return {
                ...state,
                attraction: action.payload
            }
        default:
        return state;
    }  
}