import {combineReducers} from 'redux';
import tickets from './tickets'
import rate from './rate'

export default combineReducers({
    tickets,
    rate
});