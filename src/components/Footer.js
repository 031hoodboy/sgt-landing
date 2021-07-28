import React from 'react';
import styled from '@emotion/styled';
import SgtLogoImg from '../assets/sgtfooterlogo.png'

const Footer = () => {
    return (
        <FooterBcakgroundBlock>
            <FooterBlock>
            <Logo/>
            <InfoWrapper>
                <Content>(주)에스지티</Content>
                <Content>Tel 041-548-0127(대표)   041-547-0127(기업부설연구소)     Fax 041-548-1234 </Content>
                <Content>주소 : 충청남도 천안시 서북구 직산읍 모시리 215번지</Content>
                <Content>Copyright 2021 SGT CO. All Rights Reserved. </Content>
            </InfoWrapper>
            </FooterBlock>
        </FooterBcakgroundBlock>
    );
}
const FooterBcakgroundBlock = styled.div`
    padding: 5vh 0vw;
    background: #000;  
    display: flex;
    justify-content: center;
    align-items: center;
`;

const FooterBlock = styled.div`
    margin: 0 auto;
    padding: 0 10vw;
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
`;

const Content = styled.div`
    color: #fff;
    font-size: 16px;
    padding: 5px 0;
    @media screen and (max-width: 840px) {
        font-size: 14px;
  }
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
    cursor: pointer;
`;

const InfoWrapper = styled.div`

`;

export default Footer;