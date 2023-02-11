import { Container } from './App.styled';
import { ToastContainer } from 'react-toastify';
import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import SharedLayout from './SharedLayout/SharedLayout';
// import SharedLayout from './SharedLayout/SharedLayout';
// import { Loader } from './Loader/Loader';
// import { Suspense } from 'react';
// const SharedLayout = lazy(()=>import('./SharedLayout/SharedLayout'));
const Home = lazy(() => import('../pages/Home/Home'));
const Movies = lazy(() => import('../pages/Movies/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));
const NotFound = lazy(() => import('../pages/NotFound/NotFound'));

export const App = () => {
    return (
        <Container>
            <Routes>
                <Route path="/" element={<SharedLayout />}>
                    <Route index element={<Home />} />
                    <Route path="movies" element={<Movies />} />
                    <Route path="movies/:movieId" element={<MovieDetails />}>
                        <Route path="cast" element={<Cast />} />
                        <Route path="reviews" element={<Reviews />} />
                    </Route>
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>

            <ToastContainer />
        </Container>
    );
};
