import styled from "styled-components";
import { IThemeProps } from "../../styles/theme";

interface IProps {
  theme: IThemeProps;
}

const Wrapper = styled.div`
  margin: 4rem auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Text = styled.h1`
  color: ${({ theme }: IProps) => theme.text};
`;

export { Wrapper, Text };
