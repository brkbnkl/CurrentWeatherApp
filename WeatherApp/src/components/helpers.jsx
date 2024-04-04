export const formatCityData = (cityData) => {

    const sunriseUTC = new Date((cityData.sys.sunrise + cityData.timezone) * 1000);
    const sunsetUTC = new Date((cityData.sys.sunset + cityData.timezone) * 1000);

    const sunriseLocal = convertUTCToLocal(sunriseUTC);
    const sunsetLocal = convertUTCToLocal(sunsetUTC);
    const sunriseTime = sunriseLocal.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const sunsetTime = sunsetLocal.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    console.log(sunriseTime)

    return {
        name: cityData.name,
        country: cityData.sys.country,
        temp: cityData.main.temp,
        feels_like: cityData.main.feels_like,
        humidity: cityData.main.humidity,
        description: cityData.weather[0].description,
        temp_min: cityData.main.temp_min,
        temp_max: cityData.main.temp_max,
        wind_speed: cityData.wind.speed,
        pressure: cityData.main.pressure,
        sunrise: sunriseTime,
        sunset: sunsetTime
    };
};

export const convertUTCToLocal = (utcDate) => {
    return new Date(utcDate.getTime() + new Date().getTimezoneOffset() * 60000);
};

export const formatTime = (timestamp, timezoneOffset) => {
    const localTimeUTC = new Date((timestamp + timezoneOffset) * 1000);
    const localTime = convertUTCToLocal(localTimeUTC);
    return localTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
};