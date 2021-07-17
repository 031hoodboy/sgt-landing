import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import {Link} from 'react-router-dom';
import Email from '../../components/Email';
import {PageWrapper} from '../../components/PageStyle';
import BackgroundImg from '../../assets/customersupportbackground.png';
import {PageTitleWrpper, PageTitle, SubTitle2 } from '../../components/PageStyle';
import styled from '@emotion/styled';

const QuoteContact = () => {
    return (
        <PageWrapper>
            <Header/>
            <MainImg>
                고객지원
                <NavBarWrapper>
                    <Link to="/quote-contact" style={{textDecoration: 'none', color: "#000"}}>
                        <SelectNavBlock>견적문의</SelectNavBlock>
                    </Link>
                    <Link to="/recruitment" style={{textDecoration: 'none', color: "#000"}}>
                        <NavBlock>채용안내</NavBlock>
                    </Link>
                </NavBarWrapper>
            </MainImg>
            <PageTitleWrpper>
                <PageTitle>견적문의</PageTitle>
                <SubTitle2>
                고효율 태양광 셀과 고출력 태양광 모듈 신기술을 상용화 함으로써<br/>
                화석 연료의 사용을 감축할 수 있도록 기술개발과 상용화에 매진하고 있습니다.
                </SubTitle2>
                <Email/>
            </PageTitleWrpper>

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

export default QuoteContact;