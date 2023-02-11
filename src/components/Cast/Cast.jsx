import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getCast } from 'apiServises';
import photo_not from '../../image/user_not_found.jpg';
import { Loader } from 'components/Loader/Loader';

const Cast = () => {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const { movieId } = useParams();

    useEffect(() => {
        setIsLoading(true);
        const castMovies = async () => {
            try {
                const data = await getCast(movieId);
                setItems(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        };
        castMovies();
    }, [movieId]);

    const getUserPhoto = userPhoto => {
        let photo = photo_not;
        items.map(({ profile_path }) => {
            if (profile_path !== null && profile_path === userPhoto) {
                photo = `https://image.tmdb.org/t/p/original${profile_path}`;
            }
            return photo;
        });
        return photo;
    };

    return (
        <>
            {isLoading && <Loader />}
            {error && <p>ойоййой, що робиться</p>}
            <ul>
                {items &&
                    items.map(
                        ({
                            character,
                            cast_id,
                            original_name,
                            profile_path,
                        }) => {
                            return (
                                <li key={cast_id}>
                                    <img
                                        src={getUserPhoto(profile_path)}
                                        alt="jdghh"
                                        width="100px"
                                    />
                                    <h3>{original_name}</h3>
                                    <h3>{character}</h3>
                                </li>
                            );
                        }
                    )}
            </ul>
        </>
    );
};

export default Cast;
