import { getReviews } from 'apiServises';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
    const { movieId } = useParams();

    const [items, setItems] = useState([]);

    useEffect(() => {
        if (movieId === null) {
            return;
        }
        getReviews(movieId).then(data =>
            setItems(items => [...items, ...data.data.results])
        );
    }, [movieId]);

    return (
        <div>
            <ul>
                {items.length > 0 ? (
                    items.map(item => {
                        return (
                            <li key={item.id}>
                                <h3>Author:{item.author}</h3>
                                <p>{item.content}</p>
                            </li>
                        );
                    })
                ) : (
                    <h3>Not reviews</h3>
                )}
            </ul>
        </div>
    );
};

export default Reviews;
