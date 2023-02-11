import axios from 'axios';

export  async function getTrend(){
    const results = await axios.get(
        'https://api.themoviedb.org/3/trending/all/day?api_key=27cddf1230eab22bdf20f54c99a70037',
        {
            params: {
                language: 'ua',
            },
        }
    );
    return results.data.results
};

export async function getMovieDetails(movieId){
    const results = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=27cddf1230eab22bdf20f54c99a70037`,
        {
            params: {
                language: 'ua',
            },
        }
    );
    return results.data
};

export async function getMovieByName(movieName){
    const results = await axios.get(
        'https://api.themoviedb.org/3/search/movie?api_key=27cddf1230eab22bdf20f54c99a70037',
        {
            params: {
                query: movieName,
            },
        }
    );
    return results.data.results
};

export async function getCast(movieId){
    const results = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=27cddf1230eab22bdf20f54c99a70037`
    );
    return results.data.cast
};

export async function getReviews(movieId){
    const results = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=27cddf1230eab22bdf20f54c99a70037`
    );
    return results.data.results
};
