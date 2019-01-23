
import axios from 'axios';
import { GET_ERRORS, READ_LAKES} from './types';

export const deleteLake = (id, history) => dispatch => {
    
    axios.delete(`http://localhost:3001/delete/lake/${id}`)
        .then(res => history.push('/dashboard'))
            .catch(err => 
                dispatch({
                    type: GET_ERRORS,
                    payload: err.response.data
                })
                )
} 