import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import {Link} from 'react-router-dom';

import {PageWrapper} from '../../components/PageStyle';
import BackgroundImg from '../../assets/prbackground.png';
import {PageTitleWrpper, PageTitle, SubTitle2} from '../../components/PageStyle';
import styled from '@emotion/styled';



const Catalogue = () => {
    return (
        <PageWrapper>
            <Header/>
            <MainImg>
                홍보센터
                <NavBarWrapper>
                    <Link to="/news" style={{textDecoration: 'none', color: "#000"}}>
                        <NavBlock>뉴스</NavBlock>
                    </Link>
                    <Link to="/catalogue" style={{textDecoration: 'none', color: "#000"}}>
                        <SelectNavBlock>E-카탈로그</SelectNavBlock>
                    </Link>
                </NavBarWrapper>
            </MainImg>
            <PageTitleWrpper>
                <PageTitle>E-카탈로그</PageTitle>
                <SubTitle2>
                고효율 태양광 셀과 고출력 태양광 모듈 신기술을 상용화 함으로써<br/>
                화석 연료의 사용을 감축할 수 있도록 기술개발과 상용화에 매진하고 있습니다.
                </SubTitle2>
            </PageTitleWrpper>
            <Blockwrapper>
                <Card></Card>
                <ButtonWrpper>
                    <Button>PDF 보기</Button>
                    <Button>PDF 다운로드</Button>
                </ButtonWrpper>
            </Blockwrapper>

            <Footer/>
        </PageWrapper>
    );
}

const MainImg = styled.div`
    width: 100%;
    height: 30vh;
    background: #282D27;
    background-image: url(${BackgroundImg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center; 
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: #fff;
    font-size: 45px;
    font-weight: 600;
    @media screen and (max-width: 1024px) {
        height: 17vh;
        font-size: 26px;
  }
`;

const NavBarWrapper = styled.div`
    width: 60vw;
    height: 58px;
    display: flex;
    margin: 0 auto;
    position: absolute;
    color: #000;
    font-size: 16px;
    font-weight: 400;
    top: calc(30vh + 56px);
    box-shadow:  0px 3px 6px #d9d9d9;
    @media screen and (max-width: 1024px) {
        width: calc(90vw + 3px);
        top: calc(23vh); 
        height: 40px;
    }
`;

const NavBlock = styled.div`
    width: 30vw;
    height: 58px;
    border-left: 1px solid #D9D9D9;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
    border-bottom: 1px solid #D9D9D9;
    @media screen and (max-width: 1024px) {
    width: 45vw;
    height: 40px; 
    font-size: 14px;
    }
`;

const SelectNavBlock = styled(NavBlock)`
    background: #930E14;
    color: #fff;
    border-left: 1px solid #930E14;
`;

const Blockwrapper = styled.div`
    width: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 5vh auto 10vh auto;
    @media screen and (max-width: 1220px) {
        width: 90vw;
        justify-content: space-around;
        margin-bottom: 20vh;
    }
`;

const Card = styled.div`
    width: 350px;
    height: 415px;
    border: 1px solid #DBDBDB;
    @media screen and (max-width: 780px) {
        width: 90vw;
    }
`;

const ButtonWrpper = styled.div`
    margin-top: 5vh;
    width: 350px;
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 780px) {
        width: 90vw;
    }
`;

const Button = styled.div`
    width: 170px;
    height: 60px;
    border: 1px solid #930E14;
    color: #930E14;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    @media screen and (max-width: 780px) {
    width: 43.5vw;
    height: 60px;
  }
`;
export default Catalogue;