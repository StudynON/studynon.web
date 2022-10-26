import styled from "styled-components";
import { IThemeProps } from "../../styles/theme";

interface IButtonProps {
  theme: IThemeProps;
}

const Container = styled.section`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }: IButtonProps) => theme.pageBackground};
`;

export { Container };
