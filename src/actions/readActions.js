import axios from 'axios';
import {READ_LAKE, READ_LAKES, GET_ERRORS, 
 READ_ATTRACTION, READ_ATTRACTIONS,
READ_CAMPGROUND, READ_CAMPGROUNDS, READ_PEAK, READ_PEAKS,
READ_RIVER, READ_RIVERS, READ_TRAIL, READ_TRAILS} from './types';

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

export const readLake = (id) => dispatch => {
    axios.get(`http://localhost/read/lake/${id}`)
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

export const readAttractions = () => dispatch => {
    axios.get('http://localhost:3001/read/attractions')
        .then(res => dispatch({
            type: READ_ATTRACTIONS,
            payload: res.data
        }))
        .catch(err => 
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        )
}

export const readAttraction = (id) => dispatch => {
    axios.get(`http://localhost/read/attraction/${id}`)
        .then(res => dispatch({
            type: READ_ATTRACTION,
            payload: res.data
        }))
        .catch(err => 
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        )
}

export const readCampgrounds = () => dispatch => {
    axios.get('http://localhost:3001/read/campgrounds')
        .then(res => dispatch({
            type: READ_CAMPGROUNDS,
            payload: res.data
        }))
        .catch(err => 
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        )
}

export const readCampground = (id) => dispatch => {
    axios.get(`http://localhost/read/campground/${id}`)
        .then(res => dispatch({
            type: READ_CAMPGROUND,
            payload: res.data
        }))
        .catch(err => 
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        )
}

export const readPeaks = () => dispatch => {
    axios.get('http://localhost:3001/read/peaks')
        .then(res => dispatch({
            type: READ_PEAKS,
            payload: res.data
        }))
        .catch(err => 
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        )
}

export const readPeak = (id) => dispatch => {
    axios.get(`http://localhost:3001/read/peak/${id}`)
        .then(res => dispatch({
            type: READ_PEAK,
            payload: res.data
        }))
        .catch(err => 
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        )
}

export const readRivers = () => dispatch => {
    axios.get('http://localhost:3001/read/rivers')
        .then(res => dispatch({
            type: READ_RIVERS,
            payload: res.data
        }))
        .catch(err => 
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        )
}

export const readRiver = (id) => dispatch => {
    axios.get(`http://localhost/read/river/${id}`)
        .then(res => dispatch({
            type: READ_RIVER,
            payload: res.data
        }))
        .catch(err => 
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        )
}

export const readTrails = () => dispatch => {
    axios.get('http://localhost:3001/read/trails')
        .then(res => dispatch({
            type: READ_TRAILS,
            payload: res.data
        }))
        .catch(err => 
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        )
}

export const readTrail = (id) => dispatch => {
    axios.get(`http://localhost/read/trail/${id}`)
        .then(res => dispatch({
            type: READ_TRAIL,
            payload: res.data
        }))
        .catch(err => 
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        )
}