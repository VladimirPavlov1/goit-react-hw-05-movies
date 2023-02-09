import axios from 'axios';

export const getTrend = () => {
    return axios.get(
        'https://api.themoviedb.org/3/trending/all/day?api_key=27cddf1230eab22bdf20f54c99a70037',
        {
            params: {
                language: 'ua',
            },
        }
    );
};

export const getMovieDetails = movieId => {
    return axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=27cddf1230eab22bdf20f54c99a70037`,
        {
            params: {
                language: 'ua',
            },
        }
    );
};

export const getMovieByName = movieName => {
    return axios.get(
        'https://api.themoviedb.org/3/search/movie?api_key=27cddf1230eab22bdf20f54c99a70037',
        {
            params: {
                query: movieName,
            },
        }
    );
};

export const getCast = movieId => {
    return axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=27cddf1230eab22bdf20f54c99a70037`
    );
};

export const getReviews = movieId => {
    return axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=27cddf1230eab22bdf20f54c99a70037`
    );
};
