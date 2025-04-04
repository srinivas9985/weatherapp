import React, { createContext, useState, useEffect } from 'react';
import { fetchWeatherData } from '../services/weatherService';
import EncryptedStorage from 'react-native-encrypted-storage';

export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [lastCity, setLastCity] = useState('');

  const WEATHER_STORAGE_KEY = 'lastWeatherSearch';

  // Load last searched city when app starts
  useEffect(() => {
    const loadLastSearch = async () => {
      try {
        const storedCity = await EncryptedStorage.getItem(WEATHER_STORAGE_KEY);
        if (storedCity) {
          setLastCity(storedCity);
          fetchWeather(storedCity); // Automatically fetch weather for the last city
        }
      } catch (error) {
        console.error('Error loading last city:', error);
      }
    };

    loadLastSearch();
  }, []);

  const fetchWeather = async (city) => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchWeatherData(city);

      setWeather(data);
      setLastCity(city);
      await EncryptedStorage.setItem(WEATHER_STORAGE_KEY, city);
      
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <WeatherContext.Provider value={{ weather, fetchWeather, loading, error, lastCity }}>
      {children}
    </WeatherContext.Provider>
  );
};
