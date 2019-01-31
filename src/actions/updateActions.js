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

export const updateAttraction = (id, attractionData, history) => dispatch => {
    axios.put(`http://localhost:3001/update/attraction/${id}`, attractionData)
        .then(res =>  history.push('/manageAttractions'))
        .catch(err => 
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        )
}

export const updateCampground = (id, campgroundData, history) => dispatch => {
    axios.put(`http://localhost:3001/update/campground/${id}`, campgroundData)
        .then(res =>  history.push('/manageCampgrounds'))
        .catch(err => 
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        )
}

export const updatePeak = (id, peakData, history) => dispatch => {
    axios.put(`http://localhost:3001/update/peak/${id}`, peakData)
        .then(res =>  history.push('/managePeaks'))
        .catch(err => 
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        )
}

export const updateRiver = (id, riverData, history) => dispatch => {
    axios.put(`http://localhost:3001/update/river/${id}`, riverData)
        .then(res =>  history.push('/manageRivers'))
        .catch(err => 
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        )
}

export const updateTrail = (id, trailData, history) => dispatch => {
    axios.put(`http://localhost:3001/update/trail/${id}`, trailData)
        .then(res =>  history.push('/manageTrails'))
        .catch(err => 
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        )
}