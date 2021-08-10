import React, {useState, useEffect} from 'react';
import styled from '@emotion/styled';
import {
    TitleWrpper, 
    Remark, 
    Title, 
    PageBlockWrapper } 
    from '../../components/PageStyle';
import NewsImg1 from '../../assets/newscard1.png';
import NewsImg2 from '../../assets/newscard2.png';
import NewsImg3 from '../../assets/newscard3.png';
import { useHistory } from 'react-router-dom';
import axios from 'axios';


const FourthSection = () => {
    const [newscard, setNewscard] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const history = useHistory();

    const [page, setPage] = useState(1);
    const handlePageChange = (page) => { setPage(page); };
  
    useEffect(() => {
    const fetchNews = async () => {
        try {
        // 요청이 시작 할 때에는 error 와 users 를 초기화하고
        setError(null);
        setNewscard(null);
        // loading 상태를 true 로 바꿉니다.
        setLoading(true);
        const response = await axios.get(
            'https://sgtapi.co.kr/news/newslist.do'
        );
        setNewscard(response.data); // 데이터는 response.data 안에 들어있습니다.
        } catch (e) {
        setError(e);
        }
        setLoading(false);
    };

    fetchNews();
    }, []);

    if (loading) return <div>로딩중..</div>;
    if (error) return <div>에러가 발생했습니다</div>;
    if (!newscard) return null;

    const reverse = [];
    for(let i=newscard.length-1; i >= 0; i--) {
    reverse.push(newscard[i]);
    }

    const newscardSlc = reverse.slice( reverse.length-3, reverse.length )

    const reverse2 = [];
    for(let i=newscardSlc.length-1; i >= 0; i--) {
    reverse2.push(newscardSlc[i]);
    }

    console.log(reverse2)


    return (
        <Background>
            <PageBlockWrapper>
                <TitleWrpper>
                    <Remark>NEWS</Remark>
                    <Title>뉴스</Title>
                </TitleWrpper>
                <NewsCardWrapper>
            {reverse2.map(newscards => (
                    <NewsCardBlock key={newscards.idx} 
                        onClick={() =>
                            history.push(
                            {
                                pathname: `/news-info/${newscards.idx}`,
                                props: {id: newscards.idx}
                            }
                            )
                        }    
                    >
                        <NewsImg src={"https://sgtapi.co.kr/" + newscards?.care_image_list?.[0].url} alt=""/>
                        <Line/>
                        <NewsContentWrapper>
                        <NewsContentTitle>{newscards.news_sub}</NewsContentTitle>
                        <NewsContent>{newscards.newscon}</NewsContent>
                        </NewsContentWrapper>
                    </NewsCardBlock>
                ))}
                </NewsCardWrapper>
                <ViewMore/>
                <Button onClick={() => {history.push("/news")}}>
                    더보기
                </Button>
            </PageBlockWrapper>            
        </Background>
    );
}

const Background = styled.div`
    width: 100vw;
    padding: 10vh 0;
    background: #fff;
    display: flex;
    align-items: center;
    flex-direction: column;
`;


const NewsCardWrapper = styled.div`
    display: flex;
    width: 90vw;
    max-width: 1088px;
    margin: 0 auto;
    justify-content: space-between;
    flex-wrap: wrap;
    @media screen and (max-width: 880px) {
        justify-content: space-around;
  }
`;
 

const NewsCardBlock = styled.div`
    max-width: 350px;
    border: 1px solid #D8D8D8;
    margin-top: 5vh;
    transition: all .5s;
`;


const NewsImg = styled.img`
    height: 198px;
    max-width: 350px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center; 
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    transition: all 0.3s ease-in-out;  
    &:hover{
        background-size: 108%;
    }
    @media screen and (max-width: 840px) {
        width: 90vw;
  }
  `;


const News2 = styled(NewsImg)`
  background-image: url(${NewsImg2});
`;

const News3 = styled(NewsImg)`
  background-image: url(${NewsImg3});
`;

const Line = styled.div`
    min-height: 5px;
    width: 90vw;
    max-width: 350px;
    background: #98272B;
    @media screen and (max-width: 840px) {
        width: 90vw;
  }
`;

const NewsContentWrapper = styled.div`
    width: 90vw;
    max-width: 305px;
    margin: 0 auto;
    padding: 30px 0;
`;

const NewsContentTitle = styled.div`
    font-size: 18px;
`;

const NewsContent = styled.div`
    margin-top: 25px;
    display: flex;
    flex-wrap: wrap;
    font-size: 14px;
    max-width: 305px;
`;

const ViewMore = styled.div`

`;


const Button = styled.div`
    width: 170px;
    height: 60px;
    margin: 5vh auto;
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
export default FourthSection;