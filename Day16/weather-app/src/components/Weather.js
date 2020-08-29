import React from 'react';

const Weather = ({ city, country, current, min, max, description, iconId }) => {
    const icons = {
        thunderstorm: 'wi-thunderstorm',
        drizzle: 'wi-sleet',
        rain: 'wi-storm-showers',
        snow: 'wi-snow',
        atmosphere: 'wi-fog',
        clear: 'wi-day-sunny',
        clouds: 'wi-day-fog'
    };

    const mapIconToStyle = (iconId) => {
        switch (true) {
            case iconId >= 200 && iconId <= 232:
                return icons.thunderstorm;

            case iconId >= 300 && iconId <= 321:
                return icons.drizzle;

            case iconId >= 500 && iconId <= 531:
                return icons.rain;

            case iconId >= 600 && iconId <= 622:
                return icons.snow;

            case iconId >= 700 && iconId <= 781:
                return icons.atmosphere;

            case iconId === 800:
                return icons.clear;

            default:
                return icons.clouds;
        }

    };

    return (
        <div className="container">
            <div className="cards pt-4">
                <h1>{city}, {country}</h1>
                <h5 className="py-4">
                    <i className={`wi ${mapIconToStyle(iconId)} display-1`}></i>
                </h5>
                <h2 className="py-2">{current}&deg;</h2>
                <h3>
                    <span className="px-4">{min}&deg;</span>
                    <span className="px-4">{max}&deg;</span>
                </h3>
                <h4 className="py-3">{description}</h4>
            </div>

        </div>
    );
}

export default Weather;