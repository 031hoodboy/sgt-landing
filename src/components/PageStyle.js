import styled from '@emotion/styled';
import {css} from '@emotion/css';
import { SMALL_SCREEN_THRESHOLD } from "../constant";

export const PageWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const PageBlockWrapper = styled.div`
  /* width: 80vw; */
  ${({ maxWidth = 1080 }) =>
    maxWidth &&
    css`
      max-width: ${maxWidth}px;
    `}
  margin: 0px auto;
  padding: 24px 64px;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  @media screen and (max-width: ${({ threshold }) =>
      threshold || SMALL_SCREEN_THRESHOLD}px) {
    padding: 0;
  }
`;

export const PageBlockWithTitleContentWrapper = styled.div`
  display: flex;
  @media screen and (max-width: ${({ threshold }) =>
      threshold || SMALL_SCREEN_THRESHOLD}px) {
    flex-direction: column;
  }
`

export const PageBlockWithTitle = styled(PageBlockWrapper)`
  flex-direction: column;
`

export const PageBlock = (props) => {
  if(!props.title)
    return <PageBlockWrapper {...props} />
  return <PageBlockWithTitle {...props}>
    <Title>{props.title}</Title>
    <PageBlockWithTitleContentWrapper {...props}>
      {props.children}
    </PageBlockWithTitleContentWrapper>
  </PageBlockWithTitle>
}

export const HomeBlock = styled.div`
  padding: 0 10vw;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LayoutRow = styled(PageBlockWithTitleContentWrapper)`
  flex: 1;
`

export const PageColumn = styled.div`
  flex: ${({ width = 10 }) => width / 10};
  display: flex;
  flex-direction: column;
`;

export const Divider = styled.div`
  padding: 12px;
  @media screen and (max-width: 765px) {
    padding: 0;
  }
`;

export const TitleRow = styled.div`
  margin-bottom: 24px;
`;


export const TitleWrpper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const PageTitleWrpper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 15vh;
    @media screen and (max-width: ${({ threshold }) =>
      threshold || SMALL_SCREEN_THRESHOLD}px) {
    margin-top: 10vh;
  }
`;

export const Remark = styled.div`
    color: #98272B;
    font-size: 20px;
    @media screen and (max-width: ${({ threshold }) =>
      threshold || SMALL_SCREEN_THRESHOLD}px) {
    font-size: 16px;
  }
`;

export const Title = styled.div`
    font-size: 38px;
    font-weight: 600;
    margin: 15px 0 22px 0; 
    @media screen and (max-width: ${({ threshold }) =>
      threshold || SMALL_SCREEN_THRESHOLD}px) {
    font-size: 30px;
  }
`;

export const SubTitle = styled.div`
    font-size: 22px;
    @media screen and (max-width: ${({ threshold }) =>
      threshold || SMALL_SCREEN_THRESHOLD}px) {
    width: 90vw;
    font-size: 18px;
    text-align: center;
  }
`;

export const PageTitle = styled(Title)`
    border-bottom: 2px solid #851F1C;
    padding: 10px 5px;
    @media screen and (max-width: ${({ threshold }) =>
      threshold || SMALL_SCREEN_THRESHOLD}px) {
    font-size: 20px;
  }
`;


export const NavBarWrapper = styled.div`
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
    @media screen and (max-width: 1312px) {
    height: 80px; 
    flex-wrap: wrap;
    top: calc(25vh + 42px); 
    }
    @media screen and (max-width: 1024px) {
        width: calc(90vw + 2px);
        top: calc(23vh); 
    }
`;

export const NavBlock = styled.div`
    width: 15vw;
    height: 58px;
    border-left: 1px solid #D9D9D9;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
    @media screen and (max-width: 1312px) {
    width: calc(30vw - 1px);
    height: 40px; 
    }
    @media screen and (max-width: 1024px) {
        width: 45vw;
    }
`;

export const SelectNavBlock = styled(NavBlock)`
    background: #930E14;
    color: #fff;
    border-left: 1px solid #930E14;
`;

export const PageSubTitle = styled.div`
  font-size: 30px;
  text-align: center;
  padding: 5vh 0;
  margin: 0 auto;
  @media screen and (max-width: ${({ threshold }) =>
      threshold || SMALL_SCREEN_THRESHOLD}px) {
        width: 90vw;
    font-size: 19px;
  }
`;

export const SubTitle2 = styled(Title)`
  font-size: 25px;
  font-weight: 300;
  text-align: center;
  @media screen and (max-width: 780px) {
    width: 90vw;
        font-size: 18px;
        text-align: center;
    }
`;

export const Line = styled.div`
width: 100%;
border-bottom: 1px solid #D9D9D9;
display: none;
@media screen and (max-width: 1312px) {
    display: flex;
}
`;

export const Bar = styled.div`
width: 1048px;
height: 52px;
padding: 0 20px;
background: #F2F2F2;
margin: 10vh auto 5vh auto;
color: #930E14;
display: flex;
align-items: center;
font-size: 24px;
text-align: center;
@media screen and (max-width: 1024px) {
    padding: 0 10px;
    width: calc(90vw - 20px);
    height: 2vh;
    min-height: 30px;
    margin: 5vh 0;
    font-size: 16px;
}
`;

export const SubTitle3 = styled(Title)`
  font-size: 25px;
  font-weight: 300;
  width: 90vw;
  max-width: 1088px;
  text-align: center;
  margin: 10vh auto 5vh auto;
  @media screen and (max-width: 780px) {
    width: 90vw;
        font-size: 19px;
        text-align: center;
    }
`;
