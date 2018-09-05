import React from 'react';
import PropTypes from 'prop-types';
import {stopName} from '../../helpers/functions'

const Stops = (props) => {
    const {stops, handleSetStops} = props;

    let checked = stops.reduce((previous, current) => previous && current);

    return (
        <div className="stops-container">
            <h3> NUMBER OF TRANSFERS </h3>
            <div className="checkbox-inner">
                <div className="checkbox-container">
                    <div className="checkbox-input">
                        <input type='checkbox'
                               id='allStops'
                               checked={checked}
                               onClick={() => handleSetStops('all', -1, !checked)}
                               onChange={() => handleSetStops('all', -1, !checked)}

                        >
                        </input>
                        <label htmlFor='allStops'/>
                    </div>

                    <span>All</span>
                </div>
            </div>
            {stops.map((item, index) => stop(item, index))}
        </div>
    );

    function stop(item, index) {
        let checked = stops[index];
        let boxName = stopName(index);

        return (
            <div key={index} className="checkbox-inner">

                <div className="checkbox-container">
                    <div className="checkbox-input">
                        <input type='checkbox'
                               id={index}
                               checked={checked}
                               onChange={() => handleSetStops('one', index)}
                               className="regular-checkbox"
                        >
                        </input>
                        <label htmlFor={index}/>
                    </div>

                    <span className="checkbox-label">{boxName}</span>
                </div>

                <span onClick={() => handleSetStops('only', index)} className="only">
                    ONLY
                </span>
            </div>
        )
    }
};

Stops.propTypes = {
    stops         : PropTypes.array.isRequired,
    handleSetStops: PropTypes.func.isRequired
};

export default Stops;