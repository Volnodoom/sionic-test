import { CatalogLabelColor } from "constants/components.const";
import styled from "styled-components";
import { ColoRangeProps } from "types/components";

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;

  width: ${({ theme }) => theme.width.contentSection };
  margin-bottom: 20px;
`;

const Input = styled.input.attrs({
  type: "checkbox",
  className: 'visually-hidden',
})<ColoRangeProps>`

  &:checked + .filtration-checkbox {
    background-color: ${({ $numericCalor, theme }) =>  theme.color[CatalogLabelColor[$numericCalor]] };
    color: ${({ theme }) => theme.color.white };
  }
`;

const Label = styled.label.attrs({className: 'filtration-checkbox'})<ColoRangeProps>`
  padding: 2px 10px;

  border: ${({ $numericCalor, theme }) =>  `1px solid ${theme.color[CatalogLabelColor[$numericCalor]]}` };
  border-radius: 41px;

  font-weight: 600;
  color: ${({ theme }) => theme.color.darkBlack };

  cursor: pointer;
`;

export {
  Form,
  Input,
  Label,
}
