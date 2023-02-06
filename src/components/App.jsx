import {Routes, Route, NavLink} from 'react-router-dom'
import { Home } from 'pages/Home/Home';
import { MovieDetails } from 'pages/MovieDetails/MovieDetails';
import { Movies } from 'pages/Movies/Movies';
import { Cast } from './Cast/Cast';
import { Reviews } from './Reviews/Reviews';
import { NotFound } from 'pages/NotFound/NotFound';





export const App = () => {
  return (
    <div>
      <header>
        <nav>
          <NavLink to="/" end>Home</NavLink>
          <NavLink to = "/movies">Movies</NavLink>
        </nav>
      </header>
      

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/movies' element={<Movies/>}/>
        <Route path='/movies/:movieId' element={<MovieDetails/>}>
          <Route path='cast' element={<Cast/>}/>
          <Route path='reviews' element={<Reviews/>}/>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
