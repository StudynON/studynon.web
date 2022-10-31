import styled, { css } from "styled-components";
import { IThemeProps } from "../../styles/theme";

interface SidebarProps {
  theme: IThemeProps;
}

const ContainerWidthAndHeight = css`
  max-width: 261px;
  width: 100%;
  height: calc(100vh - 73px);

  @media (max-width: 720px) {
    display: none;
  }
`;

const Container = styled.section`
  ${ContainerWidthAndHeight}
`;

const FixedContainer = styled.div`
  position: fixed;
  padding: 35px 20px 20px;
  background-color: ${({ theme }: SidebarProps) => theme.white};
  box-shadow: 1px 0px 5px rgb(0 0 0 / 10%);

  ${ContainerWidthAndHeight}
`;

export { Container, FixedContainer };
