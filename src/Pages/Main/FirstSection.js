import React from 'react';
import styled from '@emotion/styled';
import BackgroundImg from '../../assets/mainbackgroundimg.png';
import Arrow from '../../assets/arrow.png'

const FirstSection = () => {
    let pageHeight = window.innerHeight;

    const handleTop = () => {  // 클릭하면 스크롤이 위로 올라가는 함수
    window.scrollTo({
        top: pageHeight,
        behavior: "smooth"
    });
    }

    return (
        <>
        <Gradient/>
        <Background>
            <SloganWrapper>
                <Slogan>숨겨진 <Emphasis>가치</Emphasis>를 찾는기업,</Slogan>
                <Slogan>고객이 <Emphasis>신뢰</Emphasis>하는 기업</Slogan>
                <SmallSlogan><Emphasis>S</Emphasis>ocial <Emphasis>G</Emphasis>ravity <Emphasis>T</Emphasis>echnology Corp.</SmallSlogan>
            </SloganWrapper>
        </Background>
        <ScrollDownIcon onClick={handleTop}/>
        </>
    );
}

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
    height: 92vh;
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
        height: 92vh;
  }
`;

const SloganWrapper = styled.div`
    margin-right: 15vw;
    margin-bottom: 20vh;
    z-index: 1;
    @media screen and (max-width: 840px) {
        margin: 0 auto;
        margin-bottom: 60vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 90vw;
  }
`;


const Slogan = styled.div`
    color: #fff;
    font-size: 45px;
    font-weight: 700;
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

const ScrollDownIcon = styled.div`
    position: absolute;
    left: 50%;
    margin-left: -20px;
    bottom: 2%;
    width: 61.5px;
    height: 39px;
    background-image: url(${Arrow});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center; 
    cursor: pointer;
  @media screen and (max-width: 1024px) {
    width: 43.5px;
    height: 21px;
    bottom: -15%;
  }
`;


export default FirstSection;