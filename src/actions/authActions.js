import { GET_ERRORS, SET_CURRENT_USER} from './types';
import axios from 'axios';
import setAuthToken from '../utilities/setAuthToken';
import jwt_decode from 'jwt-decode';


export const registerUser = (userData, history) => dispatch =>  {

    axios.post('http://localhost:3001/create/user', userData).then(
        res => history.push('/login')   
    ).catch(err => dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        )
}

export const loginUser = (userData) => dispatch => {
    axios.post('http://localhost:3001/create/token/', userData)
        .then(res => {
            console.log(res.data);
            const {token } = res.data

            localStorage.setItem('jwtToken', token);

            setAuthToken(token);

            const decoded = jwt_decode(token)

            dispatch(setCurrentUser(decoded))
        })
        .catch(err => dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        }))
}

export const setCurrentUser = (decoded) => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    }
}

export const logoutUser = () => dispatch => {
    // Remove token from localStorage
    localStorage.removeItem('jwtToken');
    // Remove auth header for future requests
    setAuthToken(false);
    // Set current user to {} which will set isAuthenticated to false
    dispatch(setCurrentUser({}));
  };
 
 

