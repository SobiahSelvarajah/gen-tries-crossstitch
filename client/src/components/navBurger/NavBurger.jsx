import React, { useState } from 'react';
import styled from 'styled-components';

const StyledNavBurger = styled.div`
    display: flex;
    justify-content: space-between;
    flex-flow: column nowrap;
    height: 1rem;
    z-index: 20;

    div {
        width: 1.4rem;
        height: 0.15rem;
        border-radius: 20%;
        background-color: ${({open}) => open ? '#FBFBFB' : '#858CBC'};
        transform-origin: 1px;
        transition: all 0.3s linear;

        &:nth-child(1) {
            transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
        }

        &:nth-child(2) {
            transform: ${({ open }) => open ? 'translateX(100%)' : 'translate(0)'};
            opacity: ${({ open}) => open ? 0 : 1};
        }
        
        &:nth-child(3) {
            transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
        }
    }
`;

const NavBurger = () => {
    const [ open, setOpen ] = useState(false);

    return (
        <div className='navBurger__container'>
            <StyledNavBurger
                open={open}
                onClick={() => setOpen(!open)}
            >
                <div />
                <div />
                <div />
            </StyledNavBurger>
        </div>
    )
}

export default NavBurger;