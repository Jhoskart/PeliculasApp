import axios from 'axios';

const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params: {
        api_key: '7745ba45c4743c29bf3fd26705bac0ed',
        language: 'es-ES',
    },
});

export default movieDB;