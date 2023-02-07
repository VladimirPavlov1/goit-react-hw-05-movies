import { getMovieDetails } from "apiServises"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Home } from "pages/Home/Home";
import { Cast } from "components/Cast/Cast";
import { Reviews } from "components/Reviews/Reviews";
import { Outlet } from "react-router-dom";

export const MovieDetails = () => {
 const {movieId} = useParams();
 console.log(movieId)
    const [movie, setMovie] = useState(null);
   
   
    
    useEffect(() => {
       
        if(movieId===null){return}else{
            getMovieDetails(movieId).then(data=>setMovie(movie=>movie=data.data)).catch(error=>console.log(error))
        }
        
    },[movieId])
    
    const startImage = 'https://image.tmdb.org/t/p/w300/'
   
   
    console.log(movie)
    
   const getUserScoreFromMovie=()=>{
   if(movie!==null){
    const userScore = Math.round((movie.vote_average)*10)
    return userScore;
   }
}

    const getGenresFromMovie=()=>{
        if(movie!==null){
            const genresNames=movie.genres.map(genre=>genre.name)
           return genresNames.join('  ')
        }
    }

    return (
        <div>
            <button><Link to="/" element={<Home/>}>Go Back</Link></button>
           {movie&&(<ul>
                <li>
                    <img src={startImage + movie.poster_path} alt="" />
                </li>
                <li>
                    <h2>{movie.original_title}</h2>
                    <p>User score:{getUserScoreFromMovie()}%</p>
                    <h2>Overview</h2>
                    <p>{movie.overview}</p>
                    <h2>Genres</h2>
                    <p> {getGenresFromMovie()}</p>
                </li>
            </ul>)}
            <h3>Aditional information</h3>
            <ul>
                <li>
                    <Link to='cast' element={<Cast/>}><h3>Cast</h3></Link>
                </li>
                <li>
                    <Link to='reviews' element={<Reviews/>}><h3>Reviews</h3></Link>
                </li>
            </ul>
            <Outlet/>
        </div>
    )
}