import { getTrend } from 'apiServises';
import { Loader } from 'components/Loader/Loader';
import MovieList from 'components/MovieList/MovieList';
import { useState, useEffect } from 'react';

const Home = () => {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        setIsLoading(true);
        const trendMovies = async () => {
            try {
                const data = await getTrend();
                setItems(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        };
        trendMovies();
    }, []);

    return (
        <div>
            <h2>Trending today</h2>

            {isLoading && <Loader />}
            {error && <p>ойоййой, що робиться</p>}
            {items && <MovieList items={items} />}
        </div>
    );
};

export default Home;
