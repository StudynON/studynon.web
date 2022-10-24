import styled from "styled-components";

import { IThemeProps } from "../../../../../styles/theme";

interface IButtonProps {
  theme: IThemeProps;
}

const white = ({ theme }: IButtonProps) => theme.white;
const blue = ({ theme }: IButtonProps) => theme.blue;

export const Button = styled.button`
  margin-top: 1rem;
  padding: .5rem;
  cursor: pointer;
  font-weight: 700;
  text-transform: uppercase;
  color: ${blue};
  border-radius: 5px;
  border: 2px solid ${blue};
  background-color: transparent;

  transition: color .2s ease, background-color .2s ease;

  &:hover {
    color: ${white};
    background-color: ${blue};
  }
`;
