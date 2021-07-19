import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import {Link} from 'react-router-dom';

import {PageWrapper} from '../../components/PageStyle';
import BackgroundImg from '../../assets/technologybackground.png';
import {PageTitleWrpper, PageTitle, SubTitle2, SubTitle3 } from '../../components/PageStyle';
import styled from '@emotion/styled';

const Introduce = () => {
    return (
        <PageWrapper>
            <Header/>
            <MainImg>
                설비현황
                <NavBarWrapper>
                    <Link to="/introduce" style={{textDecoration: 'none', color: "#000"}}>
                        <SelectNavBlock>연구소 소개</SelectNavBlock>
                    </Link>
                    <Link to="/patent" style={{textDecoration: 'none', color: "#000"}}>
                        <NavBlock>특허 및 인증</NavBlock>
                    </Link>
                </NavBarWrapper>
            </MainImg>
            <PageTitleWrpper>
                <PageTitle>연구소 소개</PageTitle>
                <SubTitle2>
                고효율 태양광 셀과 고출력 태양광 모듈 신기술을 상용화 함으로써<br/>
                화석 연료의 사용을 감축할 수 있도록 기술개발과 상용화에 매진하고 있습니다.
                </SubTitle2>
                <SubTitle3>
                연구분야 : 수분 동결 건조 기술, 마이크로파 건조 기술, 소재 내후성 테스트 기술, 반도체 검사 장비 관리, 전밀 부품 가공 기술, 필름소재 관련 기술
                </SubTitle3>
            </PageTitleWrpper>
            <BarkWrapper>
                <Bar>동결 건조 기술</Bar>
                <Blockwrapper>
                    <RemarkWrapper>
                        <Block></Block>
                        <Remark>동결 건조 DEMO 장비 개발</Remark>
                    </RemarkWrapper>
                    <BlockContent>
                        <Contnet>
                            • 개발목적<br/>
                            - 건조 시료의 수분 함유율 최소화 장비 사양<br/>
                        </Contnet>
                        <br/><br/>
                        <Contnet>
                            • 장비 특징<br/>
                            - 시료 수분 함유율 1% 건조 [기존장비 3~5%]<br/>
                            - 규격 및 용량  : 1,400[W] x 1,400[D] x 1,700[H], 20L급 [6단 선반]<br/>
                        </Contnet>
                        <br/><br/>
                        <Contnet>
                            • 장비 사용 용도<br/>
                            - 식품 및 제약 등 바이오 산업 분야 시료 건조<br/>
                            - 반도체/디스플레이 고분자 소재 건조<br/>
                        </Contnet>
                    </BlockContent>
                </Blockwrapper>
                <Blockwrapper>
                    <RemarkWrapper>
                        <Block></Block>
                        <Remark>실시간 수분 측정 장치 개발</Remark>
                    </RemarkWrapper>
                    <BlockContent>
                        <Contnet>
                            • 개발목적<br/>
                            - 건조장치 내부 수분 함유량 실시간 측정 및 제어<br/>
                        </Contnet>
                        <br/><br/>
                        <Contnet>
                            • 장비 특징<br/>
                            - Camber 내부 온도 -50℃~+60℃ 제어<br/>
                            - 규격 및 용량 : 800[W] x 800[D] x 1,600[H], 4L급 [2단 선반]<br/>
                        </Contnet>
                        <br/><br/>
                        <Contnet>
                            • 장비 사용 용도<br/>
                            - 건조 시료별 수분 함유량 분석 및 최적 레시피 제작<br/>
                            - 식품, 제약 등 바이오산업 및 소재 산업 수분 제어 기술 활용<br/>
                        </Contnet>
                    </BlockContent>
                </Blockwrapper>
                <Bar>금속 플레이트 및 부품 측면 홀/탭 가공</Bar>
                <Blockwrapper>
                    <RemarkWrapper>
                        <Block></Block>
                        <Remark>동결 건조 DEMO 장비 개발</Remark>
                    </RemarkWrapper>
                    <BlockContent>
                        <Contnet>
                            • 개발목적<br/>
                            - 금속소재부품 측면 가공 효율성 및 생산성 향상<br/>
                        </Contnet>
                        <br/><br/>
                        <Contnet>
                            • 장비 특징<br/>
                            - 규격 : 2,400[W] x 1,650[D] x 1,800[H]<br/>
                            - 작업범위 : Max. 1,500[W] x 800[D] x 20[T]<br/>
                            - DRILLING 최대 ~ 13, TAPPING 최대 ~ M12<br/>
                            - CHUK : BT30, SPINDLE : 9,000 Rpm<br/>
                        </Contnet>
                        <br/><br/>
                        <Contnet>
                            • 장비 사용 용도<br/>
                            - 반도체/디스플레이 장비 부품 측면 홀 및 탭 정밀 가공<br/>
                            - 산업자동화 및 물류 장비 대형 플레이트 측면 가공<br/>
                        </Contnet>
                    </BlockContent>
                </Blockwrapper>
            </BarkWrapper>
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

const Bar = styled.div`
    width: 1048px;
    height: 52px;
    padding: 0 20px;
    background: #F2F2F2;
    margin: 10vh auto 5vh auto;
    color: #930E14;
    display: flex;
    align-items: center;
    @media screen and (max-width: 1024px) {
        width: calc(90vw - 40px);
        height: 2vh;
        min-height: 30px;
        margin: 5vh 0;
        font-size: 16px;
  }
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
    justify-content: space-between;
    margin: 5vh auto 10vh auto;
    @media screen and (max-width: 1220px) {
        width: 90vw;
        justify-content: space-around;
  }
`;

const Block = styled.div`
    border-bottom: 1px solid #D0D0D0;
    width: 353px;
    height: 350px;
    margin-bottom: 15px;
    @media screen and (max-width: 1220px) {
    width: 90vw;
    max-width: 360px;
    height: 316px;
  }
`;

const Remark = styled.div`
    font-size: 18px;
    padding: 5px 20px;
`;

const RemarkWrapper = styled.div`
    border: 1px solid #DBDBDB;
    padding-bottom: 15px;
    margin-bottom: 5vh;
`;

const BlockContent = styled.div`
    width: 594px;
    margin-bottom: 15px;
    @media screen and (max-width: 1220px) {
    width: 90vw;
    max-width: 360px;
    height: 316px;
  }
`;

const Contnet = styled.div`
    font-size: 20px;
    line-height: 32px;
    @media screen and (max-width: 780px) {
        font-size: 16px;
  }
`;

export default Introduce;