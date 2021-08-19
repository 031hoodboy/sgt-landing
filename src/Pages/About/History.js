import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import {Link} from 'react-router-dom';

import {PageWrapper} from '../../components/PageStyle';
import BackgroundImg from '../../assets/aboutbackground.png';
import {PageTitleWrpper, PageBlockWrapper, PageTitle, NavBarWrapper, NavBlock, SelectNavBlock, Line } from '../../components/PageStyle';
import styled from '@emotion/styled';
import './History.css';

const History = () => {
    return (
        <PageWrapper>
            <Header/>
            <MainImg>
                회사소개
                <NavBarWrapper>
                <Link to="/greet" style={{textDecoration: 'none', color: "#000"}}>
                    <NavBlock>인사말</NavBlock>
                    <Line/>
                    </Link>
                    <Link to="/vision" style={{textDecoration: 'none', color: "#000"}}>
                        <NavBlock>경영이념</NavBlock>
                        <Line/>
                    </Link>
                    <Link to="/history" style={{textDecoration: 'none', color: "#000"}}>
                        <SelectNavBlock>연혁</SelectNavBlock>
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
                <PageTitle>연혁</PageTitle>
            </PageTitleWrpper>
            <PageBlockWrapper>
                <div id="timeline-content">
                    <ul class="timeline">
                        <li class="event" data-date="2021">
                            <P>• 산업통상자원부 사업 재편 기업 승인</P> 
                            <P>- 미래차 분야</P>    
                            <br/>
                            <P>• 이차전지용 셀파우치필름 사업 투자 유치</P>    
                            <br/>
                            <P>• 이차전지용 셀파우치필름 양산 설비 도입</P>       
                        </li>
                        <li class="event" id="date" data-date="2020">
                            <P>• INNO-BIZ 인증 취득</P>
                            <P>- 연계 지원사업 수행</P>
                            <br/>
                            <P>• 이차전지 소재사업부 신설</P>
                            <br/>
                            <P>•  셀파우치필름용 접착제 전용 실시권 등록</P>
                        </li>
                        <li class="event" data-date="2019">
                            <P>• 정부지원 기술개발 사업 수행 : 3건</P>
                            <P>- 중기주, 창진원 등</P>
                            <br/>
                            <P>• 동결건조관련 기술 특허 등록 : 1건</P>
                        </li>
                        <li class="event" id="date" data-date="2018">
                            <P>• 본사 이전</P>
                            <P>- 충남 천안시 서북구 직산읍 모시1길 8</P>
                            <br/>
                            <P>• 정부지원 R&D 과제(산학연협력사업) 1건</P>
                            <br/>
                            <P>• 디스플레이 검사장비 제작</P>
                        </li>
                        <li class="event" id="date" data-date="2017">
                            <P>• 벤처기업 등록</P>
                            <br/>
                            <P>• 동결 건조기 개발 및 특허 출원 2건</P>
                            <br/>
                            <P>• ISO9001 인증</P>
                        </li>
                        <li class="event" id="date" data-date="2016">
                            <P>• 4월 (주)에스지티[SGT]창립 [자본 1억]</P>
                            <br/>
                            <P>• 기업 부설 연구소 인증</P>
                            <br/>
                            <P>• SFA(주) 협력업체 등록</P>
                        </li>
                        
                    </ul>
                </div>
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

const P = styled.p`
    font-weight: 400;
`;

export default History;