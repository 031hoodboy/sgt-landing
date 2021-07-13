import React from 'react';
import styled from '@emotion/styled';
import {TitleWrpper, Remark, Title } from '../../components/PageStyle';
import Tech1Img from '../../assets/tech1.png';
import Tech2Img from '../../assets/tech2.png';

const ThirdSection = () => {
    return (
        <Background>
            <TitleWrpper>
                <Remark>TECHNOLOGY</Remark>
                <Title>설비 및 기술 현황</Title>
            </TitleWrpper>
            <CardWrapper>
                <Card1>설비 현황</Card1>
                <Card2>기술 현황</Card2>
            </CardWrapper>
        </Background>
    );
}

const Background = styled.div`
    width: 100vw;
    padding: 10vh 0;
    background: #FCF8F8;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center; 
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
`;

const CardWrapper = styled.div`
    display: flex;
    width: 60vw;
    justify-content: space-around;
    flex-wrap: wrap;
`;
 

const Card1 = styled.div`
    width: 536px;
    height: 198px;
    background: #fff;
    background-image: url(${Tech1Img});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center; 
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: #fff;
    font-size: 30px;
    font-weight: 600;
    margin-top: 5vh;

`;

const Card2 = styled(Card1)`
    background-image: url(${Tech2Img});
`;

export default ThirdSection;