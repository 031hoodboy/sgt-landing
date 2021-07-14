import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import {Link} from 'react-router-dom';

import {PageWrapper} from '../../components/PageStyle';
import BackgroundImg from '../../assets/aboutbackground.png';
import {PageTitleWrpper, PageTitle, NavBarWrapper, NavBlock, SelectNavBlock, PageSubTitle } from '../../components/PageStyle';
import styled from '@emotion/styled';

const BusinessPartner = () => {
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
                        <NavBlock>비전</NavBlock>
                    </Link>
                    <Link to="/history" style={{textDecoration: 'none', color: "#000"}}>
                        <NavBlock>연혁</NavBlock>
                    </Link>
                    <Link to="/business-partner" style={{textDecoration: 'none', color: "#000"}}>
                        <SelectNavBlock>사업파트너</SelectNavBlock>
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
                <PageTitle>사업파트너</PageTitle>
                <PageSubTitle>더 나은 세상을 만들어가는 일,<br/>글로벌 바이오제약 기업 메디톡스가 먼저 시작합니다.</PageSubTitle>
            </PageTitleWrpper>
                <Blockwrapper>
                    <Block></Block>
                    <Block></Block>
                    <Block></Block>
                    <Block></Block>
                    <Block></Block>
                    <Block></Block>
                    <Block></Block>
                    <Block></Block>
                </Blockwrapper>
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

const Blockwrapper = styled.div`
    width: 1088px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 5vh auto 20vh auto;
    @media screen and (max-width: 1220px) {
        width: 90vw;
        justify-content: space-around;
  }
`;

const Block = styled.div`
    border: 1px solid #D0D0D0;
    width: 260px;
    height: 140px;
    margin-bottom: 3vh;
    @media screen and (max-width: 1220px) {
    width: 42vw;
    max-width: 174px;
    height: 83px;
  }
`;

export default BusinessPartner;