import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
border-bottom: 5px solid grey;
margin-bottom: 20px;
`;

export const Nav = styled.nav`
height: 45px;
`; 

export const MainLink = styled(NavLink)`
text-decoration: none;
font-size: 20px;
margin-right: 20px;
padding: 16px 0;
font-weight: 500;
color:black;
&.active{
    color: red;
}
`;