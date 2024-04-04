import React, { useState } from 'react';
import Header from './Header';
import WeatherInfo from './WeatherInfo';
import SaveButton from './SaveButton';
import PreviousSearches from './PreviousSearches';
import { formatCityData } from './helpers';
import './App.css';

const App = () => {
  const [searchedCities, setSearchedCities] = useState([]);
  const [weatherData, setWeatherData] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [showSaveButton, setShowSaveButton] = useState(false);
  const [showHr, setShowHr] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await fetchWeatherData(searchTerm);
      setWeatherData(response);
      setSearchTerm('');
      setShowSaveButton(true);
    } catch (error) {
      console.error('Error fetching weather data: ', error);
    }
  };

  const handleSaveCity = (e) => {
    e.preventDefault();
    setSearchedCities(prevCities => [...prevCities, formatCityData(weatherData)]);
    setShowSaveButton(false);
    setShowHr(true)
    setWeatherData(null);
  };


  const handleDeleteCity = (index) => {
    const newSearchedCities = [...searchedCities];
    newSearchedCities.splice(index, 1);
    setSearchedCities(newSearchedCities);

    if (newSearchedCities.length === 0) {
      setShowHr(false);
    }
  };

  const fetchWeatherData = async (cityName) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=48de702ea8eb14fbdc236e8b330b81af&units=metric&lang=tr`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  };

  return (
    <div className="app">
      <Header handleSearch={handleSearch} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <WeatherInfo weatherData={weatherData} />
      <SaveButton showSaveButton={showSaveButton} handleSaveCity={handleSaveCity} />
      <hr style={{ display: showHr ? 'block' : 'none' }} />
      <PreviousSearches searchedCities={searchedCities} handleDeleteCity={handleDeleteCity} />
    </div>
  );
};

export default App;
