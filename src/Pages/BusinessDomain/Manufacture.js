import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import {Link} from 'react-router-dom';

import {PageWrapper} from '../../components/PageStyle';
import BackgroundImg from '../../assets/businessdomainbackground.png';
import {PageTitleWrpper, PageTitle } from '../../components/PageStyle';
import styled from '@emotion/styled';
import ManufactureImg1 from '../../assets/manufactureimg1.png';
import ManufactureImg2 from '../../assets/manufactureimg2.png';
import ManufactureImg3 from '../../assets/manufactureimg3.png';
import ManufactureImg4 from '../../assets/manufactureimg4.png';
import ManufactureImg5 from '../../assets/manufactureimg5.png';

const Manufacture = () => {
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
                        <SelectNavBlock>장비제조사업</SelectNavBlock>
                    </Link>
                    <Link to="/secondary-battery" style={{textDecoration: 'none', color: "#000"}}>
                        <NavBlock>2차전지소재사업</NavBlock>
                    </Link>
                </NavBarWrapper>
            </MainImg>
            <PageTitleWrpper>
                <PageTitle>장비제조사업</PageTitle>
            </PageTitleWrpper>
            <BarkWrapper>
                <Bar>반도체/디스플레이</Bar>
                <Blockwrapper>
                    <SmallRemarkWrapper>
                        <SmallBlock/>
                        <Remark>LED Chip Stage</Remark>
                    </SmallRemarkWrapper>   
                    <SmallRemarkWrapper>
                        <SmallBlock2/>
                        <Remark>FOUP Cleaner</Remark>
                    </SmallRemarkWrapper>   
                    <SmallRemarkWrapper>
                        <SmallBlock3/>
                        <Remark>디스플레이 비전 검사기</Remark>
                    </SmallRemarkWrapper>   
                    <SmallRemarkWrapper>
                        <SmallBlock4/>
                        <Remark>Manipulator 제작</Remark>
                    </SmallRemarkWrapper>   
                </Blockwrapper>
                <Blockwrapper>
                    <RemarkWrapper>
                        <Block></Block>
                        <Remark>Interface Board (부품 공급)</Remark>
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
    justify-content: space-between;
    margin: 5vh auto 10vh auto;
    @media screen and (max-width: 1220px) {
        width: 90vw;
        justify-content: space-around;
  }
`;

const Block = styled.div`
    border: 1px solid #D0D0D0;
    width: 100%;
    height: 45vw;
    margin-bottom: 2vh;
    background-image: url(${ManufactureImg5});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center; 
    max-height: 550px;
    @media screen and (max-width: 767px) {
    background-size: 100%;
    max-width: 1000px;
    width: 100%;
    height: 50vw;
    min-height: 208px;
  }
`;

const Remark = styled.div`
    font-size: 18px;
    margin-bottom: 5vh;
`;

const SmallRemarkWrapper = styled.div`
    @media screen and (max-width: 767px) {
        width: 100%;
  }
`;


const RemarkWrapper = styled.div`
    width: 90vw;
`;

const SmallBlock = styled.div`
    border: 1px solid #D0D0D0;
    width: 44vw;
    max-width: 535px;
    height: 30vw;
    max-height: 350px;
    background-image: url(${ManufactureImg1});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center; 
    margin-bottom: 2vh;
    @media screen and (max-width: 767px) {
    max-width: 1000px;
    width: 90vw;
    height: 50vw;
    min-height: 208px;
  }
`;


const SmallBlock2 = styled(SmallBlock)`
    background-image: url(${ManufactureImg2});

`;

const SmallBlock3 = styled(SmallBlock)`
    background-image: url(${ManufactureImg3});

`;

const SmallBlock4 = styled(SmallBlock)`
    background-image: url(${ManufactureImg4});

`;
export default Manufacture;