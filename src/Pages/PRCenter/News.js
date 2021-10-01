
import React, {Component} from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import {Link} from 'react-router-dom';
import './Pagenation.css'
import {PageWrapper} from '../../components/PageStyle';
import BackgroundImg from '../../assets/prbackground.png';
import {PageTitleWrpper, PageTitle} from '../../components/PageStyle';
import styled from '@emotion/styled';
import axios from 'axios';
import ReactPaginate from 'react-paginate';

export default class News extends Component {

    constructor(props) {
        super(props);
        this.state = {
            offset: 0,
            data: [],
            perPage: 6,
            currentPage: 0
        };
        this.handlePageClick = this
            .handlePageClick
            .bind(this);
    }
    
    receivedData() {
        axios
            .get(`https://www.sgtapi.co.kr/news/newslist.do`)
            .then(res => {
                const data = res.data;
                const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
                const postData = slice.map(newscards => 
                    <Link to={{pathname: `/news-info/${newscards.idx}`, props: {id: newscards.idx}}} style={{textDecoration: "none", color: "#000"}}>
                        <NewsCardBlock key={newscards.idx} >
                        <NewsImg src={"https://sgtapi.co.kr" + newscards?.care_image_list?.[0].url} alt=""/>
                        <Line/>
                        <NewsContentWrapper>
                        <NewsContentTitle>{newscards.news_sub}</NewsContentTitle>
                        <NewsContent>{newscards.newscon}</NewsContent>
                        </NewsContentWrapper>
                    </NewsCardBlock>
                </Link>
                )

                this.setState({
                    pageCount: Math.ceil(data.length / this.state.perPage),
                   
                    postData
                })
            });
    }
    handlePageClick = (e) => {
        const selectedPage = e.selected;
        const offset = selectedPage * this.state.perPage;
        this.setState({
            currentPage: selectedPage,
            offset: offset
        }, () => {
            this.receivedData()
        });

    };

    componentDidMount() {
        this.receivedData()
    }
    render() {
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
            </PageTitleWrpper>
            <NewsCardWrapper>
                <CardWrapper>
                    {this.state.postData}
                </CardWrapper>
                <Paginate>
                    <ReactPaginate
                        previousLabel={"<"}
                        nextLabel={">"}
                        breakLabel={"..."}
                        breakClassName={"break-me"}
                        pageCount={this.state.pageCount}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={5}
                        onPageChange={this.handlePageClick}
                        containerClassName={"pagination"}
                        subContainerClassName={"pages pagination"}
                        activeClassName={"active"}
                    />
                </Paginate>
            </NewsCardWrapper>
                
            <Footer/>
        </PageWrapper>
    );
}
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

const NewsCardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    padding: 10vh 0;
    @media screen and (max-width: 880px) {
        justify-content: space-around;
        padding: 3vh 0 20vh 0;
  }
`;
 
const NewsCardBlock = styled.div`
    max-width: 350px;
    border: 1px solid #D8D8D8;
    margin-bottom: 5vh;
`;

const NewsImg = styled.img`
    height: 198px;
    max-width: 350px;
    background-size: 100%;
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
    width: 80vw;
    max-width: 305px;
    margin: 0 auto;
    padding: 30px 0;
`;

const NewsContentTitle = styled.div`
    font-size: 18px;
    height: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

const NewsContent = styled.div`
    height: 100px;
    margin-top: 25px;
    display: flex;
    flex-wrap: wrap;
    font-size: 14px;
    max-width: 305px;
    overflow: hidden;
    text-overflow: ellipsis;
`;

const Paginate = styled.div`
    padding: 3vh auto 5vh auto;
    cursor: pointer;
`;

const CardWrapper = styled.div`
    display: flex;
    width: 90vw;
    max-width: 1088px;
    margin: 0 auto;
    justify-content: space-around;
    flex-wrap: wrap;
    @media screen and (max-width: 880px) {
        justify-content: space-around;
  }
`;
