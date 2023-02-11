import { MovieList, MovieListItem } from './MovieCard.styled';
import PropTypes from 'prop-types';

const MovieCard = ({ movie }) => {
  
    const startImage = 'https://image.tmdb.org/t/p/w300/';

    const getUserScoreFromMovie = () => {
        if (movie !== null) {
            const userScore = Math.round(movie.vote_average * 10);
            return userScore;
        }
    };

    const getGenresFromMovie = () => {
        if (movie !== null) {
            const genresNames = movie.genres.map(genre => genre.name);
            return genresNames.join('  ');
        }
    };

    const getReleaseDate = date => {
        const newDate = date.slice(0, 4);
        return newDate;
    };

    const { poster_path, original_title, release_date, overview } = movie;
    return (
        <>
            <MovieList>
                <MovieListItem>
                    <img src={startImage + poster_path} alt="" />
                </MovieListItem>
                <MovieListItem>
                    <h2>
                        {original_title} ({getReleaseDate(release_date)})
                    </h2>
                    <p>User score:{getUserScoreFromMovie()}%</p>
                    <h2>Overview</h2>
                    <p>{overview}</p>
                    <h2>Genres</h2>
                    <p> {getGenresFromMovie()}</p>
                </MovieListItem>
            </MovieList>
        </>
    );
};
export default MovieCard;

MovieCard.propTypes = {
    movie: PropTypes.shape({
        poster_path: PropTypes.string.isRequired,
        original_title: PropTypes.string.isRequired,
        release_date: PropTypes.string.isRequired,
        overview: PropTypes.string.isRequired,
    }),
};
