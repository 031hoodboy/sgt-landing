import React from 'react';
import styled from '@emotion/styled';
import BackgroundImg from '../../assets/mainsecondsection.png';
import Card1Img from '../../assets/business1.png';
import Card2Img from '../../assets/business2.png';
import Card3Img from '../../assets/business3.png';
import {TitleWrpper, Remark, Title, SubTitle, PageBlockWrapper } from '../../components/PageStyle';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";

SwiperCore.use([Navigation, Pagination, Autoplay])


const SecondSection = () => {
    return (
        <Background>
            <PageBlockWrapper>
            <TitleWrpper>
                <Remark>BUSINESS</Remark>
                <Title>사업영역</Title>
                <SubTitle>고객 만족을 최우선으로 혁신적 기술을 적용하여 세계적 품질을 추구합니다.</SubTitle>
            </TitleWrpper>
            <CardWrapper>
                <Card1/>
                <Card2/>
                <Card3/>
            </CardWrapper>
            <SwiperWrapper
                    className="banner"
                    spaceBetween={50}
                    slidesPerView={1}
                    autoplay={{ delay: 1000 }}
                >
                    <SwiperSlide><Card1/></SwiperSlide>
                    <SwiperSlide><Card2/></SwiperSlide>
                    <SwiperSlide><Card3/></SwiperSlide>
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
    display: flex;
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
    min-width: 355px;
    min-height: 450px;
    background: #fff;
    background-image: url(${Card1Img});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center; 
    display: flex;
    align-items: center;
    flex-direction: column;
    transition: all .3s ease-in-out;
    & :hover{
        background-size: 110%;
    }
`;

const Card2 = styled(Card1)`
    background-image: url(${Card2Img});

`;

const Card3 = styled(Card1)`
    background-image: url(${Card3Img});
`;
export default SecondSection;