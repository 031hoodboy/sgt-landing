import React,{ useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useLocation } from "react-router-dom";

import {PageWrapper} from '../../components/PageStyle';
import BackgroundImg from '../../assets/noticebackground.png';
import {PageTitleWrpper, PageTitle, SubTitle2 } from '../../components/PageStyle';
import styled from '@emotion/styled';
import axios from 'axios';


const NoticeInfo = ({location}) => {

const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const history = useHistory();

  useEffect(() => {
    console.log(location.props?.id);

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
            </PageTitleWrpper>
            <BoardWrapper>
                {news.map(newss => (
                    (newss.idx === location.props?.id?
                        <>
                        <BoardHeader>
                            <BordTitle>{newss.subject}</BordTitle>
                        </BoardHeader>
                        <BorderSubTitle>
                            <RegisDate>{newss.regdate.split("", 10)}</RegisDate>
                            <Look>조회</Look>
                        </BorderSubTitle>
                        <BoardContent>
                            <NewssContnet>{newss.content}</NewssContnet>
                        </BoardContent>
                    </>
                    :
                        <>
                        </>
                    )
                    
                ))}
                <ButtonWrapper>
                    <Button
                        onClick={() =>
                            history.push({pathname: `/notice`})
                        }                          
                    >목록으로</Button>
                </ButtonWrapper>
            </BoardWrapper>
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

const BoardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 10vh 0;
    @media screen and (max-width: 1024px) {
        width: 90vw;
        margin: 0 auto 0 auto;
  }
`;

const BoardHeader = styled.div`
    width: 90vw;
    max-width: 1088px;
    height: 52px;
    border-top: 2px solid #851F1C;
    border-bottom: 1px solid #DBDBDB;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #000;
`;

const BoardContent = styled.div`
    width: 90vw;
    max-width: 1088px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #000;
    border-bottom: 1px solid #DBDBDB;
    margin: 3vh 0;
`;

const Num = styled.div`
    margin: 0 20px;
    min-width: 20px;
    cursor: pointer;
`;

const BordHeaderTitle = styled.div`

`;

const BordTitle = styled.div`
    flex:1;
    padding: 0 50px;
`;

const BoardHeaderRegisDate = styled(Num)`

`;

const RegisDate = styled.div`

`;

const Look = styled(Num)`
    margin: 0 20px;
`;

 const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Pagination = styled.div`

`;

const NewssContnet = styled.div`
    padding: 5vh 0;
`;

const BorderSubTitle = styled.div`
    width: 90vw;
    max-width: 1088px;
    height: 52px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    color: #909090;
    font-size: 16px;
`;

const ButtonWrapper = styled.div`
    width: 90vw;
    max-width: 1088px;
    display: flex;
    justify-content: flex-end;
`;

const Button = styled.div`
    color: #fff;
    font-size: 15px;
    border-radius: 5px;
    background: #930E14;
    padding: 10px 20px;
    cursor: pointer;
`;


export default NoticeInfo;