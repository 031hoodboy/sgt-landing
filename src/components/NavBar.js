import React from 'react';
import styled from '@emotion/styled';
import {Link, withRouter} from 'react-router-dom';
import HeaderNav from './HeaderNav';
import {css} from '@emotion/react';

export default withRouter(({location: {pathname}}) => (
        <Navigator>
            <Link to="/greet" style={{textDecoration: 'none'}}>
                <NavContent 
                    current={
                            pathname === "/greet" 
                            || pathname === "/vision" 
                            || pathname === "/history" 
                            || pathname === "/way-to-come"}>
                회사소개</NavContent>
            </Link>
            <Link to="/processing-business" style={{textDecoration: 'none'}}>
                <NavContent current={
                    pathname === "/processing-business"
                    || pathname ==="/manufacture"
                    || pathname ==="/secondary-battery"
                }>사업영역</NavContent>
            </Link>
            <Link to="/processing" style={{textDecoration: 'none'}}>
                <NavContent current={
                    pathname === "/processing"
                    || pathname ==="/measure"
                    || pathname ==="/production"
                }>설비현황</NavContent>
            </Link>
            <Link to="/introduce" style={{textDecoration: 'none'}}>
                <NavContent current={
                    pathname === "/introduce"
                    || pathname ==="/patent"
                }>기술현황</NavContent>
            </Link>
            <Link to="/news" style={{textDecoration: 'none'}}>
                <NavContent current={
                    pathname === "/news"
                    || pathname ==="/catalogue"
                }>홍보센터</NavContent>
            </Link>
            <Link to="/quote-contact" style={{textDecoration: 'none'}}>
                <NavContent current={
                    pathname === "/quote-contact"
                    || pathname ==="/recruitment"
                }>고객지원</NavContent>
            </Link>
            <HeaderDropBlock>
                <HeaderNav/>
            </HeaderDropBlock> 
        </Navigator>
        
    )
);

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
    font-weight: 600;
    font-size: 18px;
    &:hover {
        color: #930E14;
    }
    ${props => props.current && css`
        color: #930E14;
    `}
`;

const HeaderDropBlock = styled.div`
    border-top: 1px solid #D8D8D8;
    position: absolute;
    top: 81px;
    left: 0;
    width: 100%;
    height: 190px;
    position: fixed;
    background: #fff;
    display: none;
    box-shadow:  0px 3px 6px rgba(0, 0, 0, 0.1);

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
