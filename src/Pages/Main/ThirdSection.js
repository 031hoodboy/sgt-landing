import React from 'react';
import styled from '@emotion/styled';
import {TitleWrpper, Remark, Title, PageBlockWrapper } from '../../components/PageStyle';
import Tech1Img from '../../assets/tech1.png';
import Tech2Img from '../../assets/tech2.png';
import {Link} from 'react-router-dom';

const ThirdSection = () => {
    return (
        <Background>
            <PageBlockWrapper>
                <TitleWrpper>
                    <Remark>TECHNOLOGY</Remark>
                    <Title>설비 및 기술 현황</Title>
                </TitleWrpper>
                <CardWrapper>
                    <Link to="/processing" style={{textDecoration: "none"}}>
                        <Card1>
                        <Card1Background>
                            <CardTitle>설비 현황</CardTitle>
                        </Card1Background>
                        </Card1>
                    </Link>
                    <Link to="/introduce" style={{textDecoration: "none"}}>
                        <Card2>                    
                            <Card2Background>
                            <CardTitle>기술 현황</CardTitle>
                            </Card2Background>
                        </Card2>
                    </Link>
                </CardWrapper>
            </PageBlockWrapper>
        </Background>
    );
}

const Background = styled.div`
    width: 100vw;
    padding: 10vh 0;
    background: #FCF8F8;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center; 
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
`;

const CardWrapper = styled.div`
    display: flex;
    width: 90vw;
    max-width: 1088px;
    justify-content: space-between; 
    flex-wrap: wrap;
    @media screen and (max-width: 999px) {
        justify-content: space-around; 
  }
`;
 

const Card1 = styled.div`
    max-width: 536px;
    min-width: 450px;
    height: 198px;
    width: 38vw;
    margin: 0 auto;
    overflow: hidden;
    margin-top: 5vh;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 840px) {
        width: 90vw;
        height: 178px;
        min-width: 0;
  }
`;

const Card2 = styled(Card1)`

`;


const Card1Background = styled.div`
    max-width: 530px;
    min-width: 450px;
    height: 198px;
    width: 38vw;
    background-image: url(${Tech1Img});
    background-size: 120%;
    background-repeat: no-repeat;
    background-position: center; 
    display: flex;
    transform: scale(1);
    transition: all 0.3s ease-in-out;  
    &:hover{
        background-size: 125%;
    }
`;

const Card2Background = styled(Card1Background)`
    background-image: url(${Tech2Img});
`;


const CardTitle = styled.div`
    color: #fff;
    font-size: 30px;
    font-weight: 600;
    width: 100%;
    max-height: 68px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
    @media screen and (max-width: 840px) {
        padding-top: 10px;

  }
`;

export default ThirdSection;