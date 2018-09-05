import React from 'react';

export default (props) => {
    const {isLoading} = props;

    if(isLoading){
        return <div id="cube-loader">
                <div className="caption">
                    <div className="cube-loader">
                        <div className="cube loader-1"/>
                        <div className="cube loader-2"/>
                        <div className="cube loader-4"/>
                        <div className="cube loader-3"/>
                    </div>
                </div>
            </div>
    }

    return null;
}