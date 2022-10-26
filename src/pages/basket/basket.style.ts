import { Button, ContentWrapper } from "components/styled";
import styled from "styled-components";
import { setDimensions, setFontValues } from "utils/mixin";

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

const BasketCatalog = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 40px 56px 40px 60px;
  padding-bottom: 40px;
  width: ${({ theme }) => theme.width.contentSection };

  border: ${({ theme }) => `1px solid ${theme.color.lightBlue}` };
  border-radius: 0 0 20px;
  border-top-style: none;

  &:empty {
    height: 450px;
  }

  &::before,
  &::after {
    position: absolute;
    content: '';
    top: -20px;
    ${setDimensions(1, 20)};

    background-color: ${({ theme }) => theme.color.lightBlue };
  }

  &::before {
    left: -1px;
  }

  &::after {
    right: -1px;
  }
`;

export {
  BasketWrapper,
  ResetButton,
  BasketCatalog,
};
