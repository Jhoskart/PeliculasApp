import React from 'react'
import Carousel from 'react-native-snap-carousel';
import { View,ActivityIndicator, Dimensions, ScrollView } from 'react-native'
import { useMovies } from '../hooks/useMovies'
import { MoviePoster } from '../components/MoviePoster'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { HorizontalSlider } from '../components/HorizontalSlider';

const HomeScreen = () => {

    const { nowPlaying, popular, topRated, upcoming, isLoading } = useMovies();
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
        <ScrollView>
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
                    data={nowPlaying}
                    renderItem={({item}: any) => <MoviePoster movie={item} />}
                    sliderWidth={windowWidth}
                    itemWidth={300}
                    inactiveSlideOpacity={0.5}
                />
                </View>

                {/* Peliculas populares */}
                <HorizontalSlider title="Populares" movies={popular} />

                {/* Peliculas mejor valoradas */}
                <HorizontalSlider title="Mejor valoradas" movies={topRated} />

                {/* Peliculas proximamente */}
                <HorizontalSlider title="Proximamente" movies={upcoming} />


            </View>
        </ScrollView>
    )
}

export default HomeScreen