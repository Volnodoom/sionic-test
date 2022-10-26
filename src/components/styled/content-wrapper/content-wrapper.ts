import styled from "styled-components";
import { ContentWrapperProps } from "types/components";

const ContentWrapper = styled.main<ContentWrapperProps>`
  position: relative;
  margin-bottom: ${({ $bottom }) => `${$bottom}px` };
  width: ${({ theme }) => theme.width.contentSection };
  min-height: 600px;
`;

export default ContentWrapper;
