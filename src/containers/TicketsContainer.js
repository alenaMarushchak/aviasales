import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {getTickets} from  '../actions/tickets';
import {getExchangeRate} from  '../actions/exchangeRate';
import TicketsList from '../components/Tickets';
import Currency from '../components/Currency';
import Stops from '../components/Stops';
import {urlStops} from '../constants'
import history from '../helpers/history';
import parseQuery from '../helpers/parseQuery';

const initialState = {
    stops   : [true, true, true, true],
    currency: 'UAH'
};

class TicketsContainer extends Component {
    constructor(props) {
        super(props);

        let {filter, tickets} = this.props;

        this.state = {
            tickets,
            stops      : filter ? parseQuery(filter) : initialState.stops,
            currency   : initialState.currency,
            stopsForUrl: 'all'
        }
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.tickets.data !== nextProps.tickets.data) {
            this.setState({
                tickets: nextProps.tickets,
                rate: nextProps.data
            })
        }
    }

    componentDidMount() {
        this.props.getTickets();
    }

    handelSetStops = (type, index, checked) => {
        const {stops, currency} = this.state;
        let newStops = [false, false, false, false];
        let stopsForUrl = [];

        switch (type) {
            case 'only':
                newStops[index] = true;
                stopsForUrl.push(urlStops[index]);
                break;
            case 'one':
                newStops = [].concat(stops);
                newStops[index] = !newStops[index];
                newStops.forEach((el, i) => el && stopsForUrl.push(urlStops[i]));
                break;
            default:{
                newStops = newStops.map(el => checked);
                stopsForUrl.push('all');
            }
        }

        history.push(`?stops=${stopsForUrl.join(',')}&currency=${currency}`);

        this.setState({stops: newStops, stopsForUrl});
    };

    handleSetCurrency = (event) => {
        event.preventDefault();
        const target = event.target;
        const {stopsForUrl} = this.state;

        history.push(`?stops=${stopsForUrl}&currency=${target.name}`);

        this.setState({
            currency: target.name
        }, () => this.props.getExchangeRate());
    };

    render() {
        let {tickets, stops, currency} = this.state;
        let {rate} = this.props;

        return (
            <div className="container">
                <form className="filter-container">
                    <Currency handleSetCurrency={this.handleSetCurrency} activeCurrency = {currency}/>
                    <Stops
                        stops={stops}
                        handleSetStops={this.handelSetStops}
                        className="stops-container"
                    >
                    </Stops>
                </form>

                <TicketsList tickets={tickets} stops={stops} currency={currency} rate={rate}/>
            </div>)
    }
}

const mapStateToProps = (state) => {
    return ({
        tickets: {
            ...state.tickets
        },
        rate: {
            ...state.rate
        }
    })
};

const mapDispatchToProps = dispatch => ({
    getTickets     : bindActionCreators(getTickets, dispatch),
    getExchangeRate: bindActionCreators(getExchangeRate, dispatch)
});

TicketsContainer.defaultProps = {
    tickets: {
        isLoading: true, data: null, errorMessage: null
    },
};

TicketsContainer.propTypes = {
    tickets: PropTypes.shape({
        isLoading: PropTypes.bool, data: PropTypes.array, errorMessage: PropTypes.string
    }),
};

export default connect(mapStateToProps, mapDispatchToProps)(TicketsContainer);