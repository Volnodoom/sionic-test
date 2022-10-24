import { ReactNode } from 'react';
import { ButtonProps } from 'types/components';
import * as S from './button.style';

interface BtnProps extends ButtonProps {
  children: ReactNode,
  type?: 'button' | 'submit' | 'reset',
  onClick?: () => void,
  disabled?: boolean,
}

const Button = ({ children, ...props }: BtnProps ) => {
  return (
    <S.Button {...props}>{children}</S.Button>
  );}

export default Button;
