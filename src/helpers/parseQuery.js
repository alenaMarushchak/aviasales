import {urlStops} from '../constants'

function queryString(input) {

    // Create an object with no prototype
    const ret = Object.create(null);

    if (typeof input !== 'string') {
        return ret;
    }

    input = input.trim().replace(/^[?#&]/, '');

    if (!input) {
        return ret;
    }

    for (const param of input.split('&')) {
        let [key, value] = param.replace(/\+/g, ' ').split('=');

        ret[key] = value;
    }


    return ret;
}

export default (query) => {
    const filter = queryString(query);
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