import { Formik,Form,Field } from 'formik';
import { useState } from 'react';




export const Movies = () =>{
    const [searchName,setSearchName]=useState('');

 

   const handleSubmit=(values,actions)=>{
        console.log(values)
        console.log(actions)

    }
    return (
        <div>
            <Formik  initialValues={{ searchName:'', }} onSubmit={handleSubmit}>
                <Form>
                    <Field name='searchName'/>
                    <button type='submit'>Пошук</button>
                </Form>
            </Formik>
        </div>
    )
}