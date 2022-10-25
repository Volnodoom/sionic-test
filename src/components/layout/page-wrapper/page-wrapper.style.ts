import styled, { css } from "styled-components";
import Advertizing from "../advertizing/advertizing";

const contentWidth = css`
  ${({ theme }) => theme.width.contentSection}
`;

const asideWidth = css`
  ${({ theme }) => theme.width.advertizement}
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

// content-start - does not reflect an actual content but it is combination of a header and a content
const GridBlock = styled.div`
  width: ${({ theme }) => theme.width.page};
  margin: 0 auto;
  padding: ${({ theme }) => ` ${theme.padding.pageTop} ${theme.padding.pageRight} 0 ${theme.padding.pageLeft}` };

  display: grid;
  grid-template-columns: [content-start] ${contentWidth} [content-end] ${asideWidth};
  grid-template-rows: [content-start] auto auto [content-end];
  column-gap: ${({ theme }) => theme.padding.pageBetween };

  background-color: ${({ theme }) => theme.color.white };
`;

const FirstBlockWrapper = styled.div`
  grid-area: content;
`;

const Aside = styled(Advertizing)`
  position:relative;

  grid-column: content-end/3;
  grid-row: content;

  &::before {
    position: absolute;
    content: '';
    top: 0;
    left: 0;

    width: 1px;
    height: 100%;

    background-color: ${({ theme }) => theme.color.extremelyLightBlue };
  }
`;

const FooterWrapper = styled.div`
  margin: 0 auto;
  padding: ${({ theme }) => `0 ${theme.padding.pageRight} 0 ${theme.padding.pageLeft}` };

  background-color: ${({ theme }) => theme.color.extremelyLightGray};
`;

export {
  Wrapper,
  GridBlock,
  FirstBlockWrapper,
  Aside,
  FooterWrapper,
};
