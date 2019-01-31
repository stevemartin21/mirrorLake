
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

export const deleteAttraction = (id, history) => dispatch => {
    
    axios.delete(`http://localhost:3001/delete/attraction/${id}`)
        .then(res => history.push('/dashboard'))
            .catch(err => 
                dispatch({
                    type: GET_ERRORS,
                    payload: err.response.data
                })
                )
} 

export const deleteCampground = (id, history) => dispatch => {
    
    axios.delete(`http://localhost:3001/delete/campground/${id}`)
        .then(res => history.push('/dashboard'))
            .catch(err => 
                dispatch({
                    type: GET_ERRORS,
                    payload: err.response.data
                })
                )
} 

export const deletePeak = (id, history) => dispatch => {
    
    axios.delete(`http://localhost:3001/delete/peak/${id}`)
        .then(res => history.push('/dashboard'))
            .catch(err => 
                dispatch({
                    type: GET_ERRORS,
                    payload: err.response.data
                })
                )
} 

export const deleteRiver = (id, history) => dispatch => {
    
    axios.delete(`http://localhost:3001/delete/river/${id}`)
        .then(res => history.push('/dashboard'))
            .catch(err => 
                dispatch({
                    type: GET_ERRORS,
                    payload: err.response.data
                })
                )
} 

export const deleteTrail = (id, history) => dispatch => {
    
    axios.delete(`http://localhost:3001/delete/trail/${id}`)
        .then(res => history.push('/dashboard'))
            .catch(err => 
                dispatch({
                    type: GET_ERRORS,
                    payload: err.response.data
                })
                )
} 