import styled from "styled-components";

import {IThemeProps} from "../../../../../styles/theme/";

interface IProps {
  theme: IThemeProps;
}

const gray = ({theme}: IProps) => theme.gray;
const blue = ({theme}: IProps) => theme.blue;

export const Label = styled.label`
  width: 100%;
  font-size: .9rem;
`;

export const LabelContent = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-top: .25rem;
`;

export const Input = styled.input`
  display: flex;
  flex: 1;

  padding: .5rem 2rem .5rem .5rem;
  width: 100%;
  border-radius: 5px;
  outline: none;
  border: 2px solid ${gray};

  transition: border .2s ease;

  &:focus {
    border: 2px solid ${blue};

    ~ figure {
      svg {
        fill: ${blue};
      }
    }
  }
`;

export const FormIcon = styled.figure`
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  padding: 0 .25rem;
  right: .25rem;

  transition: opacity .2s ease;

  svg {
    width: 1.5rem;
    height: 1.5rem;
    fill: ${gray};
    transition: fill .2s ease;
  }
`;
