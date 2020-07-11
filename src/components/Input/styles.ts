import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  hasError: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #9b9a98;
  border-radius: 10px;
  padding: 16px;
  width: 100%;
  display: flex;
  align-items: center;
  color: #f4ede8;
  border: 2px solid #9b9a98;

  & + div {
    margin-top: 8px;
  }

  ${props =>
    props.hasError &&
    css`
      border-color: #c53030;
    `}

  ${props =>
    props.isFocused &&
    css`
      color: #17222d;
      border-color: #17222d;
    `}

  ${props =>
    props.isFilled &&
    css`
      color: #17222d;
    `}



  input {
    background: transparent;
    flex: 1;
    border: 0;
    color: #fff;

    &::placeholder {
      color: #f4ede8;
    }
  }

  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;
  color: #f4ede8;

  svg {
    margin: 0;
  }

  span {
    background: #c53030;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
