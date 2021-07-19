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
    top: calc(30vh + 56px);
    box-shadow:  0px 3px 6px #d9d9d9;
    @media screen and (max-width: 1312px) {
    width: calc(90vw + 3px);
    height: 80px; 
    flex-wrap: wrap;
    top: calc(30vh + 42px); 
    }
    @media screen and (max-width: 1024px) {
        width: calc(90vw + 3px);
        top: calc(23vh); 
    }
`;

export const NavBlock = styled.div`
    width: 10vw;
    height: 58px;
    border-left: 1px solid #D9D9D9;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
    border-bottom: 1px solid #D9D9D9;
    @media screen and (max-width: 1312px) {
    width: 30vw;
    height: 40px; 
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
    width: 80vw;
        font-size: 19px;
        text-align: center;
    }
`;

export const SubTitle3 = styled(Title)`
  font-size: 25px;
  font-weight: 300;
  width: 80vw;
  max-width: 1088px;
  margin: 10vh 0 5vh 0;
  @media screen and (max-width: 780px) {
    width: 80vw;
        font-size: 19px;
        text-align: center;
    }
`;