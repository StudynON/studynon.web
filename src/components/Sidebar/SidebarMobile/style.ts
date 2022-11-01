import styled, { css } from "styled-components";
import { IThemeProps } from "../../../styles/theme";

interface SidebarMobileProps {
  theme: IThemeProps;
}

const Container = styled.nav`
  position: fixed;
  right: -50px;
  top: 0;
  padding: 17px 20px 20px;
  box-shadow: -2px 1px 8px rgb(0 0 0 / 10%);
  background-color: ${({ theme }: SidebarMobileProps) => theme.white};
  max-width: 271px;
  height: 100vh;
  display: block;
  width: 0px;
  z-index: 0;
  transition: width 300ms ease-in-out;
  overflow: hidden;

  &.active {
    z-index: 3;
    width: 100%;
    right: 0;
  }

  @media ${({theme}:SidebarMobileProps) => theme.devices.laptop}{
    display: none;
  }
`;

const line = css`
  content: "";
  left: 0;
  border-radius: 2px;
  position: absolute;
  width: 35px;
  height: 4px;
  background-color: ${({ theme }: SidebarMobileProps) => theme.darkKettle};
`;

const CloseButton = styled.button`
  width: 35px;
  height: 34px;
  position: relative;
  background-color: transparent;
  margin-bottom: 20px;
  border: none;
  cursor: pointer;

  &::before {
    ${line}
    transform: rotate(45deg);
  }

  &::after {
    ${line}
    transform: rotate(-45deg);
  }
`;

export { Container, CloseButton };
