import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import {Link} from 'react-router-dom';

import {PageWrapper} from '../../components/PageStyle';
import BackgroundImg from '../../assets/prbackground.png';
import {PageTitleWrpper, PageTitle, SubTitle2} from '../../components/PageStyle';
import styled from '@emotion/styled';
import NewsImg1 from '../../assets/newscard1.png';
import NewsImg2 from '../../assets/newscard2.png';
import NewsImg3 from '../../assets/newscard3.png';

const News = () => {
    return (
        <PageWrapper>
            <Header/>
            <MainImg>
                홍보센터
                <NavBarWrapper>
                    <Link to="/news" style={{textDecoration: 'none', color: "#000"}}>
                        <SelectNavBlock>뉴스</SelectNavBlock>
                    </Link>
                    <Link to="/catalogue" style={{textDecoration: 'none', color: "#000"}}>
                        <NavBlock>E-카탈로그</NavBlock>
                    </Link>
                </NavBarWrapper>
            </MainImg>
            <PageTitleWrpper>
                <PageTitle>뉴스</PageTitle>
                <SubTitle2>
                고효율 태양광 셀과 고출력 태양광 모듈 신기술을 상용화 함으로써<br/>
                화석 연료의 사용을 감축할 수 있도록 기술개발과 상용화에 매진하고 있습니다.
                </SubTitle2>
            </PageTitleWrpper>
            <NewsCardWrapper>
                    <NewsCardBlock>
                        <NewsImg></NewsImg>
                        <Line/>
                        <NewsContentWrapper>
                        <NewsContentTitle>산업통상자원부 사업 재편 기업 승인</NewsContentTitle>
                        <NewsContent>(주)에스지티가 2021년 산업통상자원부 사업 재편 기업승인을 받았습니다. 향후 5년간 미래차, 유망신산업 분야에 투자하여 수익성을 개선하고 혁신이 가속화 될 것으로 기대됩니다.(주)에스지티가 2021년 산업통상자원부 사업 재편 기업승인을 받았습니다. 향후 5년간 …</NewsContent>
                        </NewsContentWrapper>
                    </NewsCardBlock>
                    <NewsCardBlock>
                        <News2/>
                        <Line/>
                        <NewsContentWrapper>
                        <NewsContentTitle>산업통상자원부 사업 재편 기업 승인</NewsContentTitle>
                        <NewsContent>(주)에스지티가 2021년 산업통상자원부 사업 재편 기업승인을 받았습니다. 향후 5년간 미래차, 유망신산업 분야에 투자하여 수익성을 개선하고 혁신이 가속화 될 것으로 기대됩니다.(주)에스지티가 2021년 산업통상자원부 사업 재편 기업승인을 받았습니다. 향후 5년간 …</NewsContent>
                        </NewsContentWrapper>
                    </NewsCardBlock>
                    <NewsCardBlock>
                        <News3/>
                        <Line/>
                        <NewsContentWrapper>
                        <NewsContentTitle>산업통상자원부 사업 재편 기업 승인</NewsContentTitle>
                        <NewsContent>(주)에스지티가 2021년 산업통상자원부 사업 재편 기업승인을 받았습니다. 향후 5년간 미래차, 유망신산업 분야에 투자하여 수익성을 개선하고 혁신이 가속화 될 것으로 기대됩니다.(주)에스지티가 2021년 산업통상자원부 사업 재편 기업승인을 받았습니다. 향후 5년간 …</NewsContent>
                        </NewsContentWrapper>
                    </NewsCardBlock>
                </NewsCardWrapper>
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
    border-bottom: 1px solid #D9D9D9;
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

const NewsCardWrapper = styled.div`
    display: flex;
    width: 90vw;
    max-width: 1088px;
    margin: 0 auto;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 10vh 0;
    @media screen and (max-width: 880px) {
        justify-content: space-around;
        padding: 0;
        margin-bottom: 10vh;
  }
`;
 
const NewsCardBlock = styled.div`
    max-width: 350px;
    border: 1px solid #D8D8D8;
    margin-top: 5vh;
`;

const NewsImg = styled.div`
    min-height: 198px;
    max-width: 350px;
    background: #fff;
    background-image: url(${NewsImg1});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center; 
    display: flex;
    align-items: center;
    flex-direction: column;
    @media screen and (max-width: 840px) {
        width: 90vw;
  }
  `;

const News2 = styled(NewsImg)`
  background-image: url(${NewsImg2});
`;

const News3 = styled(NewsImg)`
  background-image: url(${NewsImg3});
`;

const Line = styled.div`
    min-height: 5px;
    width: 90vw;
    max-width: 350px;
    background: #98272B;
    @media screen and (max-width: 840px) {
        width: 90vw;
  }
`;

const NewsContentWrapper = styled.div`
    width: 60vw;
    max-width: 305px;
    margin: 0 auto;
    padding: 30px 0;
`;

const NewsContentTitle = styled.div`
    font-size: 18px;
`;

const NewsContent = styled.div`
    margin-top: 25px;
    display: flex;
    flex-wrap: wrap;
    font-size: 14px;
    max-width: 305px;
`;

export default News;