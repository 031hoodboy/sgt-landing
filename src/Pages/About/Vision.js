import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import {Link} from 'react-router-dom';

import {PageWrapper} from '../../components/PageStyle';
import BackgroundImg from '../../assets/aboutbackground.png';
import {PageTitleWrpper, PageBlockWrapper, PageTitle, NavBarWrapper, NavBlock, SelectNavBlock, PageSubTitle } from '../../components/PageStyle';
import styled from '@emotion/styled';
import VisionImg from '../../assets/vision.png';
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
                    </Link>
                    <Link to="/vision" style={{textDecoration: 'none', color: "#000"}}>
                        <SelectNavBlock>경영이념</SelectNavBlock>
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
                <VisionCard/>
                <CardTitle>
                    숨겨진 가치를 찾는 기업,<br/>
                    고객이 신뢰하는 기업
                </CardTitle>
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
    height: 30vh;
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
    @media screen and (max-width: 1024px) {
        height: 17vh;
        font-size: 26px;
  }
`;

const Chart1 = styled.div`
    width: 60vw;
    height: 60vw;
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
    height: 100vw;
    margin: 0 auto;
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
    width: 695px;
    height: 445px;
    margin: 5vh auto;
    background-image: url(${VisionImg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center; 
    display: flex;
    align-items: flex-end;
    justify-content: center;
    flex-direction: column;
    @media screen and (max-width: 840px) {
    width: 90vw;
    height: 52vw;
    }
`;

export const CardTitle = styled.div`
  font-size: 30px;
  text-align: center;
  padding: 5vh 0;
  margin: 0 auto;
  font-weight: 600;
  @media screen and (max-width: 840px) {
    width: 90vw;
    font-size: 19px;
    }
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