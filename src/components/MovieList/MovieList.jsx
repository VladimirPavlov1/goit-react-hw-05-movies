import { Link } from "react-router-dom"
import { MovieDetails } from "pages/MovieDetails/MovieDetails"


export const MovieList=({items})=>{
console.log(items)
    return (
        <ul>
            {items.map(({id,original_title='Name not Found'})=>{
              
                return <li key={id}>
                   <Link to={`/movies/${id}`} element={<MovieDetails/>}>{original_title}</Link>
                </li>})}
        </ul>
    )
    }