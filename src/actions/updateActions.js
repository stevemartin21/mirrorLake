import axios from 'axios';
import { GET_ERRORS, READ_LAKES} from './types';

export const updateLake = (id, lakeData) => dispatch => {
    axios.put(`http://localhost:3001/update/lake/${id}`, lakeData)
        .then(res =>  dispatch({
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