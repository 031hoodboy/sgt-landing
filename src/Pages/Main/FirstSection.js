import React from 'react';
import styled from '@emotion/styled';

import BackgroundImg from '../../assets/mainbackgroundimg.png';

const FirstSection = () => {
    return (
        <Background>
            <SloganWrapper>
                <Slogan>숨겨진 <Emphasis>가치</Emphasis>를 찾는기업,</Slogan>
                <Slogan>고객이 <Emphasis>신뢰</Emphasis>하는 기업</Slogan>
                <SmallSlogan><Emphasis>S</Emphasis>ocial <Emphasis>G</Emphasis>ravity <Emphasis>T</Emphasis>echnology Corp.</SmallSlogan>
            </SloganWrapper>
        </Background>
    );
}

const Background = styled.div`
    width: 100vw;
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
`;

const SloganWrapper = styled.div`
    margin-right: 20vw;
    margin-bottom: 20vh;
`;


const Slogan = styled.div`
    color: #fff;
    font-size: 45px;
    font-weight: 600;
`;

const SmallSlogan = styled.div`
    color: #fff;
    font-size: 30px;
    font-weight: 600;
`;

const Emphasis = styled.span`
    color: #AC2F32;
`;

export default FirstSection;