import React from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
import { useMovies } from '../hooks/useMovies'

const HomeScreen = () => {

    const { peliculasEnCine, isLoading } = useMovies();

    if(isLoading) {
        return (
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignContent: 'center'
            }}>
                <ActivityIndicator size={100} color="red" />
            </View>
        )
    }

    return (
        <View>
            <Text>HomeScreen</Text>
        </View>
    )
}

export default HomeScreen