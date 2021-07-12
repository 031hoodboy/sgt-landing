import React from 'react';
import styled from '@emotion/styled';
import {Link} from 'react-router-dom';
import SgtLogoImg from '../assets/sgtlogo.png'

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
            <NavnWrapper>
                <Link to="/" style={{textDecoration: 'none'}}>
                    <NavContent>회사소개</NavContent>
                </Link>
                <Link to="/" style={{textDecoration: 'none'}}>
                    <NavContent>사업영역</NavContent>
                </Link>
                <Link to="/" style={{textDecoration: 'none'}}>
                    <NavContent>설비현황</NavContent>
                </Link>
                <Link to="/" style={{textDecoration: 'none'}}>
                    <NavContent>기술현황</NavContent>
                </Link>
                <Link to="/" style={{textDecoration: 'none'}}>
                    <NavContent>홍보센터</NavContent>
                </Link>
                <Link to="/" style={{textDecoration: 'none'}}>
                    <NavContent>고객지원</NavContent>
                </Link>
                <Link to="/" style={{textDecoration: 'none'}}>
                    <NavContent>공지사항</NavContent>
                </Link>
            </NavnWrapper>
        </HeaderBlock>
        </>
    );
};

const HeaderBlock = styled.div`
    width: 95vw;
    padding: 5px 2.5vw;
    position: sticky;
    margin: 0 auto;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
    color: #4a5568;
    background: #fff;
    z-index: 1;
`;

const LogoWrapper = styled.div`
    display: flex;
    align-items: center;
`;

const Logo = styled.div`
    width: 183px;
    height: 82px;
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

const NavnWrapper = styled.div`
    display: flex;
    align-items: center;
    @media screen and (max-width: 1024px) {
    display: none;
  }
`;

const NavContent = styled.div`
    font-size: 18;
    padding: 0 40px;
    color: #000;
    cursor: pointer;
`;


export default Header;
