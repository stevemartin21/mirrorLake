import axios from 'axios';
import {READ_LAKE, READ_LAKES, GET_ERRORS} from './types';

export const readLakes = () => dispatch => {
    axios.get('http://localhost:3001/read/lakes')
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

export const readLake = () => dispatch => {
    axios.get('localhost/read/lake/:id')
        .then(res => dispatch({
            type: READ_LAKE,
            payload: res.data
        }))
        .catch(err => 
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        )
}