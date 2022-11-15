import styled from "styled-components";

import { IThemeProps } from "../../../styles/theme";

interface IMaterialItemStyledProps {
  theme: IThemeProps;
}

const gray = ({theme}: IMaterialItemStyledProps) => theme.gray;
const blue = ({theme}: IMaterialItemStyledProps) => theme.blue;
const white = ({theme}: IMaterialItemStyledProps) => theme.white;

export const Item = styled.label`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  column-gap: 1rem;
  padding: 1rem;
  width: 100%;
  cursor: pointer;
`;

export const Input = styled.input`
  position: absolute;
  z-index: -1050;
  opacity: 0;
  pointer-events: none;

  &:checked {
    ~ svg:nth-of-type(1) {
      display: none;
    }

    ~ svg:nth-of-type(2) {
      display: block;
    }
  }

  &:not(:checked) {
    ~ svg:nth-of-type(1) {
      display: block;
    }

    ~ svg:nth-of-type(2) {
      display: none;
    }
  }
`;

export const Describe = styled.div`
  width: 54%;
  text-transform: capitalize;
`;

export const Title = styled.div`
  margin-bottom: .25rem;
  font-size: 1rem;
  font-weight: bold;
`;

export const Subtitle = styled.div`
  color: ${gray};
  font-size: small;
`;

export const Details = styled.div`
  align-self: center;
  text-align: center;
  font-weight: bold;
`;

export const Status = styled.div`
  margin-bottom: .25rem;
  color: ${blue};
  font-size: small;
  text-transform: uppercase;
`;

export const Deadline = styled.div`
  padding: 0.25rem 1rem;
  font-size: small;
  text-transform: lowercase;
  white-space: nowrap;
  color: ${white};
  border-radius: 20px;
  background-color: ${blue};
`;
