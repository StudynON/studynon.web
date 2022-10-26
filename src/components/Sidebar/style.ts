import styled from "styled-components";
import { IThemeProps } from "../../styles/theme";

interface SidebarProps {
  theme: IThemeProps;
}

const Container = styled.section`
  width: 300px;
  padding: 35px 20px 20px;
  background-color: ${({ theme }: SidebarProps) => theme.white};
  box-shadow: 1px 0px 5px rgb(0 0 0 / 10%);
`;

export { Container };
