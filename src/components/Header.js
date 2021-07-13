import React from 'react';
import styled from '@emotion/styled';
import {Link} from 'react-router-dom';
import SgtLogoImg from '../assets/sgtlogo.png'
import NavBar from './NavBar';
import HamburgerButton from './HambuergerButton';

const Header = () => {
    return (
        <>
        <HeaderBlock>
            <LogoWrapper>
                <Link to="/" style={{textDecoration: 'none'}}>
                    <Logo />
                </Link>
                <Name></Name>
            </LogoWrapper>
            <NavBar/>
            <HamburgerButton/>
        </HeaderBlock>

        </>
    );
};

const HeaderBlock = styled.div`
    width: 85vw;
    padding: 0 7.5vw;
    position: sticky;
    margin: 0 auto;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #4a5568;
    background: #fff;
    z-index: 2;
    border-bottom: 1px solid #D8D8D8;
`;

const LogoWrapper = styled.div`
    display: flex;
    align-items: center;
`;

const Logo = styled.div`
    width: 15vw;
    max-width: 183px;
    min-width: 92px;
    height: 9vh;
    max-height: 82px;
    min-height: 41px;
    background-image: url(${SgtLogoImg});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center; 
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

const Name = styled.span`
    font-size: 20px;
    font-weight: 700;
`;


export default Header;
