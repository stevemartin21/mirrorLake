import axios from 'axios';
import { GET_ERRORS, READ_LAKES} from './types';

export const updateLake = (id, lakeData, history) => dispatch => {
    axios.put(`http://localhost:3001/update/lake/${id}`, lakeData)
        .then(res =>  history.push('/manageLakes'))
        .catch(err => 
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        )
}