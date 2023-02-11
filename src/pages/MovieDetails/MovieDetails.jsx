import { getMovieDetails } from 'apiServises';
import { useState, useEffect } from 'react';
import { useLocation, useParams, NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import {
    Arrow,
    BtnLink,
    Btn,   
} from './MovieDetails.styled';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MovieCard from 'components/MovieCard/MovieCard';
import { Loader } from 'components/Loader/Loader';

const MovieDetails = () => {
    const [movie, setMovie] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const { movieId } = useParams();

    const location = useLocation();

    const backLinkHref = location.state?.from ?? '/';

    useEffect(() => {
        setIsLoading(true);

        const movieInfo = async () => {
            try {
                const data = await getMovieDetails(movieId);
                setMovie(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        };
        movieInfo();
    }, [movieId]);

    const notify = () => {
        toast.warn("Default Notification !");
    }
    
    return (
        <div>
           
            <Btn>
                <Arrow />
                <BtnLink to={backLinkHref}>Go back</BtnLink>
            </Btn>

            {movie && 
                <MovieCard movie={movie}/>
            }
            <h3>Aditional information</h3>
            <ul>
                <li>
                    <NavLink to="cast" state={{ from:backLinkHref }} >
                        <h3>Cast</h3>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="reviews"  state={{ from:backLinkHref }} >
                        <h3>Reviews</h3>
                    </NavLink>
                </li>
            </ul>
            {isLoading && <Loader />}
            {error && <p>{notify}</p>}
            <Outlet />
        </div>
    );
};

export default MovieDetails;
