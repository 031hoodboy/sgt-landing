import React from 'react';
import styled from '@emotion/styled';
import BackgroundImg from '../../assets/mainsecondsection.png';
import Card1Img from '../../assets/business1.png';
import Card2Img from '../../assets/business2.png';
import Card3Img from '../../assets/business3.png';
import {TitleWrpper, Remark, Title, PageBlockWrapper } from '../../components/PageStyle';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import {Link} from 'react-router-dom';

SwiperCore.use([Navigation, Pagination, Autoplay])


const SecondSection = () => {
    return (
        <Background>
            <PageBlockWrapper>
            <TitleWrpper>
                <Remark>BUSINESS</Remark>
                <Title>사업영역</Title>
            </TitleWrpper>
            <CardWrapper>
                <Link to="/processing-business" style={{textDecoration: "none"}}>
                <Card1>
                    <Card1Background>
                        <CardTitle>정밀가공사업</CardTitle>
                    </Card1Background>
                </Card1>
                </Link>
                <Link to="/manufacture" style={{textDecoration: "none"}}>
                <Card2>
                    <Card2Background>
                        <CardTitle>장비제조사업</CardTitle>
                    </Card2Background>
                </Card2>
                </Link>
                <Link to="/secondary-battery" style={{textDecoration: "none"}}>
                <Card3>
                    <Card3Background>
                        <CardTitle>이차전지소재사업</CardTitle>
                    </Card3Background>
                </Card3>
                </Link>
            </CardWrapper>
            <SwiperWrapper
                    className="banner"
                    spaceBetween={50}
                    slidesPerView={1}
                    autoplay={{ delay: 1000 }}
                >
                    <SwiperSlide>
                        <Link to="/processing-business" style={{textDecoration: "none"}}>
                        <Card1>
                            <Card1Background>
                                <CardTitle>정밀가공사업</CardTitle>
                            </Card1Background>
                        </Card1>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to="/manufacture" style={{textDecoration: "none"}}>
                            <Card2>
                                <Card2Background>
                                    <CardTitle>장비제조사업</CardTitle>
                                </Card2Background>
                            </Card2>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to="/secondary-battery" style={{textDecoration: "none"}}>
                            <Card3>
                                <Card3Background>
                                    <CardTitle>2차전지소재사업</CardTitle>
                                </Card3Background>
                            </Card3>
                        </Link>
                    </SwiperSlide>
                </SwiperWrapper>
            </PageBlockWrapper>
        </Background>
    );
}

const Background = styled.div`
    width: 100vw;
    padding: 10vh 0;
    background: #fff;
    background-image: url(${BackgroundImg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center; 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

`;

const CardWrapper = styled.div`
    display: flex;
    width: 90vw;
    max-width: 1088px;
    justify-content: space-between;
    margin: 5vh auto;
    overflow: hidden;
    @media screen and (max-width: 1183px) {
        display: none;
        width: 90vw;
        justify-content: space-around;
  }
`;

const SwiperWrapper = styled(Swiper)`
    max-width: 354px;
    justify-content: space-between;
    margin: 5vh auto;
    display: none;
    @media screen and (max-width: 1183px) {
        display: flex;
        width: 90vw;
        justify-content: space-around;
  }
`;

const Card1 = styled.div`
    width: 355px;
    height: 450px;
    overflow: hidden;
    border: 1px solid #D8D8D8;
`;

const Card2 = styled(Card1)`
    background-image: url(${Card2Img});

`;

const Card3 = styled(Card1)`
    background-image: url(${Card3Img});
`;

const Card1Background = styled.div`
    min-width: 355px;
    min-height: 450px;
    background-image: url(${Card1Img});
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
`;

const Card2Background = styled(Card1Background)`
    background-image: url(${Card2Img});
`;

const Card3Background = styled(Card1Background)`
    background-image: url(${Card3Img});
`;

const CardTitle = styled.div`
    min-width: 285px;
    padding: 25px;
    color: #fff;
    font-size: 30px;
    font-weight: 600;
    background-color: rgba(0, 0, 0, 0.5);
`;

export default SecondSection;