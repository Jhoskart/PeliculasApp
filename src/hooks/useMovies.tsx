import { useEffect, useState } from "react";
import { MovieDBMoviesResponse, Movie } from '../interfaces/movieInterface';
import movieDB from '../api/movieDB';

interface MoviesState {
    nowPlaying: Movie[];
    popular: Movie[];
    topRated: Movie[];
    upcoming: Movie[];
}

export const useMovies = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [moviesState, setMovieState] = useState<MoviesState>();

    const getMovies = async() => {
        const nowPlayingPromise = movieDB.get<MovieDBMoviesResponse>('/now_playing');
        const popularPromise = movieDB.get<MovieDBMoviesResponse>('/popular');
        const topRatedPromise = movieDB.get<MovieDBMoviesResponse>('/top_rated');
        const upcomingPromise = movieDB.get<MovieDBMoviesResponse>('/upcoming');
        
        try {
            const response = await Promise.all([
                nowPlayingPromise,
                popularPromise,
                topRatedPromise,
                upcomingPromise
            ]);

            setMovieState({
                nowPlaying: response[0].data.results,
                popular: response[1].data.results,
                topRated: response[2].data.results,
                upcoming: response[3].data.results,
            });

            setIsLoading(false);

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        //now_playing
        getMovies();
    }, []);

    return {
        ...moviesState,
        isLoading
    }
}
