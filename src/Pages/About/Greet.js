import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import {Link} from 'react-router-dom';

import {PageWrapper} from '../../components/PageStyle';
import BackgroundImg from '../../assets/aboutbackground.png';
import {PageTitleWrpper, PageTitle, PageBlockWrapper } from '../../components/PageStyle';
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
                    <SelectNavBlock>ceo인사말</SelectNavBlock>
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
                    <NavBlock>조직도</NavBlock>
                    </Link>
                </NavBarWrapper>
            </MainImg>
            <PageTitleWrpper>
                <PageTitle>CEO 인사말</PageTitle>
            </PageTitleWrpper>
            <PageBlockWrapper>
                <HelloWrapper>
                    <ProfileWrapper>
                        <Hello>
                        안녕하십니까?<br/>                    
                        (주)에스지티 대표이사 김곤 입니다.
                        </Hello>
                        <Profile/>
                    </ProfileWrapper>
                    <Descrip>
                        고효율 태양광 셀과 고출력 태양광 모듈 신기술을 상용화 함으로써 무한한 청정 에너지를 이용하여 경제성 있는 무공해 전기를 만들어 보급하고 화석 연료의 사용을 감축할 수 있도록 기술개발과 상용화에 매진하고 있습니다.
                            <br/><br/>
                        특히, 국제 기후변화 대응체제인 파리협정이 2016년 11월 4일 발효되었고, 우리나라는 온실가스 배출전망치 대비 37% 감축안을 자발적 감축목표로 제출한 바, 범 부처별로 기후변화 대응전략을 수립하고 태양광을 목표달성을 위한 주요기술로 제시하고 있으며, 태양전지 기술혁신을 통한 이산화탄소 355만톤 감축을 예상하고 있는 등 태양광 발전원의 확대가 불가피하게 요청되고 있습니다.
                            <br/><br/>
                        이러한 글로벌 환경 트렌드 및 국가 정책에 선제적으로 대응함으로써 기술과 시장을 선도하여 지속가능한 경제발전과 환경보호에 앞장서도록 하겠습니다. 국가경쟁력 측면에서는, 반도체와 디스플레이 산업에 이어 태양광 산업에서도 세계를 주도함으로써 새로운 국가성장동력원을 확보할 수 있는 기반을 마련하는데 기여하고자 합니다
                        
                    </Descrip>
                </HelloWrapper>
                <SignWrapper>
                    <Company>(주)에스지티</Company>
                    <Ceo>대표 이사 김곤</Ceo>
                    <Sign/>
                    <Profile2/>
                </SignWrapper>
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

const HelloWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 80vw;
    max-width: 1100px;
    margin: 5vh auto;
    justify-content: space-around;
    @media screen and (max-width: 780px) {
        justify-content: center;
  }
`;

const ProfileWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const Hello = styled.div`
    font-size: 30px;
    @media screen and (max-width: 780px) {
        font-size: 19px;
        text-align: center;
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
    background: #282D27;
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
        width: 60vw;
        height: 80vw;
        max-width: 400px;
        max-height: 450px;
        margin: 0 auto;
        display: flex;
        margin-top: 150px;
        margin-bottom: 30px;
  }
`;

const Descrip = styled.div`
    max-width: 640px;
    font-size: 20px;
    margin-top: 20px;
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
    justify-content: flex-end;
    align-items: center;
    @media screen and (max-width: 780px) {
        justify-content: center;
  }
  `;

const Company = styled.div`
    color: #b3b3b3;
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
    margin-bottom: 20px;
    @media screen and (max-width: 780px) {
    width: 130px;
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
    top: calc(30vh + 56px);
    box-shadow:  0px 3px 6px #d9d9d9;
    @media screen and (max-width: 1312px) {
    width: calc(90vw + 3px);
    height: 80px; 
    flex-wrap: wrap;
    top: calc(30vh + 42px); 
    }
    @media screen and (max-width: 1024px) {
        width: calc(90vw + 3px);
        top: calc(23vh); 
    }
`;

const NavBlock = styled.div`
    width: 10vw;
    height: 58px;
    border-left: 1px solid #D9D9D9;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
    border-bottom: 1px solid #D9D9D9;
    @media screen and (max-width: 1312px) {
    width: 30vw;
    height: 40px; 
    }
`;

const SelectNavBlock = styled(NavBlock)`
    background: #930E14;
    color: #fff;
    border-left: 1px solid #930E14;
`;

export default Greet;