import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import {Link} from 'react-router-dom';

import {PageWrapper} from '../../components/PageStyle';
import BackgroundImg from '../../assets/aboutbackground.png';
import {PageTitleWrpper, PageTitle, PageBlockWrapper, Line } from '../../components/PageStyle';
import styled from '@emotion/styled';
import ProfileImg from '../../assets/profile.png';
import SignImg from '../../assets/sign.png';

const Greet = () => {
    return (
        <PageWrapper>
            <Header/>
            <MainImg>
                회사소개
                <NavBarWrapper>
                <Link to="/greet" style={{textDecoration: 'none', color: "#000"}}>
                    <SelectNavBlock>인사말</SelectNavBlock>
                    <Line/>
                    </Link>
                    <Link to="/vision" style={{textDecoration: 'none', color: "#000"}}>
                        <NavBlock>경영이념</NavBlock>
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
                <PageTitle>인사말</PageTitle>
            </PageTitleWrpper>
            <PageBlockWrapper>
                <HelloWrapper>
                        <Hello>
                        안녕하십니까?<br/>                    
                        (주)에스지티 대표이사 김곤 입니다.
                        </Hello>
                    <ProfileWrapper>
                    <Profile/>
                    <Descrip>
                        숨겨진 가치를 찾는 기업, 고객이 신뢰하는 기업
                        <br/><br/>
                        ㈜ 에스지티는 반도체/디스플레이에서 이차전지분야까지 최첨단 산업에
                        대응하기 위해 혁신적 기술을 바탕으로 고객만족을  추구하고자 노력하고
                        있습니다. 
                        <br/><br/>
                        본사는 2016년 창립 이래 정밀부품가공을 주요 사업으로 현재 이차전지 패키징 분야로의 도약을 추진하고 있으며, 우수한 인재와 혁신 기술개발에 대한 지속적인 투자를 진행하여 지속적인 성장을 이루어 왔습니다. 
                        <br/><br/>
                        앞으로도 지속적인 기술개발과 가치 투자를 진행하여 본사가 추구하는 숨겨진 가치를 찾으며, 고객이 신뢰하는 기업으로 인정받으며 보다 나은 미래 가치를 찾기 위하여 항상 발전하는 (주)에스지티가 되도록 최선을 다하겠습니다. 
                    </Descrip>
                    </ProfileWrapper>
                </HelloWrapper>
                <Profile2/>
                <SignWrapper>
                    <Company>(주)에스지티</Company>
                    <Ceo>대표이사 김곤</Ceo>
                    <Sign/>
                </SignWrapper>
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

const HelloWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 90vw;
    max-width: 1100px;
    margin: 5vh auto;
    justify-content: space-between;
    @media screen and (max-width: 780px) {
        justify-content: center;
  }
`;

const ProfileWrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-around;
    flex-wrap: wrap;
`;

const Hello = styled.div`
    width: 100%;
    font-size: 30px;
    margin-left: 15px;
    @media screen and (max-width: 780px) {
        text-align: center;
        font-size: 19px;
  }
`;

const Profile = styled.div`
    width: 400px;
    height: 450px;
    background: #282D27;
    background-image: url(${ProfileImg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center; 
    display: flex;
    align-items: flex-end;
    justify-content: center;
    flex-direction: column;
    margin-top: 50px;
    @media screen and (max-width: 780px) {
        display: none;
  }
`;

const Profile2 = styled.div`
    background-image: url(${ProfileImg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center; 
    display: flex;
    align-items: flex-end;
    justify-content: center;
    flex-direction: column;
    display: none;
    @media screen and (max-width: 780px) {
        width: 95vw;
        height: 60vw;
        margin: 0 auto;
        display: flex;
        margin-top: 150px;
  }
`;

const Descrip = styled.div`
    max-width: 640px;
    font-size: 20px;
    margin-top: 50px;
    line-height: 32px;
    @media screen and (max-width: 780px) {
        font-size: 16px;
  }
`;

const SignWrapper = styled.div`
    display: flex;
    flex-wrap: wrap-reverse;
    width: 80vw;
    max-width: 1088px;
    margin: 10vh auto;
    margin-top: 0;
    justify-content: flex-end;
    align-items: center;
    @media screen and (max-width: 780px) {
        justify-content: center;
        margin: 10vh auto 20vh auto;
  }
  `;
  
const Company = styled.div`

`;

const Ceo = styled.div`
    margin-left: 10px;
`;

const Sign = styled.div`
    width: 177px;
    height: 106px;
    background-image: url(${SignImg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center; 
    display: flex;
    align-items: flex-end;
    justify-content: center;
    flex-direction: column;
    @media screen and (max-width: 780px) {
    width: 100px;
    height: 78px;  
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
    @media screen and (max-width: 1312px) {
    height: 80px; 
    flex-wrap: wrap;
    top: calc(25vh + 42px); 
    }
    @media screen and (max-width: 1024px) {
        width: calc(90vw + 2px);
        top: calc(23vh); 
    }
`;

const NavBlock = styled.div`
    width: 15vw;
    height: 58px;
    border-left: 1px solid #D9D9D9;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
    @media screen and (max-width: 1312px) {
    width: calc(30vw - 1px);
    height: 40px; 
    }
    @media screen and (max-width: 1024px) {
        width: 45vw;
    }
`;

const SelectNavBlock = styled(NavBlock)`
    background: #930E14;
    color: #fff;
    border-left: 1px solid #930E14;
`;

export default Greet;