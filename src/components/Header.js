import React from 'react';
import styled from '@emotion/styled';
import {Link} from 'react-router-dom';
import SgtLogoImg from '../assets/sgtlogo.png'
import MobileLogoImg from '../assets/sgtmobilelogo.png'

import NavBar from './NavBar';
import HamburgerButton from './HambuergerButton';

const Header = () => {
    return (
        <>
        <HeaderBlock>
            <LogoWrapper>
                <Link to="/" style={{textDecoration: 'none'}}>
                    <Logo />
                    <MobileLogo/>
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
    box-shadow:  0px 3px 6px rgba(0, 0, 0, 0.1);
`;

const LogoWrapper = styled.div`
    display: flex;
    align-items: center;
`;

const Logo = styled.div`
    width: 15vw;
    max-width: 183px;
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
    @media screen and (max-width: 840px) {
        display: none;
  }
`;

const MobileLogo = styled.div`
    width: 15vw;
    max-width: 183px;
    min-width: 92px;
    height: 9vh;
    max-height: 82px;
    min-height: 41px;
    background-image: url(${MobileLogoImg});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center; 
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    display: none;
    @media screen and (max-width: 840px) {
        display: flex;
  }
`;

const Name = styled.span`
    font-size: 20px;
    font-weight: 700;
`;


export default Header;
