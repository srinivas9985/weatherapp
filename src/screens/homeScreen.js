import React, { useState, useContext } from 'react';
import { View, TextInput, Button, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { WeatherContext } from '../context/weatherContext';
import WeatherCard from '../components/weatherCard';

const HomeScreen = () => {
     const { weather, fetchWeather, loading, error } = useContext(WeatherContext);
    const [city, setCity] = useState('');

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Enter city name"
                value={city}
                onChangeText={setCity}
            />
            {loading && <ActivityIndicator size="large" color="#0000ff" />}
            {error && <Text style={styles.error}>{error}</Text>}
            <Button title="Get Weather" onPress={() => fetchWeather(city)} />

            <View style={{marginTop:10}}>
             {weather && <WeatherCard weather={weather} />}
             </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center'
    },
    input: {
        borderWidth: 1,
        padding: 10,
        marginBottom: 10,
        borderRadius: 5
    },
    error: {
        color: 'red',
        marginBottom: 10
    }
});

export default HomeScreen;
