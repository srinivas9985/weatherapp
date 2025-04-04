const API_KEY = '7f1433f1ec018d2f145960564b1f61d1'; 
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export const fetchWeatherData = async (city) => {
  try {
    const response = await fetch(
      `${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`
    );

    if (!response.ok) {
      throw new Error('Please enter the city name correctly.');
    }

    const data = await response.json(); 
    return data;
  } catch (error) {
    throw new Error(error.message || 'Something went wrong');
  }
};
