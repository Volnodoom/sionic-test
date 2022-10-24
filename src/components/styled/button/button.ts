import styled from 'styled-components';
import { ButtonProps } from 'types/components';

const Button = styled.button<ButtonProps>`
  display: flex;
  align-items: center;

  max-width: 100%;
  margin: 0;
  padding: ${({ $padding }) => $padding || '2px 10px'};

  font-family: inherit;
  font-size: ${({ $size, theme}) => $size || theme.font.base};
  line-height: 20px;
  font-weight: 600;

  color: ${({ $color, theme }) => $color || theme.color.white};
  background-color: ${({ $back, theme }) =>  $back || theme.color.white};
  border: ${({ $border }) => $border || 'none'};
  border-radius: ${({ $radius }) => $radius || '40px'};
  cursor: pointer;

  &:focus,
  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }
`;

export default Button;
