import styled from "styled-components";
import { IThemeProps } from "../../styles/theme";

interface ITheme {
  theme: IThemeProps;
}

export const SForm = styled.form`
  max-width: 50rem;
  min-width: 20rem;
  width: 100%;

  margin: 0 auto;

  padding: 1rem;

  @media ${({ theme }: ITheme) => theme.devices.laptop} {
    margin: 2rem auto;
  }
`;

export const SDateContainer = styled.div`
  height: 67px;
  margin-top: 2rem;
  display: flex;
  align-items: flex-end;
  gap: 1.5rem;
`;

export const SBtnContainer = styled.div`
  margin-top: 3rem;

  display: flex;
  justify-content: center;
  gap: 3rem;
`;
