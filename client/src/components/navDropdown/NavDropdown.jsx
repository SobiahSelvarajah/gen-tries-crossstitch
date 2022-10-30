import React from 'react';
import styled from 'styled-components';
import NavLinks from '../navLinks/NavLinks';

const StyledNavDropdown = styled.ul`
    display: flex;
    flex-flow: column nowrap;
    list-style: none;
    background-color: #9F9FCA;
    position: fixed;
    transform: ${({open}) => open ? 'translateX(0)' : 'translateX(100%)'};
    top :0;
    right: 0;
    height: 50vh;
    width: 200px;
    // padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    a {
        font-family: 'Dancing Script Regular';
        font-size: 28px;
        color: #FFF;
        line-height: 36px;
        padding: 40px 10px; 
        text-decoration: none;      
    } 
`;

const NavDropdown = ({open}) => {
    return (
        <StyledNavDropdown open={open}>
            <NavLinks />
        </StyledNavDropdown>
    )
}

export default NavDropdown;