import React from 'react';
import styled from '@emotion/styled';
import BackgroundImg from '../../assets/mainsecondsection.png';
import Card1Img from '../../assets/business1.png';
import Card2Img from '../../assets/business2.png';
import Card3Img from '../../assets/business3.png';
import {TitleWrpper, Remark, Title, SubTitle } from '../../components/PageStyle';

const SecondSection = () => {
    return (
        <Background>
            <TitleWrpper>
                <Remark>BUSINESS</Remark>
                <Title>사업영역</Title>
                <SubTitle>고객 만족을 최우선으로 혁신적 기술을 적용하여 세계적 품질을 추구합니다.</SubTitle>
            </TitleWrpper>
            <CardWrapper>
                <Card1></Card1>
                <Card2></Card2>
                <Card3></Card3>
            </CardWrapper>
        </Background>
    );
}

const Background = styled.div`
    width: 100vw;
    height: 70vh;
    padding: 7vh 0;
    background: #fff;
    background-image: url(${BackgroundImg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center; 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`;

const CardWrapper = styled.div`
    display: flex;
    width: 60vw;
    justify-content: space-around;
`;

const Card1 = styled.div`
    width: 355px;
    height: 450px;
    background: #fff;
    background-image: url(${Card1Img});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center; 
    display: flex;
    align-items: center;
    flex-direction: column;
`;

const Card2 = styled(Card1)`
    background-image: url(${Card2Img});

`;

const Card3 = styled(Card1)`
    background-image: url(${Card3Img});
`;
export default SecondSection;