import {
    GET_TICKETS_REQUEST,
    GET_TICKETS_SUCCESS,
    GET_TICKETS_ERROR,
} from '../constants/actionTypes/tickets'

import Data from '../helpers/tickets';
import CONSTANTS from '../constants'

export const getTickets = () => {
    return dispatch => {
        dispatch(getTicketsRequest());

        const random = Math.random();

        setTimeout(function () {
            if (random >= 0) {
                dispatch(getTicketsSuccess(Data.tickets));
            } else {
                dispatch(getTicketsError());
            }
        }, 3000);
    }
};

const getTicketsRequest = () => ({
    type: GET_TICKETS_REQUEST
});

const getTicketsSuccess = (tickets) => ({
    type   : GET_TICKETS_SUCCESS,
    payload: tickets
});

const getTicketsError = (errorMessage = CONSTANTS.ERROR_MESSAGES.DEFAULT) => ({
    type   : GET_TICKETS_ERROR,
    payload: {
        errorMessage
    },
    error  : true
});
