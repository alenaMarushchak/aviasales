import {
    GET_TICKETS_REQUEST,
    GET_TICKETS_SUCCESS,
    GET_TICKETS_ERROR,
} from '../constants/actionTypes/tickets'

export const initialState = {
    data        : null,
    errorMessage: null,
    isLoading   : false,
};


export default (state = initialState, action) => {
    switch (action.type) {
        case GET_TICKETS_REQUEST:
            return Object.assign({}, state, {
                isLoading   : true,
                errorMessage: null
            });
        case GET_TICKETS_SUCCESS:
            return Object.assign({}, state, {
                isLoading   : false,
                errorMessage: null,
                data        : action.payload
            });
        case GET_TICKETS_ERROR:
            return Object.assign({}, state, {
                isLoading   : false,
                errorMessage: action.payload.errorMessage,
                data        : null
            });
        default:
            return state;
    }
}