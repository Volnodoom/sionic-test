import styled from "styled-components";
import { ButtonTypesProp } from "types/components";

const IconButton = styled.button.attrs<ButtonTypesProp>({
  type: 'button',
})`
  margin: 0;
  padding: 0;

  background-color: ${({ theme }) => theme.color.white};
  border: none;
  border-radius: 0;
  cursor: pointer;

  &:focus,
  &:hover  {
    opacity: 0.5;
  }

  &:active > svg > path {
    stroke: ${({ theme }) => theme.color.pink };
  }
`;

export default IconButton;
