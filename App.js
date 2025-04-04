import React from 'react';
import HomeScreen from './src/screens/homeScreen';
import { WeatherProvider } from './src/context/weatherContext';

const App = () => {

  return (
    <WeatherProvider>
      <HomeScreen />
    </WeatherProvider>
  );
}



export default App;
