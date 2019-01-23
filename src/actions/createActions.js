import axios from 'axios';
import { GET_ERRORS} from './types';

export const createLake = (lakeData, history) => dispatch => {
    axios.post('http://localhost:3001/create/lake', lakeData)
        .then(res => history.push('/dashboard'))
        .catch(err => 
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        )
}