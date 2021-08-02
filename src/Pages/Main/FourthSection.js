import React from 'react';
import styled from '@emotion/styled';
import {keyframes} from '@emotion/react';
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


const FourthSection = () => {
    const history = useHistory();

    return (
        <Background>
            <PageBlockWrapper>
                <TitleWrpper>
                    <Remark>NEWS</Remark>
                    <Title>뉴스</Title>
                </TitleWrpper>
                <NewsCardWrapper>
                    <NewsCardBlock>
                        <NewsImg></NewsImg>
                        <Line/>
                        <NewsContentWrapper>
                        <NewsContentTitle>산업통상자원부 사업 재편 기업 승인</NewsContentTitle>
                        <NewsContent>(주)에스지티가 2021년 산업통상자원부 사업 재편 기업승인을 받았습니다. 향후 5년간 미래차, 유망신산업 분야에 투자하여 수익성을 개선하고 혁신이 가속화 될 것으로 기대됩니다.(주)에스지티가 2021년 산업통상자원부 사업 재편 기업승인을 받았습니다. 향후 5년간 …</NewsContent>
                        </NewsContentWrapper>
                    </NewsCardBlock>
                    <NewsCardBlock>
                        <News2/>
                        <Line/>
                        <NewsContentWrapper>
                        <NewsContentTitle>산업통상자원부 사업 재편 기업 승인</NewsContentTitle>
                        <NewsContent>(주)에스지티가 2021년 산업통상자원부 사업 재편 기업승인을 받았습니다. 향후 5년간 미래차, 유망신산업 분야에 투자하여 수익성을 개선하고 혁신이 가속화 될 것으로 기대됩니다.(주)에스지티가 2021년 산업통상자원부 사업 재편 기업승인을 받았습니다. 향후 5년간 …</NewsContent>
                        </NewsContentWrapper>
                    </NewsCardBlock>
                    <NewsCardBlock>
                        <News3/>
                        <Line/>
                        <NewsContentWrapper>
                        <NewsContentTitle>산업통상자원부 사업 재편 기업 승인</NewsContentTitle>
                        <NewsContent>(주)에스지티가 2021년 산업통상자원부 사업 재편 기업승인을 받았습니다. 향후 5년간 미래차, 유망신산업 분야에 투자하여 수익성을 개선하고 혁신이 가속화 될 것으로 기대됩니다.(주)에스지티가 2021년 산업통상자원부 사업 재편 기업승인을 받았습니다. 향후 5년간 …</NewsContent>
                        </NewsContentWrapper>
                    </NewsCardBlock>
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

const NewsImg = styled.div`
    min-height: 198px;
    max-width: 350px;
    background-image: url(${NewsImg1});
    background-size: 101%;
    background-repeat: no-repeat;
    background-position: center; 
    display: flex;
    flex-direction: column;
    transform: scale(1);
    transition: all 0.3s ease-in-out;  
    &:hover{
        background-size: 105%;
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