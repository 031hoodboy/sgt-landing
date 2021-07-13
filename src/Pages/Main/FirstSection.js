import React from 'react';
import styled from '@emotion/styled';

import BackgroundImg from '../../assets/mainbackgroundimg.png';

const FirstSection = () => {
    return (
        <>
        <MobileBackground>
        </MobileBackground>
        <Gradient/>
        <Background>

            <SloganWrapper>
                <Slogan>숨겨진 <Emphasis>가치</Emphasis>를 찾는기업,</Slogan>
                <Slogan>고객이 <Emphasis>신뢰</Emphasis>하는 기업</Slogan>
                <SmallSlogan><Emphasis>S</Emphasis>ocial <Emphasis>G</Emphasis>ravity <Emphasis>T</Emphasis>echnology Corp.</SmallSlogan>
            </SloganWrapper>

        </Background>
        <Opacity ></Opacity>

        </>
    );
}

const MobileBackground = styled.div`
    background: #282D27;
    height: 20vh;
    display: none;
    @media screen and (max-width: 840px) {
        display: flex;
  }
`;

const Gradient = styled.div`
    position: absolute;
    top: 65px;
    width: 100%;
    height: 40vh;
    background: linear-gradient(#1D221C , 70%, transparent);
    display: none;
    @media screen and (max-width: 840px) {
        display: flex;
  }
`;

const Background = styled.div`
    width: 100%;
    height: 100vh;
    background: #282D27;
    background-image: url(${BackgroundImg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center; 
    display: flex;
    align-items: flex-end;
    justify-content: center;
    flex-direction: column;
    @media screen and (max-width: 840px) {
        height: 80vh;
  }
`;

const SloganWrapper = styled.div`
    margin-right: 20vw;
    margin-bottom: 20vh;
    z-index: 1;
    @media screen and (max-width: 840px) {
        margin: 0 auto;
        margin-bottom: 80vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 80vw;
  }
`;


const Slogan = styled.div`
    color: #fff;
    font-size: 45px;
    font-weight: 600;
    @media screen and (max-width: 840px) {
        font-size: 27px;
  }
`;

const SmallSlogan = styled.div`
    color: #fff;
    font-size: 30px;
    font-weight: 600;
    @media screen and (max-width: 840px) {
        font-size: 17px;
  }
`;

const Emphasis = styled.span`
    color: #AC2F32;
`;

const Opacity = styled.div`
    position: absolute;
    width: 100%;
    height: 100vh;
    background: #000;
    opacity: 0.4;
    top: 0;
    @media screen and (max-width: 840px) {
        padding-top: 20vh;
        height: 90vh;
  }
`;

export default FirstSection;