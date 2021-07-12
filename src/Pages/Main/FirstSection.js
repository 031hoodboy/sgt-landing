import React from 'react';
import styled from '@emotion/styled';

import BackgroundImg from '../../assets/mainbackgroundimg.png';

const FirstSection = () => {
    return (
        <Background>
            
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
    align-items: center;
    flex-direction: column;
`;

export default FirstSection;