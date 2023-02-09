import {Routes, Route } from 'react-router-dom'
import { Home } from 'pages/Home/Home';
import { MovieDetails } from 'pages/MovieDetails/MovieDetails';
import { Movies } from 'pages/Movies/Movies';
import { Cast } from './Cast/Cast';
import { Reviews } from './Reviews/Reviews';
import { NotFound } from 'pages/NotFound/NotFound';
import { MainLink,Container,Nav, Header } from './App.styled';






export const App = () => {
  return (
    <Container>
      <Header>
        <Nav>
          <MainLink to="/" end>Home</MainLink>
          <MainLink to = "/movies">Movies</MainLink>
        </Nav>
      </Header>
      

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/movies' element={<Movies/>}/>
        <Route path='/movies/:movieId' element={<MovieDetails/>}>
          <Route path='cast' element={<Cast/>}/>
          <Route path='reviews' element={<Reviews/>}/>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Container>
  );
};
