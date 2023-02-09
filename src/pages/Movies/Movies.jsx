import { Formik, Form } from 'formik';
import { useState, useEffect } from 'react';
import { getMovieByName } from 'apiServises';
import { MovieList } from 'components/MovieList/MovieList';
import { useSearchParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { Input,BtnSearch } from './Movies.styled';



export const Movies = () => {
    const [searchName, setSearchName] = useState('');
    const [items, setItems] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();

    const name = searchParams.get('name');

    const updateQueryString = name => {
        const nextParams = name !== '' ? { name } : {};
        setSearchParams(nextParams);
    };

    const handleSubmit = (values,{reset})=> {
        const { queryName } = values;

        setSearchName(searchName => (searchName = queryName));
        updateQueryString(queryName);
        reset(values);
    };

    useEffect(() => {
        if (searchName === '') {
            return;
        }

        getMovieByName(searchName)
            .then(data => {
                if (data.data.results.length === 0) {
                    toast.warn('Нажаль нічого не знайдено');
                    return
                }
                return setItems(items => (items = data.data.results));
            })
            .catch(({ message }) => {
                message = 'Щось пішло не так. Спробуйте ще раз';
                return alert(message);
            });
    }, [searchName]);

    useEffect(() => {
        if (name === null) {
            return;
        }

        getMovieByName(name)
            .then(data => setItems(items => (items = data.data.results)))
            .catch(error => console.log(error));
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
            <ToastContainer/>
        </div>
    );
};
