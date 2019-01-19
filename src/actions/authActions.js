import { TEST_DISPATCH} from './types';



export const registerUser = (userData) => {
    return {
        payload: userData,
        type: TEST_DISPATCH
    }
}