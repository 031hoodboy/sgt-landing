import React, {Component} from 'react'
import axios from 'axios'
import ReactPaginate from 'react-paginate';
import styled from '@emotion/styled';
import NewsImg1 from '../../assets/newscard1.png';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            offset: 0,
            data: [],
            perPage: 3,
            currentPage: 0
        };
        this.handlePageClick = this
            .handlePageClick
            .bind(this);
    }
    receivedData() {
        axios
            .get(`https://www.sgtapi.tk/news/newslist.do`)
            .then(res => {

                const data = res.data;
                const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
                const postData = slice.map(newscards => 
                <NewsCardBlock key={newscards.idx} 
                    // onClick={() =>
                    //     history.push(
                    //     {
                    //         pathname: `/news-info/${newscards.idx}`,
                    //         props: {id: newscards.idx}
                    //     })}    
                >
                    <NewsImg></NewsImg>
                    <Line/>
                    <NewsContentWrapper>
                    <NewsContentTitle>{newscards.news_sub}</NewsContentTitle>
                    {newscards.idx}
                    <NewsContent>{newscards.newscon}</NewsContent>
                    </NewsContentWrapper>
                </NewsCardBlock>
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
            <div>
                {this.state.postData}
                <ReactPaginate
                    previousLabel={"prev"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={this.state.pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={this.handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}/>
            </div>

        )
    }
}



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

const NewsCardWrapper = styled.div`
    display: flex;
    width: 90vw;
    max-width: 1088px;
    margin: 0 auto;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 10vh 0;
    @media screen and (max-width: 880px) {
        justify-content: space-around;
        padding: 0;
        margin-bottom: 10vh;
  }
`;
 
const NewsCardBlock = styled.div`
    max-width: 350px;
    border: 1px solid #D8D8D8;
    margin-top: 5vh;
`;

const NewsImg = styled.div`
    min-height: 198px;
    max-width: 350px;
    background: #fff;
    background-image: url(${NewsImg1});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center; 
    display: flex;
    align-items: center;
    flex-direction: column;
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
`;

const NewsContent = styled.div`
    margin-top: 25px;
    display: flex;
    flex-wrap: wrap;
    font-size: 14px;
    max-width: 305px;
`;

