import styled from '@emotion/styled'
import { Field } from 'formik';


export const Input = styled(Field)`
    width: 300px;
    height: 24px;
`;

export const BtnSearch = styled.button`

width:96px;
height: 30px;
margin-left: 8px;
padding: 0;
font-size:16px;
font-weight: 700;
:hover{
    background-color: red;
    color:white
}
`;