import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const PreviousSearches = ({ searchedCities, handleDeleteCity }) => {

  if (searchedCities.length === 0) {
    return null;
  }

  return (
    <div className="content2">
      <h3>PREVİOUS SEARCHES</h3>
      {searchedCities.map((city, index) => {
        return (
          <div className="oldList" key={index}>
            <FontAwesomeIcon icon={faTrash} className="trash-icon" onClick={() => handleDeleteCity(index)} />
            <p className="oldTime">{new Date().toLocaleDateString()}</p>
            <p className="oldCity">{city.name}, {city.country}</p>
            <p className="oldTemp">TEMP: {Math.round(city.temp)}°C</p>
            <p className="oldFeelsLike">FEELS LİKE: {Math.floor(city.feels_like)}°C</p>
            <p className="oldHumidity">HUMIDITY: {city.humidity} %</p>
            <p className="oldDesc">WEATHER: {city.description.toUpperCase()}</p>
            <p className="oldMinmax">MIN TEMP: {Math.round(city.temp_min)}°C / MAX TEMP: {Math.round(city.temp_max)}°C</p>
            <p className="oldWind2">WIND: {city.wind_speed} M/S</p>
            <p className="oldPressure">PRESSURE: {city.pressure} Mbar</p>
            <p className="oldSunrise">SUNRISE: {city.sunrise} </p>
            <p className="oldSunset">SUNSET: {city.sunset}</p>
          </div>
        );
      })}
    </div>
  );
};

export default PreviousSearches;
