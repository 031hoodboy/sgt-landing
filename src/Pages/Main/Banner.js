import React from 'react';
import styled from '@emotion/styled';
import BackgroundImg from '../../assets/mainbanner.png';

const Banner = () => {
    return (
        <Background>
            <Opacity/>
            <Content>
                고객 만족을 최우선으로 혁신적 기술을 적용하여 세계적 품질을 추구합니다.
            </Content>
        </Background>
    );
}

const Background = styled.div`
    width: 100vw;
    height: 20vh;
    background: #fff;
    background-image: url(${BackgroundImg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center; 
    display: flex;
    align-items: center;
    flex-direction: column;
`;

const Opacity = styled.div`
    width: 100%;
    height: 100%;
    background: #000;
    opacity: 0.4;
`;

const Content = styled.div`
    position: absolute;
    height: 20vh;
    display: flex;
    align-items: center;
    color: #fff;
    font-size: 30px;
    font-weight: 600;
`;
export default Banner;