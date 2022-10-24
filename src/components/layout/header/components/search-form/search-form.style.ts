import { Button } from 'components/styled';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 468px;
  height: 50px;
  margin-right: 16px;

  border: ${({theme}) => `1px solid ${theme.color.extremelyLightBlue}`};
  border-radius: 36px;
`;

const Input = styled.input`
  width: 340px;
  margin-left: 20px;

  border: none;

  text-overflow: clip;

  font-family: inherit;
  font-size: ${({theme}) => theme.font.upperBase};
  line-height: 19px;
`;

const SearchFormButton = styled(Button).attrs({type: 'submit'})`
  width: 94px;
  height: 42px;
  margin-right: 4px;
`;

export {
  Form,
  Input,
  SearchFormButton
};
