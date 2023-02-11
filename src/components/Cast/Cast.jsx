import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getCast } from 'apiServises';
import photo_not from '../../image/user_not_found.jpg';

const Cast = () => {
    const [items, setItems] = useState([]);

    const { movieId } = useParams();

    useEffect(() => {
        if (movieId !== null) {
            getCast(movieId).then(data => {
                setItems(items => [...getCleanItems(data.data.cast)]);
            });
        }
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

    const getCleanItems = array => {
        return array.filter(({ id }) => id.includes(id));
    };

    return (
        <ul>
            {items &&
                items.map(({ character, id, original_name, profile_path }) => {
                    return (
                        <li key={[character, id]}>
                            <img
                                src={getUserPhoto(profile_path)}
                                alt="jdghh"
                                width="100px"
                            />
                            <h3>{original_name}</h3>
                            <h3>{character}</h3>
                        </li>
                    );
                })}
        </ul>
    );
};

export default Cast;
