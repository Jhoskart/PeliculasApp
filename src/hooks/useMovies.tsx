import { useEffect, useState } from "react";
import { MovieDBNowPlaying, Movie } from '../interfaces/movieInterface';
import movieDB from '../api/movieDB';

export const useMovies = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [peliculasEnCine, setPeliculasEnCine] = useState<Movie[]>([]);

    const getMovies = async() => {
        const resp = await movieDB.get<MovieDBNowPlaying>('/movie/now_playing');
        setPeliculasEnCine(resp.data.results);
        setIsLoading(false);
    }

    useEffect(() => {
        //now_playing
        getMovies();
    }, []);

    return {
        peliculasEnCine,
        isLoading
    }
}
