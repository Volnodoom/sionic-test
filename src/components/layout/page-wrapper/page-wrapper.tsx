import { ReactNode } from "react";
import Footer from "../footer/footer";
import Header from "../header/header";
import * as S from "./page-wrapper.style";

type PageWrapperProps = {
  children: ReactNode,
}

const PageWrapper = ({children}: PageWrapperProps) => {
  return(
    <S.Wrapper>
      <S.GridBlock>
        <S.FirstBlockWrapper>
          <Header />
          {children}
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
