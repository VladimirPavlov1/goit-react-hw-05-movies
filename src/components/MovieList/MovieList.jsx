import { NavLink } from 'react-router-dom';
import MovieDetails from 'pages/MovieDetails/MovieDetails';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

const MovieList = ({ items }) => {
    const location = useLocation();

    return (
        <div>
            <ul>
                {items.map(({ id, original_title = 'Name not Found' }) => {
                    return (
                        <li key={id}>
                            <NavLink
                                to={`/movies/${id}`}
                                state={{ from: location }}
                                element={<MovieDetails />}
                            >
                                {original_title}
                            </NavLink>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default MovieList;

MovieList.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            original_title: PropTypes.string.isRequired,
        })
    ),
};
