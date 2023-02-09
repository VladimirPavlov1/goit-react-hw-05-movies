import { MainLink,Container,Nav, Header } from './App.styled';
import { ToastContainer } from 'react-toastify';
import {Routes, Route } from 'react-router-dom'
import { lazy,Suspense } from 'react';
import { FallingLines } from 'react-loader-spinner';


const Home = lazy(() => import('../pages/Home/Home'));
const Movies = lazy(() => import("../pages/Movies/Movies"));
const MovieDetails = lazy(() => import("../pages/MovieDetails/MovieDetails"));
const Cast = lazy(() => import("./Cast/Cast"));
const Reviews = lazy(() => import("./Reviews/Reviews"));
const NotFound = lazy(() => import("../pages/NotFound/NotFound"));





export const App = () => {
  return (
    <Container>
      <Header>
        <Nav>
          <MainLink to="/" end>Home</MainLink>
          <MainLink to = "/movies">Movies</MainLink>
        </Nav>
      </Header>
      
      <Suspense fallback={<FallingLines
  color="#4fa94d"
  width="100"
  visible={true}
  ariaLabel='falling-lines-loading'
/>}>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/movies' element={<Movies/>}/>
          <Route path='/movies/:movieId' element={<MovieDetails/>}>
            <Route path='cast' element={<Cast/>}/>
            <Route path='reviews' element={<Reviews/>}/>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      
      <ToastContainer/>
    </Container>
  );
};
