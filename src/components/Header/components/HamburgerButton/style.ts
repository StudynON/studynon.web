import styled, { css } from "styled-components";
import { IThemeProps } from "../../../../styles/theme";

interface IButtonProps {
  theme: IThemeProps;
}

const buttonLine = css`
  position: absolute;
  content: "";
  width: 30px;
  height: 4px;
  border-radius: 2px;
  background-color: ${({ theme }: IButtonProps) => theme.darkKettle};
  left: 0;
`;

const Button = styled.button`
  width: 30px;
  height: 30px;
  position: relative;
  border: none;
  background-color: transparent;

  & div {
    ${buttonLine};
    top: 50%;
    transform: translatey(-50%);
  }

  &::before {
    ${buttonLine}
    top: 0;
  }

  &::after {
    ${buttonLine};
    bottom: 0;
  }

  @media (min-width: 720px) {
    display: none;
  }
`;

export { Button };
