import { Outlet } from "react-router-dom";
import Footer from "../footer/footer";
import Header from "../header/header";
import * as S from "./page-wrapper.style";

const PageWrapper = () => {
  return(
    <S.Wrapper>
      <S.GridBlock>
        <S.FirstBlockWrapper>
          <Header />
          <Outlet />
        </S.FirstBlockWrapper>
        <S.Aside />
      </S.GridBlock>
      <S.FooterWrapper>
        <Footer />
      </S.FooterWrapper>
    </S.Wrapper>
  )
}

export default PageWrapper;
