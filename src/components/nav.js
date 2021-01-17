import React from 'react';
import {Link} from 'gatsby';
import styled from '@emotion/styled';

const Nav = styled.nav`
    display: flex;
    flex-direction:column;
    padding-bottom:3rem;

    @media (min-width:768px){
        padding:0;
        flex-direction:row;
    }
`;

const Navlink = styled(Link)`
    color:#fff;
    font-weight:700;
    font-family: 'PT Serif', serif;
    text-decoration:none;
    padding:.5rem;
    margin-right:1rem;

    &::last-of-type{
        margin-right:0;
    }

    &.actual{
        border-bottom: 2px solid #fff;
    }
`;

const Navegacion = () => {
    return ( 
        <Nav>
            <Navlink to='/' activeClassName="actual">Inicio</Navlink>
            <Navlink to='/Nosotros' activeClassName="actual">Nosotros</Navlink>
            <Navlink to='/Propiedades' activeClassName="actual">Propiedades</Navlink>
        </Nav>
     );
}
 
export default Navegacion;
