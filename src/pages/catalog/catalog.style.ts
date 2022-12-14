import { Button } from "components/styled";
import styled from "styled-components";
import { setDimensions } from "utils/mixin";

const CardGallery = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px 20px;

  width: ${({ theme }) => theme.width.contentSection };

  margin-bottom: 30px;
`;

const SortingSettings = styled.span`
  position: absolute;
  top: 7px;
  left: 299px;

  color: ${({ theme }) => theme.color.blue };
  font-size: ${({ theme }) => theme.font.small };
  line-height: 15px;
  font-weight: 600;
`;

const ShowMoreButton = styled(Button).attrs((props) => ({
  $back: props.theme.color.extremelyLightBlue,
  $radius: '51px',
  $color: props.theme.color.gray,
  $padding: '15px 43px',
  type: 'button',

}))`
  position: relative;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  ${setDimensions(292, 50)};

  font-family: inherit;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
`;

export {
  SortingSettings,
  CardGallery,
  ShowMoreButton,
}
