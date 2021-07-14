import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import {Link} from 'react-router-dom';
import Map from '../../modules/MapContainer';
import {PageWrapper} from '../../components/PageStyle';
import BackgroundImg from '../../assets/aboutbackground.png';
import {PageTitleWrpper, PageBlockWrapper, PageTitle, NavBarWrapper, NavBlock, SelectNavBlock } from '../../components/PageStyle';
import styled from '@emotion/styled';

const WayToCome = () => {
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
                        <NavBlock>사업파트너</NavBlock>
                    </Link>
                    <Link to="/way-to-come" style={{textDecoration: 'none', color: "#000"}}>
                        <SelectNavBlock>오시는 길</SelectNavBlock>
                    </Link>
                    <Link to="/organize-chart" style={{textDecoration: 'none', color: "#000"}}>
                        <NavBlock>조직도</NavBlock>
                    </Link>
                </NavBarWrapper>
            </MainImg>
            <PageTitleWrpper>
                <PageTitle>오시는 길</PageTitle>
            </PageTitleWrpper>
            <PageBlockWrapper>
                <MapContainer>
                    <Map />
                    <InfoWrapper>
                        <Info><b>주소</b> 충청남도 천안시 서북구 직산읍 모시리 215번지</Info>
                        <Info><b>tel</b> 041-548-012</Info>
                    </InfoWrapper>
                </MapContainer>
            </PageBlockWrapper>
            <Footer/>
        </PageWrapper>
    );
}

const MapContainer = styled.div`
    width: 1088px;
    height: 50vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 5vh auto 20vh auto;
    @media screen and (max-width: 1220px) {
        width: 90vw;
        height: 60vh;
        justify-content: space-around;
        margin: 5vh auto 30vh auto;

  }
`;
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

const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
`;


const Info = styled.div`
    font-size: 18px;
    font-weight: 300;
    line-height: 32px;
    @media screen and (max-width: 780px) {
        font-size: 16px;
  }
`;

export default WayToCome;