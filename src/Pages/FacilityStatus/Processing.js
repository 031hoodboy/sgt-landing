import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import {Link} from 'react-router-dom';

import {PageWrapper} from '../../components/PageStyle';
import BackgroundImg from '../../assets/facilitybackground.png';
import {PageTitleWrpper, PageTitle, Bar } from '../../components/PageStyle';
import styled from '@emotion/styled';
import Machine1 from '../../assets/machine1.png';
import Machine2 from '../../assets/machine2.png';
import Machine3 from '../../assets/machine3.png';
import Machine4 from '../../assets/machine4.png';
import Machine5 from '../../assets/machine5.png';
import Machine6 from '../../assets/machine6.png';
import Machine7 from '../../assets/machine7.png';
import Machine8 from '../../assets/machine8.png';
import Machine9 from '../../assets/machine9.png';
import Machine10 from '../../assets/machine10.png';
import Machine11 from '../../assets/machine11.png';

const Processing = () => {
    return (
        <PageWrapper>
            <Header/>
            <MainImg>
                설비현황
                <NavBarWrapper>
                    <Link to="/processing" style={{textDecoration: 'none', color: "#000"}}>
                        <SelectNavBlock>가공 설비</SelectNavBlock>
                    </Link>
                    <Link to="/measure" style={{textDecoration: 'none', color: "#000"}}>
                        <NavBlock>측정 설비</NavBlock>
                    </Link>
                    <Link to="/production" style={{textDecoration: 'none', color: "#000"}}>
                        <NavBlock>생산 설비</NavBlock>
                    </Link>
                </NavBarWrapper>
            </MainImg>
            <PageTitleWrpper>
                <PageTitle>가공 설비</PageTitle>
            </PageTitleWrpper>
            <BarkWrapper>
                <Bar>Machining Center : 9대</Bar>
                <Blockwrapper>
                    <RemarkWrapper>
                        <Block/>
                        <Remark>제조사 : 두산, 화천기계</Remark>
                        <Remark>규격 : DNM, VASTA (4.5호기)</Remark>
                        <Remark>보유 현황 : 2대</Remark>
                    </RemarkWrapper>
                    <RemarkWrapper>
                        <Block2/>
                        <Remark>제조사 : 두산메카텍</Remark>
                        <Remark>규격 : RAVO 51P (5호기)</Remark>
                        <Remark>보유 현황 : 1대</Remark>
                    </RemarkWrapper>
                    <RemarkWrapper>
                        <Block3/>
                        <Remark>제조사 : 두산, 화천기계</Remark>
                        <Remark>규격 : MYNX, VASTA (5.5호기)</Remark>
                        <Remark>보유 현황 : 4대</Remark>
                    </RemarkWrapper>
                    <RemarkWrapper>
                        <Block4/>
                        <Remark>제조사 : 두산</Remark>
                        <Remark>규격 : DNM 5700 (6호기)</Remark>
                        <Remark>보유 현황 : 2대</Remark>
                    </RemarkWrapper>
                    <RemarkWrapper>
                        <Block5/>
                        <Remark>제조사 : 두산</Remark>
                        <Remark>규격 : DNM 750L (7.5호기)</Remark>
                        <Remark>보유 현황 : 1대</Remark>
                    </RemarkWrapper>
                </Blockwrapper>
                <Bar>CNC : 3대</Bar>
                <Blockwrapper>
                    <RemarkWrapper>
                        <Block6/>
                        <Remark>제조사 : 두산</Remark>
                        <Remark>규격 : PUMA 280LM</Remark>
                        <Remark>보유 현황 : 1대</Remark>
                    </RemarkWrapper>
                    <RemarkWrapper>
                        <Block7/>
                        <Remark>제조사 : 한화</Remark>
                        <Remark>규격 : XD38II</Remark>
                        <Remark>보유 현황 : 1대</Remark>
                    </RemarkWrapper>
                    <RemarkWrapper>
                        <Block8/>
                        <Remark>제조사 : 두산</Remark>
                        <Remark>규격 : PUMA 240B</Remark>
                        <Remark>보유 현황 : 1대</Remark>
                    </RemarkWrapper>
                </Blockwrapper>
                <Bar>기타 가공 장비 : 3대</Bar>
                <Blockwrapper>
                    <RemarkWrapper>
                        <Block9/>
                        <Remark>제조사 : 화천기계</Remark>
                        <Remark>규격 : HMT-1100</Remark>
                        <Remark>보유 현황 : 2대</Remark>
                    </RemarkWrapper>
                    <RemarkWrapper>
                        <Block10/>
                        <Remark>제조사 : 남선기계</Remark>
                        <Remark>규격 : 400-1060</Remark>
                        <Remark>보유 현황 : 1대</Remark>
                    </RemarkWrapper>
                    <RemarkWrapper>
                        <Block11/>
                        <Remark>제조사 : 금광톱기계</Remark>
                        <Remark>규격 : KHA-340</Remark>
                        <Remark>보유 현황 : 1대</Remark>
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
    width: 20vw;
    height: 58px;
    border-left: 1px solid #D9D9D9;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
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
    width: 353px;
    height: 350px;
    margin-bottom: 15px;
    background-image: url(${Machine1});
    background-size: 101%;
    background-repeat: no-repeat;
    background-position: center; 
    border-bottom: 1px solid #DBDBDB;
    @media screen and (max-width: 1220px) {
    width: 90vw;
    max-width: 360px;
    height: 316px;
  }
`;

const Block2 = styled(Block)`
    background-image: url(${Machine2});
`;

const Block3 = styled(Block)`
    background-image: url(${Machine3});
`;

const Block4 = styled(Block)`
    background-image: url(${Machine4});
`;

const Block5 = styled(Block)`
    background-image: url(${Machine5});
`;

const Block6 = styled(Block)`
    background-image: url(${Machine6});
`;

const Block7 = styled(Block)`
    background-image: url(${Machine7});
`;

const Block8 = styled(Block)`
    background-image: url(${Machine8});
`;

const Block9 = styled(Block)`
    background-image: url(${Machine9});
`;

const Block10 = styled(Block)`
    background-image: url(${Machine10});
`;
const Block11 = styled(Block)`
    background-image: url(${Machine11});
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
export default Processing;