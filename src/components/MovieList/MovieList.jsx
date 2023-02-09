import { NavLink } from 'react-router-dom';
import { MovieDetails } from 'pages/MovieDetails/MovieDetails';
import { useLocation } from 'react-router-dom';

export const MovieList = ({ items }) => {
   
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
