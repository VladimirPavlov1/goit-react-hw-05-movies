import { Formik,Form,Field } from 'formik';
import { useState,useEffect } from 'react';
import { getMovieByName } from 'apiServises'; 



export const Movies = () =>{
    const [searchName, setSearchName] = useState('')
    

 

   const handleSubmit=(values,actions)=>{
   console.log(values)
    console.log(actions)
   }

   useEffect(() => {
    if(searchName===''){
        return
    }
    console.log(searchName)
    getMovieByName(searchName).then(res=>console.log(res))
   }, [searchName])
    
    
    return (
        <div>
            <Formik  initialValues={''} onSubmit={handleSubmit}>
                <Form>
                    <Field name='searchName'/>
                    <button type='submit'>Пошук</button>
                </Form>
            </Formik>
        </div>
    )
}