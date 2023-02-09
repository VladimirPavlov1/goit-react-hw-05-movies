import {getTrend} from "apiServises"
import  MovieList  from "components/MovieList/MovieList";
import { useState, useEffect } from "react";






 const Home = () => {
   const [items, setItems]=useState([]);

   
   
    useEffect(() => {
      
    getTrend().then(data=>setItems(items=>items=data.data.results)) 

   }, []);
   
    return (
        <div>
            <h2>Trending today</h2>
            <MovieList items={items}/>
        </div>
    )
}

export default Home;