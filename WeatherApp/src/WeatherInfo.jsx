import React from 'react';
import { formatTime } from './helpers';

const WeatherInfo = ({ weatherData }) => {

    if (!weatherData) {
        return null;
    }

    const sunriseTime = formatTime(weatherData.sys.sunrise, weatherData.timezone);
    const sunsetTime = formatTime(weatherData.sys.sunset, weatherData.timezone);

    return (
        <div className="content">
            <div className="weatherInfo">
                {weatherData && (
                    <div>
                        <h2>{`${weatherData.name}, ${weatherData.sys.country}`}</h2>
                        <p className='temp'>TEMP: {Math.round(weatherData.main.temp)}°C</p>
                        <p className='feelsLike'>FEELS LIKE: {Math.round(weatherData.main.feels_like)}°C</p>
                        <p className='humidity'>HUMIDITY: {weatherData.main.humidity}%</p>
                        <p className='desc'>WEATHER: {weatherData.weather[0].description}</p>
                        <p className='minmax'>MIN TEMP: {Math.round(weatherData.main.temp_min)}°C / MAX TEMP: {Math.round(weatherData.main.temp_max)}°C</p>
                        <p className='wind'>WIND: {weatherData.wind.speed} m/s</p>
                        <p className='pressure'>PRESSURE: {weatherData.main.pressure} Mbar</p>
                        <p className='sunrise'>SUNRISE: {sunriseTime}</p>
                        <p className='sunset'>SUNSET: {sunsetTime}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default WeatherInfo;
