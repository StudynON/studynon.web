import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

import { IThemeProps } from "../../styles/theme";

interface IHeaderProps {
  theme: IThemeProps;
}

const HeaderHeight = css`
  height: 73px;
`;

const Container = styled.header`
  ${HeaderHeight}
  width: 100%;
`;

const FixedHeader = styled.div`
  position: fixed;
  background-color: ${({ theme }: IHeaderProps) => theme.white};
  box-shadow: 0px 1px 2px 0px rgb(0 0 0 / 10%);
  width: 100%;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${HeaderHeight}
`;

const Logo = styled(Link)`
  & svg {
    cursor: pointer;

    width: 160px;
    height: 60px;
  }
`;

const buttonLine = css`
  position: absolute;
  content: "";
  width: 30px;
  height: 4px;
  border-radius: 2px;
  background-color: ${({ theme }: IHeaderProps) => theme.darkKettle};
  left: 0;
`;

const HamburgerButton = styled.button`
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
`;

export { Logo, FixedHeader, Container, HamburgerButton };
