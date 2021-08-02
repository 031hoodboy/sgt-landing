import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import {Link} from 'react-router-dom';
import {PageWrapper} from '../../components/PageStyle';
import BackgroundImg from '../../assets/customersupportbackground.png';
import {PageTitleWrpper, PageTitle, SubTitle2 } from '../../components/PageStyle';
import styled from '@emotion/styled';

const QuoteContact = () => {
    return (
        <PageWrapper>
            <Header/>
            <MainImg>
                홍보센터
                <NavBarWrapper>
                    <Link to="/news" style={{textDecoration: 'none', color: "#000"}}>
                        <SelectNavBlock>뉴스</SelectNavBlock>
                    </Link>
                </NavBarWrapper>
            </MainImg>
            <PageTitleWrpper>
                <PageTitle>뉴스 추가</PageTitle>
                <SubTitle2>
                고효율 태양광 셀과 고출력 태양광 모듈 신기술을 상용화 함으로써<br/>
                화석 연료의 사용을 감축할 수 있도록 기술개발과 상용화에 매진하고 있습니다.
                </SubTitle2>
            </PageTitleWrpper>
            <Blockwrapper>
                <InputWrapper>
                    <Label>회사명</Label>
                    <Input type="text" name="company-name" />
                </InputWrapper>
                <InputWrapper>
                    <Label>직급</Label>
                    <Input type="text" name="user-rank" />
                </InputWrapper>
                <InputWrapper>
                    <Label>이름</Label>
                    <Input type="text" name="user-name" />
                </InputWrapper>
                <InputWrapper>
                    <Label>연락처</Label>
                    <Input type="text" name="contact-number" />
                </InputWrapper>
                <InputWrapper>
                    <Label>이메일</Label>
                    <EmailInput type="text" name="contact-number" />
                </InputWrapper>
                <InputWrapper>
                    <Label>내용</Label>
                    <Textarea name="message" />
                </InputWrapper>
                    <Button type="submit" value="보내기"/>
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
    width: 20vw;
    height: 58px;
    border-left: 1px solid #D9D9D9;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
    @media screen and (max-width: 1024px) {
    width: 30vw;
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
    width: 1088px;
    display: flex;
    flex-wrap: wrap;
    margin: 5vh auto 5vh auto;
    justify-content: space-between;
    @media screen and (max-width: 1220px) {
        width: 90vw;
        justify-content: space-between;
  }
`;

const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1vh 0;

`;

// const EmailWrapper = styled(InputWrapper)`
//     width: 90vw;
//     max-width: 1088px;
// `;

const Label = styled.label`
    padding: 1vh 0;
    font-size: 20px;
    @media screen and (max-width: 780px) {
        font-size: 16px;

  }
`;

const Textarea = styled.textarea`
    width: calc(90vw - 40px);
    max-width: 1048px;
    height: 30vh;
    padding: 0;
    border: 1px solid #C9C9C9;
    border-radius: 3px;
    padding: 20px;
    font-size: 20px;
    @media screen and (max-width: 780px) {
    padding: 5px 10px;
    width: calc(90vw - 20px) ;
    height: 30vh;
    font-size: 16px;
  }
`;

const Input = styled.input`
    max-width: 490px;
    width: calc(44vw - 40px) ;
    padding: 10px 20px;
    border: 1px solid #C9C9C9;
    border-radius: 3px;
    font-size: 20px;
    @media screen and (max-width: 780px) {
    padding: 5px 10px;
    width: calc(45vw - 30px) ;
    height: 20vw;
    max-height: 20px;
    font-size: 16px;
  }
`;

const EmailInput = styled(Input)`
    max-width: 1048px;
        width: calc(90vw - 40px);
    @media screen and (max-width: 780px) {
        padding: 5px 10px;
        width: calc(90vw - 23px);
    max-width: 1088px;
  }
`;

const Button = styled.input`
    margin: 0 auto;
    width: 90vw;
    height: 60px;
    border: 1px solid #930E14;
    background: #930E14;
    color: #fff;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10vh;
    border-radius: 5px;
    cursor: pointer;
    display: flex;
    &:active {
        transform: scale(0.97);
    }
`;

export default QuoteContact;