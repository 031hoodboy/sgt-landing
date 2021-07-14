import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import {Link} from 'react-router-dom';

import {PageWrapper} from '../../components/PageStyle';
import BackgroundImg from '../../assets/aboutbackground.png';
import {PageTitleWrpper, PageBlockWrapper, PageTitle, NavBarWrapper, NavBlock, SelectNavBlock, PageSubTitle } from '../../components/PageStyle';
import styled from '@emotion/styled';
// import ProfileImg from '../../assets/profile.png';


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
                        <NavBlock>비전</NavBlock>
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
                        <SelectNavBlock>조직도</SelectNavBlock>
                    </Link>
                </NavBarWrapper>
            </MainImg>
            <PageTitleWrpper>
                <PageTitle>조직도</PageTitle>
                <PageSubTitle>더 나은 세상을 만들어가는 일,<br/>글로벌 바이오제약 기업 메디톡스가 먼저 시작합니다.</PageSubTitle>
            </PageTitleWrpper>
            <PageBlockWrapper>
                
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

// const Profile = styled.div`
//     width: 400px;
//     height: 450px;
//     background: #282D27;
//     background-image: url(${ProfileImg});
//     background-size: cover;
//     background-repeat: no-repeat;
//     background-position: center; 
//     display: flex;
//     align-items: flex-end;
//     justify-content: center;
//     flex-direction: column;
//     margin-top: 50px;
//     @media screen and (max-width: 780px) {
//         display: none;
//   }
// `;

export default Vision;