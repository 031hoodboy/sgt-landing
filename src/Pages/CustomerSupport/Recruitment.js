import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import {Link} from 'react-router-dom';

import {PageWrapper} from '../../components/PageStyle';
import BackgroundImg from '../../assets/customersupportbackground.png';
import {PageTitleWrpper, PageTitle, SubTitle2 } from '../../components/PageStyle';
import styled from '@emotion/styled';
import RecruitmentImg from '../../assets/recruitment.png';

const Recruitment = () => {
    return (
        <PageWrapper>
            <Header/>
            <MainImg>
                고객지원
                <NavBarWrapper>
                    <Link to="/quote-contact" style={{textDecoration: 'none', color: "#000"}}>
                        <NavBlock>견적문의</NavBlock>
                    </Link>
                    <Link to="/recruitment" style={{textDecoration: 'none', color: "#000"}}>
                        <SelectNavBlock>채용안내</SelectNavBlock>
                    </Link>
                </NavBarWrapper>
            </MainImg>
            <PageTitleWrpper>
                <PageTitle>채용안내</PageTitle>
                <SubTitle2>
                </SubTitle2>
            </PageTitleWrpper>
            <BarkWrapper>
                <Blockwrapper>
                    <Block/>
                </Blockwrapper>
            </BarkWrapper>
            <Button>지원하기</Button>
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
    width: 30vw;
    height: 58px;
    border-left: 1px solid #D9D9D9;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
    @media screen and (max-width: 1024px) {
    width: 45vw;
    height: 40px; 
    font-size: 14px;
    }
`;

const SelectNavBlock = styled(NavBlock)`
    background: #930E14;
    color: #fff;
    border-left: 1px solid #930E14;
`;

const BarkWrapper = styled.div`
    @media screen and (max-width: 1024px) {
        width: 90vw;
        margin: 0 auto 0 auto;
  }
`;

const Blockwrapper = styled.div`
    width: 1088px;
    display: flex;
    flex-wrap: wrap;
    margin: 5vh auto 5vh auto;
    justify-content: space-around;
    @media screen and (max-width: 1220px) {
        width: 90vw;
        justify-content: space-around;
  }
`;

const Block = styled.div`
    width: 812px;
    height: 285px;
    margin-bottom: 15px;
    border: 1px solid #DBDBDB;
    background-image: url(${RecruitmentImg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center; 
  @media screen and (max-width: 780px) {
    width: 90vw;
    height: 67vw;
    background-position: 80% 80%; 

  }
`;

const Button = styled.div`
    margin: 0 auto;
    width: 260px;
    height: 60px;
    border: 1px solid #930E14;
    color: #930E14;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10vh;
    cursor: pointer;
    @media screen and (max-width: 780px) {
    width: 171px;
    height: 60px;
  }
`;

export default Recruitment;