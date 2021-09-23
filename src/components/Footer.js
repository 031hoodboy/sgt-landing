import React from 'react';
import styled from '@emotion/styled';
import SgtLogoImg from '../assets/sgtfooterlogo.png'

const Footer = () => {
    return (
        <FooterBcakgroundBlock>
            <FooterBlock>
            <InfoWrapper>
                <ContentTitle>(주)에스지티</ContentTitle>
                <Content>Tel 041-548-0127(대표)&nbsp;&nbsp;&nbsp;<Content>Fax 041-548-0128</Content> </Content>
                <Content>주소 : 충청남도 천안시 서북구 직산읍 모시 1길 8</Content>
                <Content>Copyright 2021 SGT CO. All Rights Reserved. </Content>
            </InfoWrapper>
            <Logo/>
            </FooterBlock>
        </FooterBcakgroundBlock>
    );
}
const FooterBcakgroundBlock = styled.div`
    padding: 5vh 0vw;
    background: #333;  
    display: flex;
    @media screen and (max-width: 840px) {
        padding: 3vh 0vw;
  }
`;

const FooterBlock = styled.div`
    padding: 0 20vw;
    width: 100%;
    margin: 0 auto;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-wrap: wrap;
    @media screen and (max-width: 840px) {
        padding: 0 5vw;
  }
`;

const Content = styled.div`
    color: #B5B5B5;
    font-size: 16px;
    padding: 5px 0;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    @media screen and (max-width: 840px) {
        font-size: 14px;
  }
`;

const ContentTitle = styled(Content)`
    font-weight: 600;
    color: #fff;
`;

const Logo = styled.div`
    width: 15vw;
    max-width: 194px;
    min-width: 118px;
    height: 5vh;
    max-height: 64px;
    min-height: 39px;
    margin: 5px 0 15px 0;
    background-image: url(${SgtLogoImg});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center; 
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 1190px) {
        display: none;
  }
`;

const InfoWrapper = styled.div`

`;

export default Footer;