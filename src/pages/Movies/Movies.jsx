import { Formik,Form,Field} from 'formik';
import { useState,useEffect } from 'react';
import { getMovieByName } from 'apiServises'; 
import { MovieList } from 'components/MovieList/MovieList';


export const Movies = () =>{
    const [searchName, setSearchName] = useState('')
    const [items,setItems] = useState([])

 

   const handleSubmit=(values)=>{
   console.log(values)
   const {queryName} = values;
    setSearchName(searchName=>searchName=queryName);
  
   }

   useEffect(() => {
    if(searchName===''){
        return
    }
    
    getMovieByName(searchName).then(data=>setItems(items=>items=data.data.results))
   }, [searchName])
    
    
    return (
        <div>
            <Formik initialValues={{ queryName: '' }} onSubmit={handleSubmit}>
                <Form>
                    <Field name='queryName'/>
                    <button type='submit'>Пошук</button>
                </Form>

            </Formik>
            <MovieList items={items}/>
        </div>
    )
}