import styled from "styled-components";
import { CSSProperties } from 'react';
import { setDimensions } from "utils/mixin";

const AnchorHead = styled.a`
  position: relative;
  display: block;
  ${setDimensions(50)}

  margin-right: 20px;

  &::before {
    position: absolute;
    width: 60px;
    height: 50px;
    content: '';
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const SpanHeadCounter = styled.span`
  position: absolute;
  bottom: 28px;
  left: 29px;
  width: 31px;
  height: 21px;
  text-align: center;

  border-radius: 50%;
  background-color: ${({theme}) => theme.color.white};

  font-weight: 600;
  color: ${({theme}) => theme.color.blue};
`;

const IconStyle: CSSProperties = {
  position: 'absolute',
  width: '50px',
  height: '50px',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
}

export {
  AnchorHead,
  SpanHeadCounter,
  IconStyle
};
