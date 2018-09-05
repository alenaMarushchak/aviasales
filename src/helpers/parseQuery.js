import queryString from 'query-string';
import {urlStops} from '../constants'

export default (query) => {
    const filter = queryString.parse(query);
    const {stops} = filter;
    const initialState = [false, false, false, false];

    let stopsArray = (stops && stops.split && stops.split(',')) || [];

    stopsArray = stopsArray.filter((item) => {
        let index = urlStops.indexOf(item);

        return (index > -1 || item === 'all');
    });

    const indexOfAll = stopsArray.findIndex((item) => item === 'all' || item === ' ' || item === '');

    if (indexOfAll > -1) {
        return [true, true, true, true];
    }

    stopsArray.forEach((item) => {
        let index = urlStops.indexOf(item);

        if (index > -1) {
            initialState[index] = true;
        }
    });


    return initialState;
}