import React from 'react';

const CityInfo = ({ city }) => {

    return (
        <div className="oldList">
            <p className="oldTime">{new Date().toLocaleDateString()}</p>
            <p className="oldCity">{city.name}, {city.country}</p>
            <p className="oldTemp">TEMP: {Math.round(city.temp)}°C</p>
            <p className="oldFeelsLike">FEELS LIKE: {Math.floor(city.feels_like)}°C</p>
            <p className="oldHumidity">HUMIDITY: {city.humidity} %</p>
            <p className="oldDesc">WEATHER: {city.description.toUpperCase()}</p>
            <p className="oldMinmax">MIN TEMP: {Math.round(city.temp_min)}°C / MAX TEMP: {Math.round(city.temp_max)}°C</p>
            <p className="oldWind2">WIND: {city.wind_speed} M/S</p>
            <p className="oldPressure">PRESSURE: {city.pressure} Mbar</p>
            <p className="oldSunrise">SUN RISE: {formatTime(city.sunrise)}</p>
            <p className="oldSunset">SUN SET: {formatTime(city.sunset)}</p>
        </div>
    );
};

export default CityInfo;
