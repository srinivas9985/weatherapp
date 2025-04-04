import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const WeatherCard = ({ weather }) => {
    if (!weather) return null;

    return (
        <View style={styles.card}>
            <Text style={styles.city}>{weather?.name}</Text>
            <Text style={styles.temp}>{weather?.main?.temp}°C</Text>
            <Text style={styles.condition}>{weather?.weather[0]?.description}</Text>
            <Image
                style={styles.icon}
                source={{ uri: `https://openweathermap.org/img/wn/${weather?.weather[0]?.icon}@2x.png` }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        padding: 20,
        backgroundColor: '#ddd',
        borderRadius: 10,
        alignItems: 'center'
    },
    city:
    {
        fontSize: 24,
        fontWeight: 'bold'
    },
    temp: {
        fontSize: 32
    },
    condition: {
        fontSize: 20
    },
    icon: {
        width: 100,
        height: 100
    }
});

export default WeatherCard;
