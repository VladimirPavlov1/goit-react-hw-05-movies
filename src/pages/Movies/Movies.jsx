import { Formik, Form } from 'formik';
import { useState, useEffect } from 'react';
import { getMovieByName } from 'apiServises';
import  MovieList  from 'components/MovieList/MovieList';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Input, BtnSearch } from './Movies.styled';
import 'react-toastify/dist/ReactToastify.css';

const Movies = () => {
    const [searchName, setSearchName] = useState('');
    const [items, setItems] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();

    const name = searchParams.get('name');

    const updateQueryString = name => {
        const nextParams = name !== '' ? { name } : {};
        setSearchParams(nextParams);
    };

    const handleSubmit = (values, { resetForm }) => {
        const { queryName } = values;

        setSearchName(searchName => (searchName = queryName));
        updateQueryString(queryName);
        resetForm(values);
    };

    useEffect(() => {
        if (searchName === '') {
            return;
        }

        getMovieByName(searchName)
            .then(data => {
                if (data.data.results.length === 0) {
                    toast.warn('Нажаль нічого не знайдено', {
                        autoclose: 3000,
                        theme: 'colored',
                    });
                    return;
                }
                return setItems(items => (items = data.data.results));
            })
            .catch(({ message }) => {
                message = 'Щось пішло не так. Спробуйте ще раз';
                return toast.error(message);
            });
    }, [searchName]);

    useEffect(() => {
        if (name === null) {
            return;
        }

        getMovieByName(name)
            .then(data => {
                if (data.data.results.length === 0) {
                    toast.warn('Нажаль нічого не знайдено', {
                        autoclose: 3000,
                        theme: 'colored',
                    });
                    return;
                }
                return setItems(items => (items = data.data.results));
            })
            .catch(({ message }) => {
                message = 'Щось пішло не так. Спробуйте ще раз';
                return toast.error(message);
            });
    }, [name]);

    return (
        <div>
            <Formik initialValues={{ queryName: '' }} onSubmit={handleSubmit}>
                <Form>
                    <Input name="queryName" />
                    <BtnSearch type="submit">Пошук</BtnSearch>
                </Form>
            </Formik>
            <MovieList items={items} />
        </div>
    );
};

export default Movies;