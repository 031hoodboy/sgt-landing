import React from 'react';
import styled from '@emotion/styled';
import {TitleWrpper, Remark, Title, PageBlockWrapper } from '../../components/PageStyle';

const FourthSection = () => {
    return (
        <Background>
            <PageBlockWrapper>
                <TitleWrpper>
                    <Remark>NEWS</Remark>
                    <Title>뉴스</Title>
                </TitleWrpper>
                <NewsCardWrapper>
                    <NewsCardBlock>
                        <NewsImg></NewsImg>
                        <Line/>
                        <NewsContent></NewsContent>
                    </NewsCardBlock>
                </NewsCardWrapper>
            </PageBlockWrapper>            
        </Background>
    );
}

const Background = styled.div`
    width: 100vw;
    padding: 10vh 0;
    background: #fff;
    display: flex;
    align-items: center;
    flex-direction: column;
`;


const NewsCardWrapper = styled.div`
    display: flex;
    width: 80vw;
    max-width: 1088px;
    justify-content: space-between;
    flex-wrap: wrap;
`;
 
const NewsCardBlock = styled.div`

`;

const NewsImg = styled.div``;

const Line = styled.div``;

const NewsContent = styled.div``;

export default FourthSection;