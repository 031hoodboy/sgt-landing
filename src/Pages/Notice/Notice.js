import React,{ useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';
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

  const history = useHistory();

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
            <BoardWrapper>
                <BoardHeader>
                    <Wrapper>
                        <Num>번호</Num>
                    </Wrapper>
                    <BordHeaderTitle>제목</BordHeaderTitle>
                    <Wrapper>
                        <BoardHeaderRegisDate>등록일</BoardHeaderRegisDate>
                        <Look>조회</Look>
                    </Wrapper>
                </BoardHeader>
                {news.map(newss => (
                    <BoardContent key={newss.idx}>
                        <Wrapper>
                            <Num>{newss.idx}</Num>
                        </Wrapper>
                        <BordTitle
                                onClick={() =>
                                    history.push(
                                    {
                                        pathname: `/notice-info/${newss.idx}`,
                                        props: {id: newss.idx}
                                      }
                                    )
                                }                        
                        >{newss.subject}</BordTitle>
                        <Wrapper>
                            <RegisDate>{newss.regdate.split("", 10)}</RegisDate>
                            <Look>조회</Look>
                        </Wrapper>
                    </BoardContent>
                ))}
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
    background-color: #930E14;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #fff;
`;

const BoardContent = styled.div`
    width: 90vw;
    max-width: 1088px;
    height: 52px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #000;
    border-bottom: 1px solid #DBDBDB;
`;

const Num = styled.div`
    margin: 0 20px;
    min-width: 20px;
`;

const BordHeaderTitle = styled.div`

`;

const BordTitle = styled.div`
    flex:1;
    padding: 0 50px;
    cursor: pointer;
`;

const BoardHeaderRegisDate = styled(Num)`

`;

const RegisDate = styled.div`

`;

const Look = styled(Num)`
    margin: 0 20px;
v`;

 const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Pagination = styled.div`

`;

export default Notice;