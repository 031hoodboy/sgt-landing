import React from 'react';
import styled from '@emotion/styled';
import {Link} from 'react-router-dom';

const NavBar = () => {

    return (
        <Navigator>
            <Link to="/" style={{textDecoration: 'none'}}>
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
                <DropWrapper>
                <Link to="/" style={{textDecoration: 'none'}}>
                    <DropContent>회사소개</DropContent>
                </Link>
                <Link to="/" style={{textDecoration: 'none'}}>
                    <DropContent type="trigger">사업영역</DropContent>
                </Link>
                <Link to="/" style={{textDecoration: 'none'}}>
                    <DropContent>설비현황</DropContent>
                </Link>
                <Link to="/" style={{textDecoration: 'none'}}>
                    <DropContent>기술현황</DropContent>
                </Link>
                <Link to="/" style={{textDecoration: 'none'}}>
                    <DropContent>홍보센터</DropContent>
                </Link>
                <Link to="/" style={{textDecoration: 'none'}}>
                    <DropContent>고객지원</DropContent>
                </Link>
                <Link to="/" style={{textDecoration: 'none'}}>
                    <DropContent>공지사항</DropContent>
                </Link>
                </DropWrapper>
                <DropWrapper>
                <Link to="/" style={{textDecoration: 'none'}}>
                    <DropContent>회사소개</DropContent>
                </Link>
                <Link to="/" style={{textDecoration: 'none'}}>
                    <DropContent type="trigger">사업영역</DropContent>
                </Link>
                <Link to="/" style={{textDecoration: 'none'}}>
                    <DropContent>설비현황</DropContent>
                </Link>
                <Link to="/" style={{textDecoration: 'none'}}>
                    <DropContent>기술현황</DropContent>
                </Link>
                <Link to="/" style={{textDecoration: 'none'}}>
                    <DropContent>홍보센터</DropContent>
                </Link>
                <Link to="/" style={{textDecoration: 'none'}}>
                    <DropContent>고객지원</DropContent>
                </Link>
                <Link to="/" style={{textDecoration: 'none'}}>
                    <DropContent>공지사항</DropContent>
                </Link>
                </DropWrapper>
                <DropWrapper>
                <Link to="/" style={{textDecoration: 'none'}}>
                    <DropContent>회사소개</DropContent>
                </Link>
                <Link to="/" style={{textDecoration: 'none'}}>
                    <DropContent type="trigger">사업영역</DropContent>
                </Link>
                <Link to="/" style={{textDecoration: 'none'}}>
                    <DropContent>설비현황</DropContent>
                </Link>
                <Link to="/" style={{textDecoration: 'none'}}>
                    <DropContent></DropContent>
                </Link>
                <Link to="/" style={{textDecoration: 'none'}}>
                    <DropContent>홍보센터</DropContent>
                </Link>
                <Link to="/" style={{textDecoration: 'none'}}>
                    <DropContent>고객지원</DropContent>
                </Link>
                <Link to="/" style={{textDecoration: 'none'}}>
                    <DropContent>공지사항</DropContent>
                </Link>
                </DropWrapper>
            </HeaderDropBlock>
        </Navigator>
    );
};

const Navigator = styled.div`
    display: flex;
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
    padding: 30px 42.5px;
    cursor: pointer;
    color: #000;
    font-size: 18px;
    &:hover {
        color: #930E14;
    }
`;

const DropMenu = styled.div`
    display: flex;
    flex-direction: flex-end;
`;


const HeaderDropBlock = styled.div`
    position: absolute;
    top: 83px;
    width: 100%;
    height: 240px;
    position: fixed;
    background: #fff;
    display: none;
`;

const DropContent = styled(NavContent)`
    padding: 10px 46px;
    font-size: 16px;
`;
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

const DropWrapper = styled.div`
`;
export default NavBar;
