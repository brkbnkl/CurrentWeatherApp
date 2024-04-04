import React from 'react';

const CityInfo = ({ city }) => {

    return (
        <div className="oldList">
            <p className="oldTime">{new Date().toLocaleDateString()}</p>
            <p className="oldCity">{city.name}, {city.country}</p>
            <p className="oldTemp">{Math.round(city.temp)}°C</p>
            <p className="oldFeelsLike">HİSSEDİLEN {Math.floor(city.feels_like)}°C</p>
            <p className="oldHumidity">NEM : {city.humidity} %</p>
            <p className="oldDesc">HAVA {city.description.toUpperCase()}</p>
            <p className="oldMinmax">EN DÜŞÜK {Math.round(city.temp_min)}°C / EN YÜKSEK {Math.round(city.temp_max)}°C</p>
            <p className="oldWind2">RÜZGAR : {city.wind_speed} M/S</p>
            <p className="oldPressure">BASINÇ : {city.pressure} Mbar</p>
            <p className="oldSunrise">GÜN DOĞUMU : {formatTime(city.sunrise)}</p>
            <p className="oldSunset">GÜN BATIMI : {formatTime(city.sunset)}</p>
        </div>
    );
};

export default CityInfo;
