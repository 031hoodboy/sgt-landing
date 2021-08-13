import React,{ useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import {Link} from 'react-router-dom';

import {PageWrapper} from '../../components/PageStyle';
import BackgroundImg from '../../assets/prbackground.png';
import {PageTitleWrpper, PageTitle, SubTitle2 } from '../../components/PageStyle';
import styled from '@emotion/styled';
import axios from 'axios';


const NewsInfo = ({location}) => {

    const [newscard, setNewscard] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const history = useHistory();

    useEffect(() => {
        const fetchNews = async () => {
        try {
            setError(null);
            setNewscard(null);
            setLoading(true);
            const response = await axios.get(
            `https://www.sgtapi.co.kr/news/newslist.do`
            );
            setNewscard(response.data); 
        } catch (e) {
            setError(e);
        }
        setLoading(false);
        };

        fetchNews();
    }, []);

    if (loading) return <div></div>;
    if (error) return <div>에러가 발생했습니다</div>;
    if (!newscard) return null;

    return (
        <PageWrapper>
            <Header/>
            <MainImg>
                홍보센터
                <NavBarWrapper>
                    <Link to="/news" style={{textDecoration: 'none', color: "#000"}}>
                        <SelectNavBlock>뉴스</SelectNavBlock>
                    </Link>
                    <Link to="/catalogue" style={{textDecoration: 'none', color: "#000"}}>
                        <NavBlock>E-카탈로그</NavBlock>
                    </Link>
                </NavBarWrapper>
            </MainImg>
            <PageTitleWrpper>
                <PageTitle>뉴스</PageTitle>
                <SubTitle2>
                고효율 태양광 셀과 고출력 태양광 모듈 신기술을 상용화 함으로써<br/>
                화석 연료의 사용을 감축할 수 있도록 기술개발과 상용화에 매진하고 있습니다.
                </SubTitle2>
            </PageTitleWrpper>
            <BoardWrapper>
                {newscard.map(newscards => (
                    (newscards.idx === location.props?.id?
                        <>
                        <BoardHeader>
                            <BordTitle>{newscards.news_sub}</BordTitle>
                        </BoardHeader>
                        <BorderSubTitle>
                            <RegisDate>등록일: {newscards.regdate.split("", 10)}</RegisDate>
                        </BorderSubTitle>
                        <BoardContent>
                            <NewsImg src={"https://sgtapi.co.kr" + newscards?.care_image_list?.[0].url} alt=""/>
                            <NewssContnet>{newscards.newscon}</NewssContnet>
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
                            history.push({pathname: `/news`})
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
    height: 25vh;
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
    @font-face {
        font-family: 'EliceDigitalBaeum_Bold';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2105_2@1.0/EliceDigitalBaeum_Bold.woff') format('woff');
        font-weight: bold;
        font-style: normal;
    }
    font-family: 'EliceDigitalBaeum_Bold';
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

const NewsImg = styled.img`
    height: 400px;
    max-width: 600px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center; 
    margin: 0 auto;
    margin-top: 10vh;
    display: flex;
    flex-direction: column;
    transition: all 0.3s ease-in-out;  
    &:hover{
        background-size: 108%;
    }
    @media screen and (max-width: 840px) {
        width: 90vw;
        height: 60vw;
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
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #000;
    border-bottom: 1px solid #DBDBDB;
`;

const BordTitle = styled.div`
    flex:1;
    padding: 0 50px;
    @media screen and (max-width: 780px) {
        padding: 0;
        font-size: 14px;
    }
`;

const RegisDate = styled.div`
    @media screen and (max-width: 780px) {
        padding: 0;
        font-size: 12px;
    }
`;

const NewssContnet = styled.div`
    max-width: 728px;
    padding: 5vh 0;
    text-align: center;
    @media screen and (max-width: 840px) {
        width: 90vw;
        font-size: 14px;

  }
`;

const BorderSubTitle = styled.div`
    width: 90vw;
    max-width: 1088px;
    padding: 1vh 0;
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
    @media screen and (max-width: 780px) {
        justify-content: center;
    }
`;

const Button = styled.div`
    color: #fff;
    font-size: 15px;
    border-radius: 5px;
    background: #930E14;
    padding: 10px 20px;
    cursor: pointer;
    margin: 3vh 0;
    
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
    top: calc(25vh + 56px);
    box-shadow:  0px 3px 6px rgba(0, 0, 0, 0.1);
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
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

export default NewsInfo;