import React from 'react';
import styled from '@emotion/styled';
import {Link} from 'react-router-dom';
import HeaderNav from './HeaderNav';

const NavBar = () => {

    return (

        <Navigator>
            <Link to="/greet" style={{textDecoration: 'none'}}>
                <NavContent>회사소개</NavContent>
            </Link>
            <Link to="/" style={{textDecoration: 'none'}}>
                <NavContent type="trigger">사업영역</NavContent>
            </Link>
            <Link to="/" style={{textDecoration: 'none'}}>
                <NavContent>설비현황</NavContent>
            </Link>
            <Link to="/" style={{textDecoration: 'none'}}>
                <NavContent>기술현황</NavContent>
            </Link>
            <Link to="/" style={{textDecoration: 'none'}}>
                <NavContent>홍보센터</NavContent>
            </Link>
            <Link to="/" style={{textDecoration: 'none'}}>
                <NavContent>고객지원</NavContent>
            </Link>
            <Link to="/" style={{textDecoration: 'none'}}>
                <NavContent>공지사항</NavContent>
            </Link>
            <HeaderDropBlock>
                <HeaderNav/>
            </HeaderDropBlock> 
        </Navigator>
        
    );
};

const Navigator = styled.div`
    display: flex;
    justify-content: space-around;
    @media screen and (max-width: 1024px) {
    display: none;
  }
  &:hover {
        color: #5d6b83;
        >div {
          display: block;
      }
    }
`;

const NavContent = styled.div`
    width: 11vw;
    padding: 30px 0;
    max-width: 130px;
    min-width: 100px;
    text-align: center;
    cursor: pointer;
    color: #000;
    font-size: 18px;
    &:hover {
        color: #930E14;
    }
`;

const HeaderDropBlock = styled.div`
    border-top: 1px solid #D8D8D8;
    position: absolute;
    top: 81px;
    left: 0;
    width: 100%;
    height: 240px;
    position: fixed;
    background: #fff;
    display: none;
`;

// const DropContent = styled(NavContent)`
//     padding: 10px 46px;
//     font-size: 16px;
// `;

// const Ul = styled.div`
//     display: none;
//     position: absolute;
//     margin-top: 45px;
//     padding: 20px 20px 10px 20px;
//     text-decoration: none;
//     flex-direction: flex-end;
//     background: #fff;
//     border: 1px solid #e2e8f0;
//     border-radius: 3px;
// `;

// const Li = styled.div`
//     text-decoration: none;
//     margin-bottom: 10px;
// `;

// const DropWrapper = styled.div`
// `;
export default NavBar;
