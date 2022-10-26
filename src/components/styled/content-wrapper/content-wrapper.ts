import styled from "styled-components";
import { ContentWrapperProps } from "types/components";

const ContentWrapper = styled.main<ContentWrapperProps>`
  position: relative;
  width: ${({ theme }) => theme.width.contentSection };
  margin-bottom: ${({ $bottom }) => `${$bottom}px` };
`;

export default ContentWrapper;
