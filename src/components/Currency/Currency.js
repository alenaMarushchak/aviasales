import React from 'react';
import PropTypes from 'prop-types';
import {Currencies} from '../../constants'

const Currency  = (props) => {
    const {handleSetCurrency, activeCurrency} = props;

    return <div className="currency-container">
        <h3>Currency</h3>
        {Currencies.map(currency => (<button key={currency} onClick={handleSetCurrency} name={currency}
                                             className={activeCurrency === currency ?
                                                 `currency-btn active ${currency}`
                                                 : `currency-btn ${currency}`} >
                {currency}
            </button>)
        )}
    </div>
};

Currency.propTypes = {
    handleSetCurrency: PropTypes.func.isRequired
};

export default Currency;