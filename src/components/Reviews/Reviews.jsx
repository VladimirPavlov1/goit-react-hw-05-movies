import { getReviews } from 'apiServises';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';



const Reviews = () => {
   

    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const { movieId } = useParams();


    useEffect(() => {
        setIsLoading(true);

        const movieReviews = async () => {
            try {
                const data = await getReviews(movieId);
                setItems(data);
            } catch (error) {
                setError(error.message);
            }
            finally{
                setIsLoading(false)
            }
        };
        movieReviews();
    }, [movieId]);

    return (
        <div>
            {isLoading && <Loader />}
            {error && <p>ойоййой, що робиться</p>}
            {items && (
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
            )}
        </div>
    );
};

export default Reviews;
