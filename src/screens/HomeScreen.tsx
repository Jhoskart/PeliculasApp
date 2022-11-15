import React from 'react'
import Carousel from 'react-native-snap-carousel';
import { View, Text, ActivityIndicator, Dimensions, FlatList } from 'react-native'
import { useMovies } from '../hooks/useMovies'
import { MoviePoster } from '../components/MoviePoster'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const HomeScreen = () => {

    const { peliculasEnCine, isLoading } = useMovies();
    const {top} = useSafeAreaInsets();
    const { width: windowWidth } = Dimensions.get('window');

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
        <View style={{
            marginTop: top + 20,
        }}>
            {/* <MoviePoster 
                movie={peliculasEnCine[0]}
            /> */}
            <View style={{
                height: 440,
            }}>
            {/* Carousel Principal */}
            <Carousel
                data={peliculasEnCine}
                renderItem={({item}: any) => <MoviePoster movie={item} />}
                sliderWidth={windowWidth}
                itemWidth={300}
            />
            </View>

            {/* Peliculas Populares */}
            <View style={{
                height: 260,
            }}>
                <Text style={{
                    fontSize: 30,
                    fontWeight: 'bold',
                    marginLeft: 8,
                }}>Populares</Text>

                <FlatList 
                    data={peliculasEnCine}
                    renderItem={({item}: any) => <MoviePoster movie={item} />}
                    keyExtractor={(item) => item.id.toString()}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                />
            </View>


        </View>
    )
}

export default HomeScreen