import styled from "styled-components";
import { IThemeProps } from "../../styles/theme";

interface IContainerProps {
  theme: IThemeProps;
}

const Container = styled.section`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }: IContainerProps) => theme.pageBackground};
`;

const ContentSection = styled.section`
  display: flex;
  width: 100%;
`;

const Main = styled.main`
  width: 100%;
`;

export { Container, ContentSection, Main };
