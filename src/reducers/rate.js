import {
    GET_RATE_REQUEST,
    GET_RATE_SUCCESS,
    GET_RATE_ERROR,
} from '../constants/actionTypes/exchangeRate'

export const initialState = {
    data        : null,
    errorMessage: null,
    isLoading   : false,
};


export default (state = initialState, action) => {
    switch (action.type) {
        case GET_RATE_REQUEST:
            return Object.assign({}, state, {
                isLoading   : true,
                errorMessage: null
            });
        case GET_RATE_SUCCESS:
            return Object.assign({}, state, {
                isLoading   : false,
                errorMessage: null,
                data        : action.payload
            });
        case GET_RATE_ERROR:
            return Object.assign({}, state, {
                isLoading   : false,
                errorMessage: action.payload.errorMessage,
                data        : null
            });
        default:
            return state;
    }
}