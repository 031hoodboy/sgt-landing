import React from 'react';
import styled from '@emotion/styled';

const Footer = () => {
    return (
        <FooterBcakgroundBlock>

            <FooterBlock>
            <Logo>
                SGT LOGO
            </Logo>
            <InfoWrapper>
                <TermsWrapper>
                    <Terms>이용약관</Terms>
                    <Terms>개인정보처리방침</Terms>
                </TermsWrapper>
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
    height: 300px;
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

const TermsWrapper = styled.div`
    display: flex;
`;

const Terms = styled.div`
    color: #fff;
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 1vh;
    font-family: 'Noto Sans KR', sans-serif;
    &:last-child{
        margin-left: 20px;
    }
    @media screen and (max-width: 840px) {
        font-size: 14px;
  }
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
    color: #fff;
    font-size: 40px;
    margin-right: 50px;
    opacity: 0.5;
    margin-bottom: 20px;
`;

const InfoWrapper = styled.div`
`;

export default Footer;