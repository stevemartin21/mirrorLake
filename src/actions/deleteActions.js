
import axios from 'axios';
import { GET_ERRORS, READ_LAKES} from './types';

export const deleteLake = (id) => dispatch => {
    
    axios.delete(`http://localhost:3001/delete/lake/${id}`)
        .then(res => dispatch({
            type: READ_LAKES,
            payload: res.data
        }))
            .catch(err => 
                dispatch({
                    type: GET_ERRORS,
                    payload: err.response.data
                })
                )
} 