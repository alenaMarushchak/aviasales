import React from 'react'
import PropTypes from 'prop-types'
import history from './helpers/history';
import {Provider} from 'react-redux'
import {Router, Route, Switch} from 'react-router-dom'
import App from './App'

const Root = ({store}) => (
    <Provider store={store}>
        <Router history={history}>
            <Switch>
                <Route path="/" component={App}/>
            </Switch>
        </Router>
    </Provider>
);

Root.propTypes = {
    store: PropTypes.object.isRequired
};

export default Root