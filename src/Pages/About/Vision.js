import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import {Link} from 'react-router-dom';

import {PageWrapper} from '../../components/PageStyle';
import BackgroundImg from '../../assets/aboutbackground.png';
import {PageTitleWrpper, PageBlockWrapper, PageTitle, NavBarWrapper, NavBlock, SelectNavBlock } from '../../components/PageStyle';
import styled from '@emotion/styled';
import VisionImg from '../../assets/vision.png';

const Vision = () => {
    return (
        <PageWrapper>
            <Header/>
            <MainImg>
                회사소개
                <NavBarWrapper>
                <Link to="/greet" style={{textDecoration: 'none', color: "#000"}}>
                    <NavBlock>ceo인사말</NavBlock>
                    </Link>
                    <Link to="/vision" style={{textDecoration: 'none', color: "#000"}}>
                        <SelectNavBlock>비전</SelectNavBlock>
                    </Link>
                    <Link to="/history" style={{textDecoration: 'none', color: "#000"}}>
                        <NavBlock>연혁</NavBlock>
                    </Link>
                    <Link to="/business-partner" style={{textDecoration: 'none', color: "#000"}}>
                        <NavBlock>사업파트너</NavBlock>
                    </Link>
                    <Link to="/way-to-come" style={{textDecoration: 'none', color: "#000"}}>
                        <NavBlock>오시는 길</NavBlock>
                    </Link>
                        <Link to="/organize-chart" style={{textDecoration: 'none', color: "#000"}}>
                    <NavBlock>조직도</NavBlock>
                    </Link>
                </NavBarWrapper>
            </MainImg>
            <PageTitleWrpper>
                <PageTitle>비전</PageTitle>
            </PageTitleWrpper>
            <PageBlockWrapper>
                <VisionCard/>
            </PageBlockWrapper>
            <Footer/>
        </PageWrapper>
    );
}

const MainImg = styled.div`
    width: 100%;
    height: 30vh;
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
    @media screen and (max-width: 1024px) {
        height: 17vh;
        font-size: 26px;
  }
`;

const VisionCard = styled.div`
    width: 700px;
    height: 450px;
    margin: 0 auto;
    background-image: url(${VisionImg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center; 
    display: flex;
    align-items: flex-end;
    justify-content: center;
    flex-direction: column;
    margin-top: 50px;
    @media screen and (max-width: 840px) {
    width: 90vw;
    height: 52vw;
    }
`;

export default Vision;