import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import {Link} from 'react-router-dom';

import {PageWrapper} from '../../components/PageStyle';
import BackgroundImg from '../../assets/businessdomainbackground.png';
import {PageTitleWrpper, PageTitle, Bar } from '../../components/PageStyle';
import styled from '@emotion/styled';
import Film1 from '../../assets/film1.png';
import Film2 from '../../assets/film2.png';
import Film3 from '../../assets/film3.png';

const SecondaryBattery = () => {
    return (
        <PageWrapper>
            <Header/>
            <MainImg>
                사업영역
                <NavBarWrapper>
                    <Link to="/processing-business" style={{textDecoration: 'none', color: "#000"}}>
                        <NavBlock>정밀가공사업</NavBlock>
                    </Link>
                    <Link to="/manufacture" style={{textDecoration: 'none', color: "#000"}}>
                        <NavBlock>장비제조사업</NavBlock>
                    </Link>
                    <Link to="/secondary-battery" style={{textDecoration: 'none', color: "#000"}}>
                        <SelectNavBlock>이차전지소재사업</SelectNavBlock>
                    </Link>
                </NavBarWrapper>
            </MainImg>
            <PageTitleWrpper>
                <PageTitle>2차전지소재사업</PageTitle>
            </PageTitleWrpper>
            <BarkWrapper>
                <Bar>셀파우치 필름</Bar>
                <Blockwrapper>
                    <Block/>
                    <Block2/>
                    <Block3/>
                </Blockwrapper>
            </BarkWrapper>
            <Footer/>
        </PageWrapper>
    );
}

const MainImg = styled.div`
    width: 100%;
    height: 25vh;
    background: #282D27;
    background-image: url(${BackgroundImg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center; 
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: #fff;
    font-size: 45px;
    font-weight: 600;
    @font-face {
        font-family: 'EliceDigitalBaeum_Bold';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2105_2@1.0/EliceDigitalBaeum_Bold.woff') format('woff');
        font-weight: bold;
        font-style: normal;
    }
    font-family: 'EliceDigitalBaeum_Bold';
    @media screen and (max-width: 1024px) {
        height: 17vh;
        font-size: 26px;
    }
`;

const NavBarWrapper = styled.div`
    width: 60vw;
    height: 58px;
    display: flex;
    margin: 0 auto;
    position: absolute;
    color: #000;
    font-size: 16px;
    font-weight: 400;
    top: calc(25vh + 56px);
    box-shadow:  0px 3px 6px rgba(0, 0, 0, 0.1);
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    @media screen and (max-width: 1024px) {
        width: calc(90vw + 3px);
        top: calc(23vh); 
        height: 40px;
    }
`;

const NavBlock = styled.div`
    width: 20vw;
    height: 58px;
    border-left: 1px solid #D9D9D9;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
    @media screen and (max-width: 1024px) {
    width: 30vw;
    height: 40px; 
    font-size: 14px;
    }
`;

const SelectNavBlock = styled(NavBlock)`
    background: #930E14;
    color: #fff;
    border-left: 1px solid #930E14;
`;

const Blockwrapper = styled.div`
    width: 1088px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 5vh auto 10vh auto;
    @media screen and (max-width: 1220px) {
        width: 90vw;
        justify-content: space-around;
  }
`;

const Block = styled.div`
    width: 100%;
    height: 45vw;
    margin-bottom: 2vh;
    background-image: url(${Film1});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center; 
    max-height: 550px;
    @media screen and (max-width: 767px) {
    background-size: contain;
    max-width: 1000px;
    width: 100%;
    height: 50vw;
    min-height: 208px;
  }
`;

const Block2 = styled(Block)`
    background-image: url(${Film2});
`;

const Block3 = styled(Block)`
    background-image: url(${Film3});
`;

const BarkWrapper = styled.div`
    margin-bottom: 10vh;
    @media screen and (max-width: 1024px) {
        width: 90vw;
        margin: 0 auto 20vh auto;
  }
`;

export default SecondaryBattery;