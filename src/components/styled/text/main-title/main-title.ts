import styled from "styled-components";
import { MainTitleProps } from "types/components";

const MainTitle = styled.h2<MainTitleProps>`
  margin: 0;
  margin-bottom: ${({ $bottom }) => `${$bottom}px` };

  font-size: ${({ theme }) => theme.font.medium };
  line-height: 23px;
  font-weight: 700;
`;

export default MainTitle;
