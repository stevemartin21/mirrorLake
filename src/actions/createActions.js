import axios from 'axios';
import { GET_ERRORS} from './types';

export const createLake = (lakeData, history) => dispatch => {
    axios.post('http://localhost:3001/create/lake', lakeData)
        .then(res => history.push('/manageLakes'))
        .catch(err => 
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        )
}

export const createAttraction = (attractionData, history) => dispatch => {
    axios.post('http://localhost:3001/create/attraction', attractionData)
        .then(res => history.push('/dashboard'))
        .catch(err => 
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        )
}

export const createCampground = (campgroundData, history) => dispatch => {
    axios.post('http://localhost:3001/create/campground', campgroundData)
        .then(res => history.push('/dashboard'))
        .catch(err => 
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        )
}

export const createPeak = (peakData, history) => dispatch => {
    axios.post('http://localhost:3001/create/peak', peakData)
        .then(res => history.push('/dashboard'))
        .catch(err => 
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        )
}

export const createRiver = (riverData, history) => dispatch => {
    axios.post('http://localhost:3001/create/river', riverData)
        .then(res => history.push('/dashboard'))
        .catch(err => 
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        )
}

export const createTrail = (trailData, history) => dispatch => {
    axios.post('http://localhost:3001/create/trail', trailData)
        .then(res => history.push('/dashboard'))
        .catch(err => 
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        )
}