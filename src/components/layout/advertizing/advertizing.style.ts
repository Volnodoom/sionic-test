import styled, { css } from "styled-components";
import { setDimensions, setFontValues } from "utils/mixin";
import SpecialOffer from "./components/special-offer/special-offer";
import AdvOne from "assets/img/jpg/adv-1.jpg"
import AdvTwo from "assets/img/jpg/adv-2.jpg"

const linkFunctionality = css`
  position: relative;
  display: block;

  ${setDimensions(311, 168)};
  border-radius: 20px;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: ${({ theme }) => theme.width.advertizement };
`;

const Offer = styled(SpecialOffer)`
  margin-bottom: 33px;
`;

const AdvGalleryWrapper = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const CardInfo1 = styled.a`
  ${linkFunctionality};
  background-image: url(${AdvOne})
`;

const CardInfo2 = styled.a`
  ${linkFunctionality};
  background-image: url(${AdvTwo})
`;

const CardTitle = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  margin: 0;
  width: 167px;

  color: ${({ theme }) => theme.color.white};
  ${({ theme }) => setFontValues(theme.font.medium, 23)};
  font-weight: 700;

  text-align: center;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export {
  ContentWrapper,
  Offer,
  AdvGalleryWrapper,
  CardInfo1,
  CardInfo2,
  CardTitle,
}
