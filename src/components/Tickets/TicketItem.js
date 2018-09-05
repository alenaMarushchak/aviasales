import React from 'react';
import PropTypes from 'prop-types';
import plane from './plane.svg';
import formatDate from '../../helpers/formatDate';

const TicketItem = (props) => {
    const {
        origin,
        origin_name,
        destination,
        destination_name,
        departure_date,
        departure_time,
        arrival_date,
        arrival_time,
        carrier,
        stops,
        price,
        coefficient,
        currency,
    } = props;

    let newPrice = Math.round(price / coefficient);
    let imgUrl = `/img/${carrier}.png`;


    return (<div className="ticket-item">
        <div className="short-info">
            <img src={imgUrl} width="40" height="40" className="carrier-logo" alt=""/>
            <br/>
            <button>Buy {newPrice} {currency}</button>
        </div>
        <div className="long-info">
            <div className="departure-arrival">
                <p className="time">{departure_time}</p>

                <div className="stop-count-container">
                    <div className="stop-count">{stops} TRANSPLANT</div>
                    <img src={plane} alt=""/>
                </div>

                <p className="time">{arrival_time}</p>
            </div>
            <div className="departure-arrival">
                <div>
                    <p className="label">{origin}, {origin_name}</p>
                    <p className="date">{formatDate(departure_date)} </p>
                </div>

                <div>
                    <p className="label">{destination}, {destination_name}</p>
                    <p className="date">{formatDate(arrival_date)}</p>
                </div>
            </div>
        </div>
    </div>)
};

TicketItem.propTypes = {
    origin          : PropTypes.string,
    origin_name     : PropTypes.string,
    destination     : PropTypes.string,
    destination_name: PropTypes.string,
    departure_date  : PropTypes.string,
    departure_time  : PropTypes.string,
    arrival_date    : PropTypes.string,
    arrival_time    : PropTypes.string,
    carrier         : PropTypes.string,
    stops           : PropTypes.number,
    price           : PropTypes.number,
    currency        : PropTypes.string
};

TicketItem.defaultProps = {
    origin          : "VVO",
    origin_name     : "Владивосток",
    destination     : "TLV",
    destination_name: "Тель-Авив",
    departure_date  : "12.05.18",
    departure_time  : "16:20",
    arrival_date    : "12.05.18",
    arrival_time    : "22:10",
    carrier         : "TK",
    stops           : 3,
    price           : 12400,
    currency        : 'UAH'
};

export default TicketItem;