import React,{ useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import {Link} from 'react-router-dom';

import {PageWrapper} from '../../components/PageStyle';
import BackgroundImg from '../../assets/prbackground.png';
import {PageTitleWrpper, PageTitle, SubTitle2 } from '../../components/PageStyle';
import styled from '@emotion/styled';
import { post } from 'axios';
import {css} from '@emotion/react';

class CustomerAdd extends React.Component {

  constructor(props) {
  super(props);
  this.state = {
    file: null,
    idx: '',
    news_sub: '',
    news_con: '',
    fileName: ''
  }
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.handleFileChange = this.handleFileChange.bind(this)
    this.handleValueChange = this.handleValueChange.bind(this)
    this.addCustomer = this.addCustomer.bind(this)
  }

  handleFormSubmit(e) {
    e.preventDefault()
    this.addCustomer()
    .then((response) => {
    console.log(response.data);
    })
  }

  handleFileChange(e) {
    this.setState({
    file: e.target.files[0],
    fileName: e.target.value
    });
  }

  handleValueChange(e) {
    let nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
  }

  addCustomer(){

  const url = 'https://sgtapi.co.kr/news/newsupdate.do';
  const formData = new FormData();
  formData.append('main', this.state.file)
  formData.append('idx', this.state.idx)
  formData.append('news_sub', this.state.news_sub)
  formData.append('news_con', this.state.news_con)


  const news_list = {
  headers: {
  'content-type': 'multipart/form-data'
  }
  }

  return post(url, formData, news_list)
  }

  render() {
    const Alert = () => {
        alert("수정되었습니다.")
      }
    return (
      <PageWrapper>
            <Header/>
            <MainImg>
                홍보센터
                <NavBarWrapper>
                    <Link to="/news-add" style={{textDecoration: 'none', color: "#000"}}>
                        <NavBlock>게시글 추가</NavBlock>
                    </Link>
                    <Link to="/news-update" style={{textDecoration: 'none', color: "#000"}}>
                        <SelectNavBlock>게시글 수정</SelectNavBlock>
                    </Link>
                </NavBarWrapper>
            </MainImg>
            <PageTitleWrpper>
                <PageTitle>게시글 수정</PageTitle>
            </PageTitleWrpper>
            <Blockwrapper>
              <form onSubmit={this.handleFormSubmit}>
                <InputWrapper>
                  <Label>아이디</Label>
                  <Input type="text" name="idx" value={this.state.idx} onChange={this.handleValueChange} />
                </InputWrapper>
                <InputWrapper>
                  <Label>제목</Label>
                  <Input type="text" name="news_sub" value={this.state.news_sub} onChange={this.handleValueChange} />
                </InputWrapper>
                <InputWrapper>
                  <Label>내용</Label>
                  <TextArea type="text" name="news_con" value={this.state.news_con} onChange={this.handleValueChange} />
                </InputWrapper>
                <InputWrapper>
                  <Label>이미지</Label>
                  <Input type="file" name="file" file={this.state.file} value={this.state.fileName} onChange={this.handleFileChange} />
                </InputWrapper>
                <Button type="submit" onClick={Alert}>수정하기</Button>
              </form>
              </Blockwrapper>
            <Footer/>
        </PageWrapper>
      
    )
  }
}

const Blockwrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 5vh auto 5vh auto;
    justify-content: center;
    @media screen and (max-width: 1220px) {
        width: 90vw;
        justify-content: space-between;
  }
`;

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
    box-shadow:  0px 3px 6px rgba(0, 0, 0, 0.1);
    @media screen and (max-width: 1024px) {
        width: calc(90vw + 3px);
        top: calc(23vh); 
        height: 40px;
    }
`;

const TextArea = styled.textarea`
    max-width: 490px;
    width: calc(44vw - 40px) ;
    height: 20vh;
    padding: 10px 20px;
    border: 1px solid #C9C9C9;
    border-radius: 3px;
    font-size: 20px;
    @media screen and (max-width: 780px) {
    padding: 5px 10px;
    width: 90%;
    height: 20px;
    font-size: 16px;
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


const Input = styled.input`
    max-width: 490px;
    width: calc(44vw - 40px) ;
    height: 20px;
    padding: 10px 20px;
    border: 1px solid #C9C9C9;
    border-radius: 3px;
    font-size: 20px;
    @media screen and (max-width: 780px) {
    padding: 5px 10px;
    width: 90%;
    height: 20px;
    font-size: 16px;
  }
`;


const InputWrapper = styled.div`
    max-width: 530px;
    width: calc(44vw - 40px) ;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    @media screen and (max-width: 780px) {
      width: 90%;
  }
`;

const Label = styled.label`
    padding: 1vh 0;
    font-size: 20px;
    @media screen and (max-width: 780px) {
        font-size: 16px;
  }
`;


const Button = styled.button`
    margin: 0 auto;
    max-width: 530px;
    width: calc(44vw - 40px) ;
    height: 50px;
    padding: 10px 20px;
    border: 1px solid #930E14;
    background: #930E14;
    color: #fff;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10vh;
    margin-top: 3vh;
    border-radius: 5px;
    cursor: pointer;
    &:active {
    transform: scale(0.97);
    }
    @media screen and (max-width: 780px) {
    padding: 5px 10px;
    width: 90%;
    height: 35px;
    font-size: 16px;
    }
`;

export default CustomerAdd;