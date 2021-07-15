import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import {Link} from 'react-router-dom';

import {PageWrapper} from '../../components/PageStyle';
import BackgroundImg from '../../assets/facilitybackground.png';
import {PageTitleWrpper, PageTitle, SubTitle2 } from '../../components/PageStyle';
import styled from '@emotion/styled';

const measure = () => {
    return (
        <PageWrapper>
            <Header/>
            <MainImg>
                설비현황
                <NavBarWrapper>
                    <Link to="/processing" style={{textDecoration: 'none', color: "#000"}}>
                        <NavBlock>가공 설비</NavBlock>
                    </Link>
                    <Link to="/measure" style={{textDecoration: 'none', color: "#000"}}>
                        <SelectNavBlock>측정 설비</SelectNavBlock>
                    </Link>
                    <Link to="/production" style={{textDecoration: 'none', color: "#000"}}>
                        <NavBlock>생산 설비</NavBlock>
                    </Link>
                </NavBarWrapper>
            </MainImg>
            <PageTitleWrpper>
                <PageTitle>측정 설비</PageTitle>
                <SubTitle2>
                고효율 태양광 셀과 고출력 태양광 모듈 신기술을 상용화 함으로써<br/>
                화석 연료의 사용을 감축할 수 있도록 기술개발과 상용화에 매진하고 있습니다.
                </SubTitle2>
            </PageTitleWrpper>
            <BarkWrapper>
                <Bar>하이트 게이지</Bar>
                <Blockwrapper>
                    <RemarkWrapper>
                        <Block></Block>
                        <Remark>제조사 : 두산</Remark>
                        <Remark>규격 : DNM 5700 [6호기]</Remark>
                        <Remark>보유 현황 : 1대</Remark>
                    </RemarkWrapper>
                    <RemarkWrapper>
                        <Block></Block>
                        <Remark>제조사 : 두산</Remark>
                        <Remark>규격 : DNM 750L [7.5호기]</Remark>
                        <Remark>보유 현황 : 21</Remark>
                    </RemarkWrapper>
                </Blockwrapper>
                <Bar>3차원 좌표 측정기</Bar>
                <Blockwrapper>
                    <RemarkWrapper>
                        <Block></Block>
                        <Remark>제조사 : 한화</Remark>
                        <Remark>규격 : XD38II</Remark>
                        <Remark>보유 현황 : 1대</Remark>
                    </RemarkWrapper>
                </Blockwrapper>
                <Bar>기타 계측 장치</Bar>
                <Blockwrapper>
                    <MeasuringDeviceWrapper>
                        <DeviceWrapper>
                            <Device></Device>
                            <Device style={{border: 'none'}}></Device>
                        </DeviceWrapper>
                        <Table>
                            <Tr>
                                <Td>품목</Td>
                                <Td>규격</Td>
                                <Td>제조사</Td>
                                <Td>수량</Td>
                            </Tr>
                            <Tr>
                                <Td>버니어 켈리퍼스</Td>
                                <Td>0~300 등</Td>
                                <Td>Mitutoyo</Td>
                                <Td>9</Td>
                            </Tr>
                            <Tr>
                                <Td>디지털 마이크로미터</Td>
                                <Td>0~25 등</Td>
                                <Td>Mitutoyo</Td>
                                <Td>4</Td>
                            </Tr>
                            <Tr>
                                <Td>아날로그 마이크로미터</Td>
                                <Td>0~25mm 등</Td>
                                <Td>Mitutoyo</Td>
                                <Td>4</Td>
                            </Tr>
                            <Tr>
                                <Td>다이얼 인디게이터</Td>
                                <Td>0.8mm 등</Td>
                                <Td>Mitutoyo</Td>
                                <Td>4</Td>
                            </Tr>
                            <Tr>
                                <Td>핀 게이지 SET</Td>
                                <Td>1.99-12.01 등</Td>
                                <Td>Mitutoyo</Td>
                                <Td>3</Td>
                            </Tr>
                            <Tr>
                                <Td>블록 게이지 SET</Td>
                                <Td>1.005-100mm</Td>
                                <Td>Mitutoyo</Td>
                                <Td>1</Td>
                            </Tr>
                            <Tr>
                                <Td>겝 게이지</Td>
                                <Td>‘0.03mm-1mm</Td>
                                <Td>Mitutoyo</Td>
                                <Td>1</Td>
                            </Tr>
                            <Tr>
                                <Td>나사 피치 게이지</Td>
                                <Td>‘0.35mm-6mm</Td>
                                <Td>Mitutoyo</Td>
                                <Td>1</Td>
                            </Tr>
                            <Tr>
                                <Td>R 게이지</Td>
                                <Td>1-7mm</Td>
                                <Td>Mitutoyo</Td>
                                <Td>1</Td>
                            </Tr>
                            <Tr>
                                <Td>석정반</Td>
                                <Td>1500*2000</Td>
                                <Td>유일</Td>
                                <Td>2</Td>
                            </Tr>
                            <Tr>
                                <Td>표면 조도 측정기</Td>
                                <Td>360/5.6mm</Td>
                                <Td>Mitutoyo</Td>
                                <Td>1</Td>
                            </Tr>
                            <Tr>
                                <Td>저항 측정기</Td>
                                <Td>10^3-10^13</Td>
                                <Td>TREK</Td>
                                <Td>1</Td>
                            </Tr>
                        </Table>
                    </MeasuringDeviceWrapper>
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
    width: 20vw;
    height: 58px;
    border-left: 1px solid #D9D9D9;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
    border-bottom: 1px solid #D9D9D9;
    @media screen and (max-width: 1024px) {
    width: 30vw;
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
    justify-content: center;
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
    margin-right: 7.5px;
    @media screen and (max-width: 1220px) {
        margin: 0;
        margin-bottom: 5vh;
  }
`;

const MeasuringDeviceWrapper = styled.div`
    width: 1088px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    @media screen and (max-width: 1220px) {
        margin: 0;
        margin-bottom: 5vh;
  }
`;

const DeviceWrapper = styled.div`
    border: 1px solid #D0D0D0;
    width: 353px;
    height: 636px;
    @media screen and (max-width: 1220px) {
    width: 90vw;
    max-width: 360px;
    height: 633px;
  }
`;

const Device = styled.div`
    width: 100%;
    height: 50%;
    border-bottom: 1px solid #D0D0D0;
    @media screen and (max-width: 1220px) {
    width: 90vw;
    max-width: 360px;
    height: 316px;
  }
`;

const Table = styled.table`
    text-align: center;
    border: 1px solid #d0d0d0;
    border-collapse:collapse;
    @media screen and (max-width: 902px) {
        margin-top: 5vh;

    }
    @media screen and (max-width: 780px) {
    width: 90vw;
    max-width: 360px;
    height: 316px;
  }
`;

const Tr = styled.tr`
    padding: 0 45px;
    border: 1px solid #d0d0d0;
    @media screen and (max-width: 1184px) {
        padding: 0 2vw;
        max-width: 160px;
        font-size: 14px;
  }
    @media screen and (max-width: 902px) {
            padding: 2vw;
            max-width: 160px;
            font-size: 14px;
    }
    @media screen and (max-width: 780px) {
        padding: 0 ;
        font-size: 8px;
  }
`;

const Td = styled.td`
    padding: 0 45px;
    border: 1px solid #d0d0d0;
    @media screen and (max-width: 1184px) {
        padding: 0 2vw;
        max-width: 160px;
        font-size: 14px;
  }
  @media screen and (max-width: 902px) {
            padding: 2vw;
            max-width: 160px;
            font-size: 14px;
    }
    @media screen and (max-width: 780px) {
        padding: 0 ;
        font-size: 8px;
  }
`;

export default measure;