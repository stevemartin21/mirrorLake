import {READ_LAKES, READ_LAKE} from '../actions/types';

const initialState = {
    lake: null,
    lakes: null,
    loading: false
}

export default function(state = initialState, action) {

    switch(action.type) {

        case READ_LAKES: 
            return {
                ...state,
                lakes: action.payload
            }

            case READ_LAKE: 
            return {
                ...state,
                lake: action.payload
            }
        default:
        return state;
    }
  
}