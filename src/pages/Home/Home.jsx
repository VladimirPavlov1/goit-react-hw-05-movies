import {getTrend} from "apiServises"
import { MovieDetails } from "pages/MovieDetails/MovieDetails";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";




export const Home = () => {
   const [trendMovies, setTrendMovies]=useState([]);

   
   
    useEffect(() => {
    getTrend().then(data=>setTrendMovies(trendMovies=>trendMovies=data.data.results)) 

   }, []);
    console.log(trendMovies);
    return (
        <div>
           
            <h2>Trending today</h2>
            <ul>
                {trendMovies.map(({id,original_title='not name'})=>{
                    return <li key={id}>
                       <Link to={`/movies/${id}`} element={<MovieDetails/>}>{original_title}</Link>
                    </li>
                })}
            </ul>
        </div>
    )
}