import { MainLink, Nav, Header } from './SharedLayout.styled';
import { Loader } from 'components/Loader/Loader';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';


const SharedLayout = () => {
    return (
        <div>
            <Header>
                <Nav>
                    <MainLink to="/" end> Home </MainLink>
                    
                    <MainLink to="/movies">Movies</MainLink>
                </Nav>
            </Header>
            <Suspense fallback={<Loader/>}>
                <Outlet />
            </Suspense>
        </div>
    );
};

export default SharedLayout;
