import React from 'react';
import { render } from '@testing-library/react-native';
import WeatherCard from '../src/components/WeatherCard';

test('renders correctly with weather data', () => {
  const mockWeather = {
    name: 'Hyderabad',
    main: { temp: 35 },
    weather: [{ description: 'cloudy', icon: '04d' }]
  };

  const { getByText } = render(<WeatherCard weather={mockWeather} />);
  
  expect(getByText('Hyderabad')).toBeTruthy();

  expect(getByText('35°C')).toBeTruthy();

  expect(getByText('cloudy')).toBeTruthy();
});
