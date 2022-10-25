import { CSSProperties } from "react";
import styled from "styled-components";
import { setDimensions } from "utils/mixin";

const Header = styled.header`
  display: flex;
  margin-bottom: 42px;

  width: 916px;
`;

const LogoLike = styled.a`
  width: 103px;
  height: 43px;
  margin-right: 25px;

  font-weight: 700;
  font-size: ${({ theme }) => theme.font.large};
  line-height: 43px;

  text-decoration: none;

  &:link { color: ${({ theme }) => theme.color.darkBlack}; }
  &:visited { color: ${({ theme }) => theme.color.darkBlack}; }
  &:hover { color: ${({ theme }) => theme.color.darkBlack}; }
  &:active { color: ${({ theme }) => theme.color.darkBlack}; }
`;

const PositionSpan = styled.span`
  position: relative;
  margin: 15px 20px 0 0;
  ${setDimensions(140, 20)};

  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

const IconStyle: CSSProperties = {
  marginTop: '15px',
  marginRight: '5px',
  width: '20px',
  height: '20px',

}

export {
  LogoLike,
  PositionSpan,
  IconStyle,
  Header,
};
