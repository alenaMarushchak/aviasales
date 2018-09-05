import React from 'react';
import PropTypes from 'prop-types';
import TicketItem from './TicketItem';
import Preloader from '../HOC/Preloader';
import exchangeHelper from '../../helpers/exchangeHelper'

const TicketList = (props) => {
    let {tickets, stops, rate, currency} = props;
    let {isLoading: rateIsLoading, data: rateData, errorMessage: rateErrorMessage} = rate || {};
    let {isLoading, data, errorMessage} = tickets || {};

    if (isLoading) {
        return <Preloader isLoading={isLoading}/>
    }

    if (rateIsLoading) {
        return <Preloader isLoading={rateIsLoading}/>
    }

    if (errorMessage) {
        return <div className="tickets-container">
            <h2 className="no-data"> {errorMessage}</h2>
        </div>
    }

    if (rateErrorMessage) {
        return <div className="tickets-container">
            <h2 className="no-data"> {rateErrorMessage}</h2>
        </div>
    }

    if(!data || !data.length){
        return <Preloader isLoading={true}/>
    }

    let coefficient = (rateData && currency && exchangeHelper(currency, rateData)) || 1;

    let result = data.filter(el => stops[el.stops])
            .map(function (el, index) {
                return <TicketItem key={index} {...el} coefficient={coefficient} currency={currency}/>
            });

    if (result.length) {
        return <div className="tickets-container">
            {result}
        </div>
    }

    return <div className="tickets-container">
        <h2 className="no-data">No data...</h2>
    </div>
};

TicketList.defaultProps = {
    tickets: {
        isLoading: true, data: [], errorMessage: null
    }
};

TicketList.propTypes = {
    tickets: PropTypes.shape({
        isLoading: PropTypes.bool, data: PropTypes.array, errorMessage: PropTypes.string
    }),
};

export default TicketList;