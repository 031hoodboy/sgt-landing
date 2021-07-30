import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import {Link} from 'react-router-dom';
// import Email from '../../components/Email';
import {PageWrapper} from '../../components/PageStyle';
import BackgroundImg from '../../assets/customersupportbackground.png';
import {PageTitleWrpper, PageTitle, SubTitle2 } from '../../components/PageStyle';
import styled from '@emotion/styled';
import MailImg from '../../assets/mail.png'
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
                    {/* <Link to="/recruitment" style={{textDecoration: 'none', color: "#000"}}>
                        <NavBlock>채용안내</NavBlock>
                    </Link> */}
                </NavBarWrapper>
            </MainImg>
            <PageTitleWrpper>
                <PageTitle>견적문의</PageTitle>
                <SubTitle2>
                    가공 및 제품 견적 등 문의사항의 경우 아래의 메일로 연락주시길 바랍니다.
                </SubTitle2>
                {/* <Email/> */}
            </PageTitleWrpper>
            <Blockwrapper>
                <Mail/>
                123123@sgtmail.com
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
    @media screen and (max-width: 1024px) {
        width: calc(90vw + 3px);
        top: calc(23vh); 
        height: 40px;
    }
`;

const NavBlock = styled.div`
    width: 60vw;
    height: 58px;
    border-left: 1px solid #D9D9D9;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
    border-bottom: 1px solid #D9D9D9;
    @media screen and (max-width: 1024px) {
    width: 90vw;
    height: 40px; 
    font-size: 14px;
    }
`;

const SelectNavBlock = styled(NavBlock)`
    background: #930E14;
    color: #fff;
    border-left: 1px solid #930E14;
`;

const Mail = styled.div`
    width: 89px;
    height: 59px;
    margin: 0;
    background-image: url(${MailImg});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center; 
    margin-top: 10px;
    margin-right: 3vw;
    @media screen and (max-width: 780px) {
    width: 75px;
    height: 50px;
    margin: 0;
    margin-bottom: 5vh;
  }
`;

const Blockwrapper = styled.div`
    width: 1088px;
    display: flex;
    flex-wrap: wrap;
    margin: 15vh auto 20vh auto;
    font-size: 40px;
    color: #bfbfbf;
    justify-content: center;
    @media screen and (max-width: 1220px) {
        width: 90vw;
        flex-direction: column;
        font-size: 28px;
        align-items: center;
  }
`;

export default QuoteContact;