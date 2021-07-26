import React,{ useEffect, useState} from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import {PageWrapper} from '../../components/PageStyle';
import BackgroundImg from '../../assets/noticebackground.png';
import {PageTitleWrpper, PageTitle, SubTitle2 } from '../../components/PageStyle';
import styled from '@emotion/styled';
import axios from 'axios';


const Notice = () => {

    const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        // 요청이 시작 할 때에는 error 와 users 를 초기화하고
        setError(null);
        setNews(null);
        // loading 상태를 true 로 바꿉니다.
        setLoading(true);
        const response = await axios.get(
          'http://118.67.132.125:8080/notice/noticelist.do'
        );
        setNews(response.data); // 데이터는 response.data 안에 들어있습니다.
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };

    fetchNews();
  }, []);

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!news) return null;

    return (
        <PageWrapper>
            <Header/>
            <MainImg>
                공지사항
            </MainImg>
            <PageTitleWrpper>
                <PageTitle>공지사항</PageTitle>
                <SubTitle2>
                고효율 태양광 셀과 고출력 태양광 모듈 신기술을 상용화 함으로써<br/>
                화석 연료의 사용을 감축할 수 있도록 기술개발과 상용화에 매진하고 있습니다.
                </SubTitle2>
            </PageTitleWrpper>
            <BarkWrapper>
                <BoardHeader>

                </BoardHeader>

            </BarkWrapper>
            <Button>지원하기</Button>
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

const BarkWrapper = styled.div`
    @media screen and (max-width: 1024px) {
        width: 90vw;
        margin: 0 auto 0 auto;
  }
`;

const Blockwrapper = styled.div`
    width: 1088px;
    display: flex;
    flex-wrap: wrap;
    margin: 5vh auto 5vh auto;
    justify-content: space-around;
    @media screen and (max-width: 1220px) {
        width: 90vw;
        justify-content: space-around;
  }
`;

const Block = styled.div`
    width: 260px;
    height: 260px;
    margin-bottom: 15px;
    border: 1px solid #DBDBDB;
    @media screen and (max-width: 1220px) {
    width: 90vw;
    max-width: 360px;
    height: 90vw;
    max-height: 360px;
  }
  @media screen and (max-width: 780px) {
    width: 40vw;
    max-width: 174px;
    height: 40vw;
    max-height: 174px;
  }
`;

const Button = styled.div`
    margin: 0 auto;
    width: 260px;
    height: 60px;
    border: 1px solid #930E14;
    color: #930E14;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10vh;
    cursor: pointer;
    @media screen and (max-width: 780px) {
    width: 171px;
    height: 60px;
  }
`;

const BoardHeader = styled.div`

`;
export default Notice;