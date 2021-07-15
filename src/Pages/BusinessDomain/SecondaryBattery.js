import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import {Link} from 'react-router-dom';

import {PageWrapper} from '../../components/PageStyle';
import BackgroundImg from '../../assets/businessdomainbackground.png';
import {PageTitleWrpper, PageTitle, SubTitle2 } from '../../components/PageStyle';
import styled from '@emotion/styled';

const SecondaryBattery = () => {
    return (
        <PageWrapper>
            <Header/>
            <MainImg>
                사업영역
                <NavBarWrapper>
                    <Link to="/processing-business" style={{textDecoration: 'none', color: "#000"}}>
                        <NavBlock>정밀가공사업</NavBlock>
                    </Link>
                    <Link to="/manufacture" style={{textDecoration: 'none', color: "#000"}}>
                        <NavBlock>장비제조사업</NavBlock>
                    </Link>
                    <Link to="/secondary-battery" style={{textDecoration: 'none', color: "#000"}}>
                        <SelectNavBlock>2차전지소재사업</SelectNavBlock>
                    </Link>
                </NavBarWrapper>
            </MainImg>
            <PageTitleWrpper>
                <PageTitle>2차전지소재사업</PageTitle>
                <SubTitle2>
                    반도체 장비 및 디스플레이 장비
                </SubTitle2>
            </PageTitleWrpper>
            <BarkWrapper>
                <Bar>IT, Mobile Device, 소형 가전용 필름 (Cell Pouch Film)</Bar>
                <Blockwrapper>
                    <RemarkWrapper>
                        <Block1></Block1>
                        <Remark>ALMIDE-113-3L - 3-Layer Structure</Remark>
                    </RemarkWrapper>  
                    <RemarkWrapper>
                        <Block2></Block2>
                        <Remark>ALMIDE-113-3L - 3-Layer SPEC.</Remark>
                    </RemarkWrapper>                
                </Blockwrapper>
                <Blockwrapper>
                    <RemarkWrapper>
                        <Block1></Block1>
                        <Remark>ALMIDE-113-3L - 3-Layer Structure</Remark>
                    </RemarkWrapper>  
                    <RemarkWrapper>
                        <Block2></Block2>
                        <Remark>ALMIDE-113-3L - 3-Layer SPEC.</Remark>
                    </RemarkWrapper>                
                </Blockwrapper>
                <Bar>Wearable용 필름 (Cell Pouch Film)</Bar>
                <Blockwrapper>
                    <RemarkWrapper>
                        <Block1></Block1>
                        <Remark>ALMIDE-113-3L - 3-Layer Structure</Remark>
                    </RemarkWrapper>  
                    <RemarkWrapper>
                        <Block2></Block2>
                        <Remark>ALMIDE-113-3L - 3-Layer SPEC.</Remark>
                    </RemarkWrapper>                
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

const Block1 = styled.div`
    border: 1px solid #D0D0D0;
    width: 398px;
    height: 718px;
    margin-bottom: 3vh;
    @media screen and (max-width: 1195px) {
    width: 90vw;
    height: 430px;
  }
`;

const Block2 = styled.div`
    border: 1px solid #D0D0D0;
    width: 674px;
    height: 718px;
    margin-bottom: 3vh;
    @media screen and (max-width: 1195px) {
    width: 90vw;
    height: 208px;
  }
`;

const Remark = styled.div`
    font-size: 18px;
    margin-bottom: 5vh;
`;

const RemarkWrapper = styled.div`

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


export default SecondaryBattery;