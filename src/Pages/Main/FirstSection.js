import React from 'react';
import styled from '@emotion/styled';
import BackgroundImg from '../../assets/mainbackgroundimg.png';
import MobileBackgroundImg from '../../assets/mobilemainbackgroundimg.png';
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
        <Background>
            <SloganWrapper>
                <Slogan>숨겨진 가치를 찾는기업,</Slogan>
                <Slogan>고객이 신뢰하는 기업</Slogan>
                <SmallSlogan>Social Gravity Technology Corp.</SmallSlogan>
            </SloganWrapper>
        </Background>
        <MobileBackground>
        <SloganWrapper>
                <Slogan>숨겨진 가치를 찾는기업,</Slogan>
                <Slogan>고객이 신뢰하는 기업</Slogan>
                <SmallSlogan>Social Gravity Technology Corp.</SmallSlogan>
            </SloganWrapper>
        </MobileBackground>
        <ScrollDownIcon onClick={handleTop}/>
        </>
    );
}

const Background = styled.div`
    width: 100%;
    height: 92vh;
    background: #282D27;
    background-image: url(${BackgroundImg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center; 
    display: flex;
    justify-content: center;
    flex-direction: column;
    @media screen and (max-width: 840px) {
        display: none
  }
`;

const MobileBackground = styled.div`
    width: 100%;
    height: 92vh;
    background: #282D27;
    background-image: url(${MobileBackgroundImg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center; 
    display: flex;
    justify-content: center;
    flex-direction: column;
    display: none;
    @media screen and (max-width: 840px) {
    display: flex;
}
`;

const SloganWrapper = styled.div`
    margin-left: 15vw;
    z-index: 1;
    margin-top: 25vh;  
    @font-face {
        font-family: 'EliceDigitalBaeum_Bold';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2105_2@1.0/EliceDigitalBaeum_Bold.woff') format('woff');
        font-weight: bold;
        font-style: normal;
    }
    font-family: 'EliceDigitalBaeum_Bold';
    @media screen and (max-width: 840px) {
        margin: 0 auto;
        margin-bottom: 70vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 90vw;
  }
`;


const Slogan = styled.div`
    color: #fff;
    font-size: 48px;
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