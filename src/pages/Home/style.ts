import styled from "styled-components";

import { IThemeProps } from "../../styles/theme/";

interface IProps {
  theme: IThemeProps;
}

const Container = styled.div``;

/**
 * Usando a interface você pode ver as propriedades disponíveis em "theme"
 * theme: { breakpoints, text, background, white, light, dark, gray, blue, orange}
 */
const Text = styled.h1`
  color: ${({ theme }: IProps) => theme.text};
`;

export { Container, Text };
