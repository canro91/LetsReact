import React from 'react';

const Weather = (props) => {
    return (
        <div className="container">
            <div className="cards">
                <h1>Medellin</h1>
                <h5 className="py-4">
                    <i className="wi wi-day-sunny display-1"></i>
                </h5>
                <h2 className="py-2">25&deg;</h2>
                <h3>
                    <span className="px-4">20&deg;</span>
                    <span className="px-4">20&deg;</span>
                </h3>
                <h4 className="py-3">Slow Rain</h4>
            </div>

        </div>
    );
}

export default Weather;