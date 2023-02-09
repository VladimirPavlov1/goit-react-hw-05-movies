import { getMovieDetails } from 'apiServises';
import { useState, useEffect } from 'react';
import { useLocation, useParams,NavLink } from 'react-router-dom';
import Cast  from 'components/Cast/Cast';
import  Reviews  from 'components/Reviews/Reviews';
import { Outlet } from 'react-router-dom';
import { Arrow,MovieList,BtnLink,Btn, MovieListItem } from './MovieDetails.styled';
import {toast} from 'react-toastify'


const MovieDetails = () => {
    const { movieId } = useParams();

    const location = useLocation();


    const backLinkHref = location.state?.from  ?? location.state?.location.state.from ?? location.state?.location.state.location.state.from ?? '/movies';

    const [movie, setMovie] = useState(null);

    useEffect(() => {
        if (movieId === null) {
            return;
        } else {
            getMovieDetails(movieId)
                .then(data =>{
                    if(data.data.length===0){
                        toast.warn('Нажаль нічого не знайдено',{autoclose:3000,theme:"colored"});
                    return
                    }
                    setMovie(movie => movie = data.data)
                })
                .catch(({ message }) => {
                    message = 'Щось пішло не так. Спробуйте ще раз';
                    return toast.error(message)
                });
        }
    }, [movieId]);

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

    const getReleaseDate=(date)=>{
       const newDate= date.slice(0,4);
       return newDate
    }

    return (
        <div>
            <Btn>
               <Arrow/>
                <BtnLink to={backLinkHref}>Go back</BtnLink>
            </Btn>

            {movie && (
                <MovieList>
                    <MovieListItem>
                        <img src={startImage + movie.poster_path} alt="" />
                    </MovieListItem>
                    <MovieListItem>
                        <h2>{movie.original_title}  ({getReleaseDate(movie.release_date)})</h2>
                        <p>User score:{getUserScoreFromMovie()}%</p>
                        <h2>Overview</h2>
                        <p>{movie.overview}</p>
                        <h2>Genres</h2>
                        <p> {getGenresFromMovie()}</p>
                    </MovieListItem>
                </MovieList>
            )}
            <h3>Aditional information</h3>
            <ul>
                <li>
                    <NavLink to="cast" state={{location}} element={<Cast />}>
                        <h3>Cast</h3>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="reviews" state={{location}}  element={<Reviews />}>
                        <h3>Reviews</h3>
                    </NavLink>
                </li>
            </ul>
            <Outlet />
        </div>
    );
};


export default MovieDetails;