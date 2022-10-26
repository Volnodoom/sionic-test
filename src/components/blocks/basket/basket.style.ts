import { Button, ContentWrapper } from "components/styled";
import styled from "styled-components";
import { setFontValues } from "utils/mixin";

const BasketWrapper = styled(ContentWrapper)`
  min-height: 600px;
`;

const ResetButton = styled(Button).attrs(({ theme }) => ({
  type: 'button',
  $color: theme.color.pink,
  $radius: '0px',
}))`
  position: absolute;
  top: 4px;
  left: 113px;

  ${({ theme }) => setFontValues(theme.font.upperBase, 19)}
`;

export {
  BasketWrapper,
  ResetButton,
};
