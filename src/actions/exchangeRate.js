import {
    GET_RATE_REQUEST,
    GET_RATE_SUCCESS,
    GET_RATE_ERROR,
} from '../constants/actionTypes/exchangeRate'

import CONSTANTS from '../constants'

export const getExchangeRate = () => {
    return dispatch => {
        dispatch(getRateRequest());

        fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
            .then(function (response) {
                if (response.status === 200) {
                    return response.json();
                }
            })
            .then(function (data) {
                if (data && data.length) {
                    dispatch(getRateSuccess(data))
                }
            })
            .catch(err => dispatch(getRateError(err)));
    }
};

const getRateRequest = () => ({
    type: GET_RATE_REQUEST
});

const getRateSuccess = (rate) => ({
    type   : GET_RATE_SUCCESS,
    payload: rate
});

const getRateError = (errorMessage = CONSTANTS.ERROR_MESSAGES.DEFAULT) => ({
    type   : GET_RATE_ERROR,
    payload: {
        errorMessage
    },
    error  : true
});
