import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import {PageWrapper} from '../../components/PageStyle';
import BackgroundImg from '../../assets/aboutbackground.png';
import {PageTitleWrpper, Title, PageBlockWrapper } from '../../components/PageStyle';
import styled from '@emotion/styled';


const Greet = () => {
    return (
        <PageWrapper>
            <Header/>
            <MainImg>

            </MainImg>
            {/* <NavBar></NavBar> */}
            <PageTitleWrpper>
                <Title>CEO 인사말</Title>
                <TitleUnderBar/>
            </PageTitleWrpper>
            <PageBlockWrapper>
                <Hello>
                    안녕하십니까?
                    (주)에스티지 대표이사 김곤 입니다.
                </Hello>
            </PageBlockWrapper>
            <Footer/>
        </PageWrapper>
    );
}

const MainImg = styled.div`
    width: 100%;
    height: 18vw;
    background: #282D27;
    background-image: url(${BackgroundImg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center; 
    display: flex;
    align-items: flex-end;
    justify-content: center;
    flex-direction: column;
    @media screen and (max-width: 1024px) {
        height: 15vh;
  }
`;

const TitleUnderBar = styled.div`
    border-top: 2px solid #851F1C;
    width: 200px;
`;

const Hello = styled.div`

`;
export default Greet;