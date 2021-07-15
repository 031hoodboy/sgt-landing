import React from 'react';
import styled from '@emotion/styled';
import {Link} from 'react-router-dom';
import SgtNoneImg from '../assets/sgtnone.png'

const HeaderNav = () => {
    return (
        <>
        <HeaderBlock>
            <LogoWrapper>
                    <Logo />
            </LogoWrapper>
            <NavigatorWrapper>
                <Navigator>
                    <Link to="/greet" style={{textDecoration: 'none'}}>
                        <NavContent>CEO인사말</NavContent>
                    </Link>
                    <Link to="/vision" style={{textDecoration: 'none'}}>
                        <NavContent type="trigger">비전</NavContent>
                    </Link>
                    <Link to="/history" style={{textDecoration: 'none'}}>
                        <NavContent>연혁</NavContent>
                    </Link>
                    <Link to="/business-partner" style={{textDecoration: 'none'}}>
                        <NavContent>사업파트너</NavContent>
                    </Link>
                    <Link to="/way-to-come" style={{textDecoration: 'none'}}>
                        <NavContent>오시는 길</NavContent>
                    </Link>
                    <Link to="/organize-chart" style={{textDecoration: 'none'}}>
                        <NavContent>조직도</NavContent>
                    </Link>
                </Navigator>
                <Navigator>
                    <Link to="/processing-business" style={{textDecoration: 'none'}}>
                        <NavContent>정밀가공사업</NavContent>
                    </Link>
                    <Link to="/manufacture" style={{textDecoration: 'none'}}>
                        <NavContent type="trigger">장비제조사업</NavContent>
                    </Link>
                    <Link to="/secondary-battery" style={{textDecoration: 'none'}}>
                        <NavContent>이차전지소재사업</NavContent>
                    </Link>
                </Navigator>
                <Navigator>
                    <Link to="/Processing" style={{textDecoration: 'none'}}>
                        <NavContent>가공설비</NavContent>
                    </Link>
                    <Link to="/Measure" style={{textDecoration: 'none'}}>
                        <NavContent type="trigger">측정설비</NavContent>
                    </Link>
                    <Link to="/Production" style={{textDecoration: 'none'}}>
                        <NavContent>생산설비</NavContent>
                    </Link>
                </Navigator>
                <Navigator>
                    <Link to="/" style={{textDecoration: 'none'}}>
                        <NavContent>연구소 소개</NavContent>
                    </Link>
                    <Link to="/" style={{textDecoration: 'none'}}>
                        <NavContent type="trigger">특허 및 인증</NavContent>
                    </Link>
                </Navigator>
                <Navigator>
                    <Link to="/" style={{textDecoration: 'none'}}>
                        <NavContent>뉴스</NavContent>
                    </Link>
                    <Link to="/" style={{textDecoration: 'none'}}>
                        <NavContent type="trigger">e-카탈로그</NavContent>
                    </Link>
                </Navigator>
                <Navigator>
                    <Link to="/" style={{textDecoration: 'none'}}>
                        <NavContent>견적문의</NavContent>
                    </Link>
                    <Link to="/" style={{textDecoration: 'none'}}>
                        <NavContent type="trigger">채용안내</NavContent>
                    </Link>
                </Navigator>
                <Navigator>
                    <Link to="/" style={{textDecoration: 'none'}}>
                        <NavContent>공지사항</NavContent>
                    </Link>
                </Navigator>
            </NavigatorWrapper>
        </HeaderBlock>

        </>
    );
};

const HeaderBlock = styled.div`
    width: 85vw;
    padding: 0 7.5vw;
    position: fixed;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #4a5568;
    background: #fff;
    z-index: 2;
    @media screen and (max-width: 1024px) {
    display: none;
  }
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
    background-image: url(${SgtNoneImg});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center; 
`;

const Navigator = styled.div`
    padding: 20px 0;
    display: flex;
    flex-direction: column;
    text-align: center;
`;

const NavContent = styled.div`
    width: 11vw;
    max-width: 130px;
    min-width: 100px;
    cursor: pointer;
    color: #000;
    padding-top: 15px;
    font-size: 16px;
    &:hover {
        color: #930E14;
    }

`;

const NavigatorWrapper = styled.div`
    display: flex;
`;

export default HeaderNav;
