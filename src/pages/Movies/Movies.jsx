import { Formik, Form } from 'formik';
import { useState, useEffect } from 'react';
import { getMovieByName } from 'apiServises';
import MovieList from 'components/MovieList/MovieList';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Input, BtnSearch } from './Movies.styled';
import 'react-toastify/dist/ReactToastify.css';
import { Loader } from 'components/Loader/Loader';

const Movies = () => {
   
    const [items, setItems] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    

   

    const handleSubmit = (values, { resetForm }) => {
        const { queryName } = values;
        if (queryName.trim() === ''){
             toast.warn('Введіть ваш запит', {
                autoclose: 3000,
                theme: 'colored',
            });
            return;
        }
        setSearchParams({name:queryName});
     
        resetForm(values);
    };

    useEffect(() => {
       
        const name = searchParams.get('name');
        setIsLoading(true);
        const searchMovies = async () => {
            try {
                
                const data = await getMovieByName(name);
        
                setItems(data);
               
            } catch (error) {
                
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        };

        searchMovies();
         
    }, [searchParams]);

    return (
        <div>
            <Formik initialValues={{ queryName: '' }} onSubmit={handleSubmit}>
                <Form>
                    <Input name="queryName" />
                    <BtnSearch type="submit">Пошук</BtnSearch>
                </Form>
            </Formik>

            {isLoading && <Loader />}
            {error && <p>ойоййой, що робиться</p>}
            {items && <MovieList items={items} />}
        </div>
    );
};

export default Movies;
