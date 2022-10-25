import styled from "styled-components";
import { setDimensions } from "utils/mixin";

// const Wrapper = styled.div`
//   display: flex;

//   background-color: ${({ theme }) => theme.color.extremelyLightGray};
// `;

const Footer = styled.footer`
  position: relative;
  width: ${({ theme }) => theme.width.withoutPaddings};
  height: 215px;

  margin: 0 auto;
  flex-shrink: 0;

  background-color: ${({ theme }) => theme.color.extremelyLightGray};
`;

const LogoLike = styled.a`
display: block;
width: 123px;
height: 50px;
margin: 32px 0 0 0;

font-family: 'Montserrat', Arial, sans-serif;
font-weight: 700;
font-size: ${({ theme }) => theme.font.extraLarge};
line-height: 50px;

text-decoration: none;

&:link { color: ${({ theme }) => theme.color.darkBlack}; }
&:visited { color: ${({ theme }) => theme.color.darkBlack}; }
&:hover { color: ${({ theme }) => theme.color.darkBlack}; }
&:active { color: ${({ theme }) => theme.color.darkBlack}; }
`;

const ClarificationParagraph = styled.p`
  margin-bottom: 10px;

  font-size: ${({ theme }) => theme.font.upperBase};
  line-height: 22px;
`;

const SocialBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;

  width: 184px;
`;

const SocialLink = styled.a`
  display: block;
  ${setDimensions(28)};
`;

const DownloadBox = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  width: 228px;
`;


const AppLink = styled.a`
  display: block;
  ${setDimensions(104, 32)};
`;

const SiteInfoDiv = styled.div`
  position: absolute;
  bottom: 35px;
  left: 50%;
  transform: translateX(-50%);

  display: flex;
  gap: 20px;

  line-height: 17px;
  color: ${({ theme }) => theme.color.lightGray};
`;

const SiteInfoAnchor = styled.a`
  text-decoration: none;

  &:link { color: ${({ theme }) => theme.color.lightGray}; }
  &:visited { color: ${({ theme }) => theme.color.lightGray}; }
  &:hover { color: ${({ theme }) => theme.color.lightGray}; }
  &:active { color: ${({ theme }) => theme.color.lightGray}; }
`;

const CheckResourcesBox = styled.div`
  position: absolute;
  right: 100px;
  top: 42px;

  display: flex;
  gap: 31px;
`;

export {
  LogoLike,
  SocialBox,
  DownloadBox,
  ClarificationParagraph,
  SiteInfoDiv,
  SiteInfoAnchor,
  CheckResourcesBox,
  Footer,
  SocialLink,
  AppLink,
};
