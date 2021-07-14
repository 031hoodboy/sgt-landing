import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import {Link} from 'react-router-dom';

import {PageWrapper} from '../../components/PageStyle';
import BackgroundImg from '../../assets/aboutbackground.png';
import {PageTitleWrpper, PageBlockWrapper, PageTitle, NavBarWrapper, NavBlock, SelectNavBlock, PageSubTitle } from '../../components/PageStyle';
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
                        <NavBlock>ceo인사말</NavBlock>
                    </Link>
                    <Link to="/vision" style={{textDecoration: 'none', color: "#000"}}>
                        <NavBlock>비전</NavBlock>
                    </Link>
                    <Link to="/history" style={{textDecoration: 'none', color: "#000"}}>
                        <SelectNavBlock>연혁</SelectNavBlock>
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
                <PageTitle>연혁</PageTitle>
                <PageSubTitle>더 나은 세상을 만들어가는 일,<br/>글로벌 바이오제약 기업 메디톡스가 먼저 시작합니다.</PageSubTitle>

            </PageTitleWrpper>
            <PageBlockWrapper>
                <div id="timeline-content">
                    <ul class="timeline">
                        <li class="event" data-date="2022&emsp;~2026">
                            <p>• 2차전지용 셀파우치필름 생산동 신축</p>
                            <p>- 600평 규모</p>
                            <p>- 연간생산 24,000m2</p>
                            <br/>
                            <p>•  매출 1,300억</p>
                            <p> - 소재사업부 : 1,200억</p>
                            <p> - 가공사업부 : 100억</p>
                            <br/>
                            <p>• IPO : 기술 상장</p>

                        </li>
                        <li class="event" data-date="2021">
                            <p>• 산업통상자원부 사업 재편 기업 승인</p> 
                            <p>- 미래차 분야</p>    
                            <br/>
                            <p>• 2차전지용 셀파우치필름 사업 투자 유치</p>    
                            <br/>
                            <p>• 2차전지용 셀파우치필름 양산 설비 도입</p>    
                            <p>- 검증 : 현대M, SKI, 삼성SDI, KOKAM 및 중국</p>    
                            <br/>
                            <p>• 셀파우치필름 수출</p>    
                        </li>
                        <li class="event" id="date" data-date="2020">
                            <p>• INNO-BIZ 인증 취득</p>
                            <p>- 연계 지원사업 수행</p>
                            <br/>
                            <p>• 2차전지 소재사업부 신설</p>
                            <br/>
                            <p>•  셀파우치필름용 접착제 전용 실시권 등록</p>
                        </li>
                        <li class="event" data-date="2019">
                            <p>• 정부지원 기술개발 사업 수행 : 3건</p>
                            <p>- 중기주, 창진원 등</p>
                            <br/>
                            <p>• 동결건조관련 기술 특허 등록 : 1건</p>
                        </li>
                        <li class="event" id="date" data-date="2018&emsp;~2017">
                            <p>• 벤처기업 등록</p>
                            <br/>
                            <p>• 특허 출원 2건</p>
                            <br/>
                            <p>• 본사 이전</p>
                            <p>- 대지 2,400평</p>
                            <p>- 건축 500평</p>
                            <br/>
                            <p>• ISO9001 인증</p>
                        </li>
                        <li class="event" id="date" data-date="2016">
                            <p>• 4월 (주)에스지티[SGT]창립 [자본 1억]</p>
                            <br/>
                            <p>• 기업 부설 연구소 인증</p>
                            <br/>
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

export default History;