import React from 'react';
import TicketsContainer  from './containers/TicketsContainer';
import Header from './components/Header';
import Aux from './components/HOC/Auxillary';

const App = ({location}) => {
    const {search} = location;

    return (<Aux>
        <Header/>
        <main>
            <TicketsContainer filter={search || ''}/>
        </main>
    </Aux>);
};

export default App;