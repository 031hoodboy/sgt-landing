import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import {Link} from 'react-router-dom';

import {PageWrapper} from '../../components/PageStyle';
import BackgroundImg from '../../assets/aboutbackground.png';
import {PageTitleWrpper, PageBlockWrapper, PageTitle, NavBarWrapper, NavBlock, SelectNavBlock, Line } from '../../components/PageStyle';
import styled from '@emotion/styled';
import VisionImg from '../../assets/vision1.png';
import VisionImg2 from '../../assets/vision2.png';
import BigChart from '../../assets/bigchart.png';
import SmallChart from '../../assets/smallchart.png';

const Vision = () => {
    return (
        <PageWrapper>
            <Header/>
            <MainImg>
                회사소개
                <NavBarWrapper>
                <Link to="/greet" style={{textDecoration: 'none', color: "#000"}}>
                    <NavBlock>인사말</NavBlock>
                    <Line/>
                    </Link>
                    <Link to="/vision" style={{textDecoration: 'none', color: "#000"}}>
                        <SelectNavBlock>경영이념</SelectNavBlock>
                        <Line/>
                    </Link>
                    <Link to="/history" style={{textDecoration: 'none', color: "#000"}}>
                        <NavBlock>연혁</NavBlock>
                    </Link>
                    {/* <Link to="/business-partner" style={{textDecoration: 'none', color: "#000"}}>
                        <NavBlock>사업파트너</NavBlock>
                    </Link> */}
                    <Link to="/way-to-come" style={{textDecoration: 'none', color: "#000"}}>
                        <NavBlock>오시는 길</NavBlock>
                    </Link>
                        {/* <Link to="/organize-chart" style={{textDecoration: 'none', color: "#000"}}>
                    <NavBlock>조직도</NavBlock>
                    </Link> */}
                </NavBarWrapper>
            </MainImg>
            <PageTitleWrpper>
                <PageTitle>경영이념</PageTitle>
            </PageTitleWrpper>
            <PageBlockWrapper>
                <Blockwrapper>
                    <VisionCard/>
                    <VisionCard2/>
                </Blockwrapper>
                <Descrip>
                    <Chart1/>
                    <Chart2/>
                </Descrip>
            </PageBlockWrapper>
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

const Blockwrapper = styled.div`
    width: 1088px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 5vh auto 5vh auto;
    @media screen and (max-width: 1220px) {
        width: 90vw;
        justify-content: space-around;
  }
`;

const Chart1 = styled.div`
    width: 60vw;
    height: 40vw;
    margin: 0 auto;
    background-image: url(${BigChart});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center; 
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: #fff;
    font-size: 45px;
    font-weight: 600;
    @media screen and (max-width: 780px) {
        display: none;
  }
`;

const Chart2 = styled.div`
    width: 100vw;
    height: 60vw;
    background-image: url(${SmallChart});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center; 
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: #fff;
    font-size: 45px;
    font-weight: 600;
    display: none;
    @media screen and (max-width: 780px) {
        display: flex;
        margin: 0;
  }
`;

const VisionCard = styled.div`
    width: 44vw;
    max-width: 535px;
    height: 30vw;
    max-height: 350px;
    background-image: url(${VisionImg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center; 
    margin-bottom: 3vh;
    @media screen and (max-width: 767px) {
    max-width: 1000px;
    width: 100vw;
    height: 50vw;
    min-height: 208px;
  }
`;

const VisionCard2 = styled(VisionCard)`
    background-image: url(${VisionImg2});
`;

const Descrip = styled.div`
    width: 90vw;
    text-align: center;
    font-size: 20px;
    line-height: 32px;
    margin: 0 auto 10vh auto;
    font-weight: 300;
    @media screen and (max-width: 840px) {
        width: 100vw;

    }
`;

export default Vision;