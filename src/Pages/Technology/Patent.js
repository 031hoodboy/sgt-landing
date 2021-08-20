import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import {Link} from 'react-router-dom';

import {PageWrapper} from '../../components/PageStyle';
import BackgroundImg from '../../assets/technologybackground.png';
import {PageTitleWrpper, PageTitle } from '../../components/PageStyle';
import styled from '@emotion/styled';
import PatentImg1 from '../../assets/patentimg1.png';
import PatentImg2 from '../../assets/patentimg3.png';
import PatentImg4 from '../../assets/patentimg2.png';
import PatentImg3 from '../../assets/patentimg4.png';
import PatentImg5 from '../../assets/patentimg5.png';
import PatentImg6 from '../../assets/patentimg6.png';

const Patent = () => {
    return (
        <PageWrapper>
            <Header/>
            <MainImg>
                기술현황
                <NavBarWrapper>
                    <Link to="/introduce" style={{textDecoration: 'none', color: "#000"}}>
                        <NavBlock>연구소 소개</NavBlock>
                    </Link>
                    <Link to="/patent" style={{textDecoration: 'none', color: "#000"}}>
                        <SelectNavBlock>특허 및 인증</SelectNavBlock>
                    </Link>
                </NavBarWrapper>
            </MainImg>
            <PageTitleWrpper>
                <PageTitle>특허 및 인증</PageTitle>
            </PageTitleWrpper>
            <BarkWrapper>
                <Blockwrapper>
                    <RemarkWrapper>
                        <Remark>기업부설연구소 인정</Remark>
                        <Block/>
                    </RemarkWrapper>
                    <RemarkWrapper>
                        <Remark>ISO 9001 품질경영인증</Remark>
                        <Block2/>
                    </RemarkWrapper>
                    <RemarkWrapper>
                        <Remark>INNO-Biz 인증</Remark>
                        <Block3/>
                    </RemarkWrapper>
                    <RemarkWrapper>
                        <Remark>기업재편 기업 승인</Remark>
                        <Block4/>
                    </RemarkWrapper>
                    <RemarkWrapper>
                        <Remark>특허증</Remark>
                        <Block5/>
                    </RemarkWrapper>
                    <RemarkWrapper>
                        <Remark>특허증</Remark>
                        <Block6/>
                    </RemarkWrapper>
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
    margin-bottom: 10vh;
    @media screen and (max-width: 1024px) {
        width: 90vw;
        margin: 0 auto 20vh auto;
  }
`;

const Blockwrapper = styled.div`
    width: 1088px;
    display: flex;
    flex-wrap: wrap;
    margin: 10vh auto 10vh auto;
    @media screen and (max-width: 1220px) {
        width: 90vw;
        justify-content: space-around;
  }
`;

const Block = styled.div`
    width: 353px;
    height: 425px;
    margin: 0;
    background-image: url(${PatentImg1});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center; 
    @media screen and (max-width: 780px) {
    width: 42vw;
    height: 50vw;
  }
`;


const Block2 = styled(Block)`
    background-image: url(${PatentImg2});

`;

const Block3 = styled(Block)`
    background-image: url(${PatentImg3});

`;

const Block4 = styled(Block)`
    background-image: url(${PatentImg4});

`;


const Block5 = styled(Block)`
    background-image: url(${PatentImg5});

`;

const Block6 = styled(Block)`
    background-image: url(${PatentImg6});

`;


const Remark = styled.div`
    font-size: 18px;
    padding: 20px;
    border-bottom: 1px solid #D0D0D0;
    text-align: center;
    @media screen and (max-width: 780px) {
        padding: 1vw 3vw;
        font-size: 3.2vw;
  }
`;

const RemarkWrapper = styled.div`
    border: 1px solid #DBDBDB;
    margin-bottom: 5vh;
    margin-right: 7.5px;
    @media screen and (max-width: 780px) {
        max-width: 42vw;
        font-size: 16px;
  }
`;

export default Patent;