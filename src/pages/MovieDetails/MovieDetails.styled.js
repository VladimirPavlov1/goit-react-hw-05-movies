import styled from '@emotion/styled'
import { NavLink } from 'react-router-dom';
import {BiArrowBack} from "react-icons/bi"; 



export const Btn = styled.button`
display: block;
margin-bottom:16px;
border: none;
padding: 10px;
background-color: transparent;
`;

export const BtnLink = styled(NavLink)`
text-decoration: none;
font-size: 16px;
font-weight: 500;
color:black;
`;

export const Arrow = styled(BiArrowBack)`
width:20px;
`;

export const MovieList = styled.ul`
display: flex;
list-style: none;
margin: 0;
padding: 0;
`;

export const MovieListItem = styled.li`
margin-right: 40px;
`;