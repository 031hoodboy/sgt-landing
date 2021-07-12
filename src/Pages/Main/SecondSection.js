import React from 'react';
import styled from '@emotion/styled';
import BackgroundImg from '../../assets/mainsecondsection.png';

const SecondSection = () => {
    return (
        <Background>
            <TitleWrpper>
                <Remark>BUSINESS</Remark>
                <Title>사업영역</Title>
                <SubTitle>고객 만족을 최우선으로 혁신적 기술을 적용하여 세계적 품질을 추구합니다.</SubTitle>
            </TitleWrpper>
        </Background>
    );
}

const Background = styled.div`
    width: 100vw;
    height: 90vh;
    background: #fff;
    background-image: url(${BackgroundImg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center; 
    display: flex;
    align-items: center;
    flex-direction: column;
`;

const TitleWrpper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Remark = styled.div`

`;

const Title = styled.div`

`;

const SubTitle = styled.div`

`;

export default SecondSection;